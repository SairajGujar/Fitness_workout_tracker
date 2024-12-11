import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export async function authenticate(req, res, next) {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) return res.status(403);
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
    return res.status(403);
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
}

