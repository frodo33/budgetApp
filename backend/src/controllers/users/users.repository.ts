import { UpdateResult } from "typeorm";

import { db } from "../../config/datasource";
import { User } from "../../entities/User";

const userRepository = db.getRepository(User)

export const createUser = async (user: Partial<User>): Promise<User> => await userRepository.save(user)
export const findUser = async (filter: Partial<User>): Promise<User | null> => await userRepository.findOneBy(filter)
export const updateUser = async (id: number, userData: Partial<User>): Promise<UpdateResult> => await userRepository.update(id, userData)