import { db } from "../../config/datasource";
import { User } from "../../entities/User";

const userRepository = db.getRepository(User)

export const findUserByEmail = async (email: string): Promise<User | null> => await userRepository.findOneBy({ email })

export const createUser = async (user: Partial<User>): Promise<User> => await userRepository.save(user)