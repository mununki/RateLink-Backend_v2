import crypto from "crypto";

export const comparePW = (userPassword: string, password: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const hashedPassword = userPassword.split("$");
    crypto.pbkdf2(
      password, // input password
      hashedPassword[2], // salt
      parseInt(hashedPassword[1], 10), // iterations
      32, // keylen
      "sha256", // digest
      (err, derivedKey) => {
        if (err) {
          throw err;
        }
        resolve(derivedKey.toString("base64") === hashedPassword[3]);
      }
    );
  });
};

export const generatePW = (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(8).toString("base64"); // generate the salt 8 bytes
    crypto.pbkdf2(password, salt, 100000, 32, "sha256", (err, derivedKey) => {
      if (err) {
        throw err;
      }
      resolve("pbkdf2_sha256$100000$" + salt + "$" + derivedKey.toString("base64"));
    });
  });
};
