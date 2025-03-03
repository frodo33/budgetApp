import { UpdateResult } from "typeorm";

import { db } from "../../config/datasource";
import { User } from "../../entities/User";

const userRepository = db.getRepository(User)

export const createUser = async (user: Partial<User>): Promise<User> => await userRepository.save(user)

export const findUserByEmail = async (email: string): Promise<User | null> => await userRepository.findOneBy({ email })

export const findUserById = async (id: number): Promise<User | null> => await userRepository.findOneBy({ id })

export const updateUserPassword = async (id: number, password: string): Promise<UpdateResult> => await userRepository.update(id, { password })