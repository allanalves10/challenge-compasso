import axios from 'axios';
import 'dotenv/config';

class AuthenticateUserService {
  async execute(code) {
    const url = 'https://github.com/login/oauth/access_token';

    const { data: accessTokenResponse } = await axios.post(url, null, {
      params: {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        code,
      },
      headers: {
        "Accept": "application/json",
      },
    });

  
    return { accessTokenResponse };
  }
}

export { AuthenticateUserService };