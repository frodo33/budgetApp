import { db } from "../../config/datasource";
import { UserRefreshToken } from "../../entities/UserRefreshTokens";

const REFRESH_TOKEN_LIMIT = 5;

const userRefreshTokensRepo = db.getRepository(UserRefreshToken)

export const findRefreshToken = async (refreshToken: string, userId: number): Promise<UserRefreshToken | null> => {
  return await userRefreshTokensRepo.findOne({ where: { refreshToken, user: { id: userId } } })
}

export const saveRefreshToken = async (refreshToken: string, userId: number) => {
  return await userRefreshTokensRepo.save({
    refreshToken,
    user: { id: userId },
  })
}

export const deleteRefreshTokenById = async (id: number) => {
  return await userRefreshTokensRepo.delete({ id });
};

export const cleanOldRefreshTokens = async (userId: number) => {
  const userTokens = await userRefreshTokensRepo.find({
    where: { user: { id: userId } },
    order: { createdAt: "ASC" },
  });

  if (userTokens.length >= REFRESH_TOKEN_LIMIT) {
    const tokensToRemove = userTokens.slice(0, userTokens.length - (REFRESH_TOKEN_LIMIT - 1));

    await userRefreshTokensRepo.remove(tokensToRemove);
  }
};