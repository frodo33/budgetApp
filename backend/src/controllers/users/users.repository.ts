import { db } from "../../config/datasource";
import { User } from "../../entities/User";

const userRepository = db.getRepository(User)

export const findUserById = async (id: number): Promise<User | null> => await userRepository.findOneBy({ id })