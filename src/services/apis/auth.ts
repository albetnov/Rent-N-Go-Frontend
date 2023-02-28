import client from "../../utils/client";

interface RegisterData {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
}

const register = async (data: RegisterData) => {
  try {
    const res = await client.post("/auth/register", data);

    return res.data;
  } catch (err: any) {
    console.error(err);
    return false;
  }
};

export { register };
