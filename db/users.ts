import { hashSync } from "bcrypt-ts-edge";

const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    password: hashSync("123456", 10),
  },
  {
    name: "Admin User",
    email: "admin@example.com",
    password: hashSync("123456", 10),
    role: "ADMIN",
  },
];

export default users;
