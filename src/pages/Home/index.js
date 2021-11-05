import { useEffect } from "react";
import github from "../../services/Github";
import { Container } from "./styles";
import { useAuthentication } from '../../contexts/useAuthentication';
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const { setUserToken } = useAuthentication();
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}`;

  async function signIn(githubCode) {
    try {
      const { data } = await github.post('/github/authenticate', { code: githubCode});
      localStorage.setItem('tokenCompassoUol', data.accessTokenResponse.access_token);
      setUserToken(data.accessTokenResponse.access_token);
      history.push('/home');
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const url = window.location.href;

    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);

      signIn(githubCode);
    }
  }, []);

  return(
    <Container>
      <a href={signInUrl}>Login Com o Github</a>
      <h1>...</h1>
    </Container>
  )
}

export default Home;