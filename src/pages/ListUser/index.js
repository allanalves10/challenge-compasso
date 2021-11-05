import { useEffect, useState } from "react";
import api from "../../services/Api";
import { Container } from "./styles";

function ListUser() {
  const [user, setUser] = useState('');
  // const [obj, setObj] = useState([]);

  useEffect(() => {
    getUserAuthenticated();
  }, []);

  async function getUserAuthenticated() {
    try {
      const { data } = await api.get('/user');
      console.log(data);
      setUser(data.login);
    } catch (err) {
      console.error(err);
    }
  }

  async function getRepos() {
    try {
      const { data } = await api.get(`/users/${user}/repos`);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function getStarred() {
    try {
      const { data } = await api.get(`/users/${user}/starred`);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  return(
    <Container>
      <p>{user}</p>
      {/* input */}
      {/* button to search */}
      <h1>...Usuários</h1>
      <button onClick={getRepos}>1</button>
      <button onClick={getStarred}>2</button>
    </Container>
  )
}

export default ListUser;