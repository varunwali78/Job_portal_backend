export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // 1d
      ),
      httpOnly: true,
      secure: true, // Force secure cookies
      sameSite: "None", // Force cross-site cookies
    })
    .json({
      success: true,
      user,
      message,
      token,
    });
};
