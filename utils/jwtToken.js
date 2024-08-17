export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  // Determine if we are in a production environment
  const isProduction = process.env.NODE_ENV === "production";

  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 //1d
      ),
      httpOnly: true, // Ensures the cookie is only accessible by the web server
      secure: isProduction, // Ensure the cookie is sent over HTTPS in production
      sameSite: isProduction ? "None" : "Lax", // Adjust SameSite attribute depending on the environment
    })
    .json({
      success: true,
      user,
      message,
      token,
    });
};
