import { hashPassword } from "./hashPassword";

export async function verifyPassword(
  inputPassword: string,
  storedHash: string
) {
  const inputHash = await hashPassword(inputPassword);

  return inputHash === storedHash;
}
