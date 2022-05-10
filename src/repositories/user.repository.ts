import User from "src/entities/user.entity";
import { SignupRequest } from "src/utils/requests/signup.request";
import { SignupDbRequest } from "src/utils/requests/singupDb.request";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signin(username: string){
        return await this.findOne({username})
    }

    async signUp(signupDbRequest: SignupDbRequest){
        return await this.save(signupDbRequest);
    }
}