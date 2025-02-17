import { verify } from "jsonwebtoken";
import { findById } from "../models/user.model";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  
  verify(token, "SECRET_KEY", async (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    req.user = await findById(decoded.id);
    next();
  });
};

const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access Denied" });
    }
    next();
  };
};

export default { verifyToken, checkRole };
