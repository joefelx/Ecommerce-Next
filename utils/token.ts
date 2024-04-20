import jwt from "jsonwebtoken";

const SECRET = String(process.env.NEXT_SERVER_JWT_SECRET);

function generate(data: Object, exp: string) {
  return jwt.sign(data, SECRET, { expiresIn: exp });
}

function verify(token: string) {
  return jwt.verify(token, SECRET);
}

export default { generate, verify };
