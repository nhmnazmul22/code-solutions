import bcrypt from "bcrypt";

const saltRounds = 10;

// Hashing Password
export const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

// Verifying Password
export const verifyPassword = async (inputPassword, storedHash) => {
  const match = await bcrypt.compare(inputPassword, storedHash);
  return match;
};
