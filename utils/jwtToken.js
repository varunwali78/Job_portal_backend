export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  const isProduction = process.env.NODE_ENV === "production";

  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // 1d
      ),
      httpOnly: true,
      secure: isProduction, // Required for SameSite=None
      sameSite: "None", // Must be None for cross-site cookies
    })
    .json({
      success: true,
      user,
      message,
      token,
    });
};
