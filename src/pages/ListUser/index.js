import { useEffect, useState } from "react";
import { useAuthentication } from "../../contexts/useAuthentication";
import api from "../../services/Api";
import { AreaChoice, AreaFilter, AreaRepos, AreaStarred, AreaUser, Container } from "./styles";
import logoGithub from '../../assets/logo.png';
import { toast } from "react-toastify";

function ListUser() {
  const { currentUser, setCurrentUser } = useAuthentication();
  const [filterUser, setFilterUser] = useState('');
  const [user, setUser] = useState(null);
  const [isRepos, setIsRepos] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  const [repos, setRepos] = useState(null);
  const [starred, setStarred] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      setUser(JSON.parse(localStorage.getItem('currentUser')));
    } else {
      getUserAuthenticated();
    }
  }, [currentUser]);

  async function getUserAuthenticated() {
    try {
      const { data } = await api.get('/user');
      localStorage.setItem('currentUser', JSON.stringify(data));
      setCurrentUser(data);
      setUser(data.login);
    } catch (err) {
      console.error(err);
    }
  }

  async function getRepos() {
    setIsRepos(true);
    setIsStarred(false);

    try {
      const { data } = await api.get(`/users/${user.login}/repos`);
      if (data.length === 0)  {
        return toast.info('Nenhum repositório foi encontrado.');
      }

      setRepos(data);
      toast.success(`Foram encontrado(s) ${data.length} repositório(s) para este usuário.`);
    } catch (err) {
      console.error(err);
      toast.error('Erro ao buscar por repositórios, tente novamente.')
    }
  }

  async function getStarred() {
    setIsRepos(false);
    setIsStarred(true);

    try {
      const { data } = await api.get(`/users/${user.login}/starred`);
      if (data.length === 0)  {
        return toast.info('Nenhum repositório favoritado foi encontrado.');
      }

      setStarred(data);
      toast.success(`Foram encontrado(s) ${data.length} repositório(s) favoritado(s).`);
    } catch (err) {
      console.error(err);
      toast.error(`Erro ao buscar por repositórios favoritados, tente novamente.`);
    }
  }

  async function getUser() {
    setIsRepos(false);
    setIsStarred(false);

    if (!filterUser) {
      return toast.error('Insira um usuário para realizar a pesquisa.');
    }

    if (filterUser.trim().length === 0) {
      return toast.error('Insira um nome de usuário válido.');
    }

    try {
      const { data } = await api.get(`/users/${filterUser.trim()}`);
      setUser(data);
      setFilterUser('');
      toast.success('Usuário encontrado com sucesso.');
    } catch (err) {
      console.error(err);
      setFilterUser('');
      toast.error('Erro na busca de usuário, verifique se o nome passado é válido.');
    }
  }

  return(
    <Container>
      <AreaFilter>
        <input value={filterUser} placeholder="Insira o usuário do github" onChange={(e) => setFilterUser(e.target.value)} />
        <button type="button" onClick={getUser}>Pesquisar</button>
      </AreaFilter>
      <AreaUser>
        <h1>Dados do Usuário</h1>
        <img src={user ? user.avatar_url : logoGithub} alt={user ? user.name : 'Usuário Github'} />
        <span>
          Nome:
          <p>{user ? user.name : '-'}</p>
        </span>
        <span>
          Quantidade de Repositórios Públicos:
          <p>{user ? user.public_repos : '0'}</p>
        </span>
      </AreaUser>
      <AreaChoice>
        <button onClick={getRepos} disabled={isRepos}>Listar Repositórios do Usuário</button>
        <button onClick={getStarred} disabled={isStarred}>Repositórios Favoritados</button>
      </AreaChoice>
      {isStarred && starred && starred.length > 0 && (
        <AreaStarred>
          {starred.map(element => (
            <ul key={element.id}>
              <li>
                Nome:
                <p>{element.name ? element.name : '-'}</p>
              </li>
              <li>
                Descrição:
                <p>{element.description ? element.description : '-'}</p>
              </li>
            </ul>
          ))}
        </AreaStarred>
      )}
      {isRepos && repos && repos.length > 0 && (
        <AreaRepos>
          {repos.map(element => (
            <ul key={element.id}>
              <li>
                Nome:
                <p>{element.name ? element.name : '-'}</p>
              </li>
              <li>
                Descrição:
                <p>{element.description ? element.description : '-'}</p>
              </li>
            </ul>
          ))}
        </AreaRepos>
      )}
    </Container>
  )
}

export default ListUser;