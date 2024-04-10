import { db } from "@/lib/db";

export const getPasswordResetToken = async (token: string) => {
  try {
    const passwordReToken = await db.passwordResetToken.findUnique({
      where: { token },
    });
    return passwordReToken;
  } catch (error) {
    return null;
  }
};

export const getPasswordResetTokenByEamil = async (email: string) => {
  try {
    const passwordReToken = await db.passwordResetToken.findFirst({
      where: { email },
    });
    return passwordReToken;
  } catch (error) {
    return null;
  }
};
