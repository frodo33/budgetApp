import { db } from "../../config/datasource";
import { UserInvalidToken } from "../../entities/UserInvalidTokens";

const userInvalidTokensRepository = db.getRepository(UserInvalidToken)

export const saveInvalidToken = async (accessToken: string, userId: number, expiresAt: Date) => {
  return await userInvalidTokensRepository.save({
    accessToken,
    userId,
    expiresAt,
  })
}

export const findInvalidToken = async (accessToken: string): Promise<UserInvalidToken | null> => await userInvalidTokensRepository.findOneBy({ accessToken })