import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, authConfig.secret);
    req.userId = decoded.id;

    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalido" });
  }
};
