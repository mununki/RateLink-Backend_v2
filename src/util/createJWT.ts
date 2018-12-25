import jwt from "jsonwebtoken";
import { rejects } from "assert";

const createJWT = (id: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({ userId: id }, process.env.JWT_SECRET_KEY || "");

    resolve(token);
  });
};

export default createJWT;
