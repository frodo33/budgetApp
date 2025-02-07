import { db } from "../../config/datasource";
import { UserRefreshToken } from "../../entities/UserRefreshTokens";

const userRefreshTokensRepository = db.getRepository(UserRefreshToken)

export const findRefreshToken = async (refreshToken: string, userId: number): Promise<UserRefreshToken | null> => {
  return await userRefreshTokensRepository.findOne({ where: { refreshToken, user: { id: userId } } })
}

export const saveRefreshToken = async (refreshToken: string, userId: number) => {
  return await userRefreshTokensRepository.save({
    refreshToken,
    user: { id: userId },
  })
}

export const deleteRefreshTokenById = async (id: number) => {
  return await userRefreshTokensRepository.delete({ id });
};