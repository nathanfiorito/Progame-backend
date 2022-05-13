import Module from "module";
import Question from "src/entities/question.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {

}