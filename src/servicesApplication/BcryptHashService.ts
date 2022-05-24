import { compare, hash } from 'bcryptjs';
import { IBcryptHashService } from './interfaces/IBcryptHashService';

class BcryptHashService implements IBcryptHashService {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export default BcryptHashService;