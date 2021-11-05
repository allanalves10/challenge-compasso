import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request, response) {
    const { code } = request.body;
    console.log(code);
    const service = new AuthenticateUserService();

    try {
      console.log(code);
      const result = await service.execute(code);
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { AuthenticateUserController };