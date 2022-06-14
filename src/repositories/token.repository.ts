import Token from "src/entities/token.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Token)
export class TokenRepository extends Repository<Token> {

}