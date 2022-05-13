import User from "src/entities/user.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signin(username: string){
        return await this.findOne({username})
    }

    async signUp(user: User){
        return await this.save(user);
    }
}