import { useEffect, useState } from "react";
import github from "../../services/Github";
import { AreaLogin, Container } from "./styles";
import { useAuthentication } from '../../contexts/useAuthentication';
import { useHistory } from "react-router-dom";
import logoGithub from '../../assets/logo.png';

function Home() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(false);

    }
  }

  useEffect(() => {
    const url = window.location.href;

    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');
      
      setIsLoading(true);

      window.history.pushState({}, '', urlWithoutCode);

      signIn(githubCode);
    }
  }, []);

  return(
    <Container>
      <AreaLogin>
        <img src={logoGithub} alt="Logo GitHub"/>

        {!isLoading && 
          <a href={signInUrl}>Login Com o Github</a>
        }

        {isLoading && 
          <p>Carregando...</p>
        }        
      </AreaLogin>
    </Container>
  )
}

export default Home;