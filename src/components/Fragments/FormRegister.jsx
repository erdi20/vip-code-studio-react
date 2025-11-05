import Button from "../Elements/Buttons";
import InputForm from "../Elements/input";
import { Link } from "react-router-dom";
const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Nama" type="text" name="nama" placeholder="nama"></InputForm>
      <InputForm label="Email" type="email" name="email" placeholder="aa@gmail.com"></InputForm>
      <InputForm label="Password" type="password" name="password" placeholder="*****"></InputForm>
      <p className="font-medium text-slate-500 mb-8">
        sudah punya akun?
        <Link to="/" className="text-blue-600">
          Login
        </Link>
      </p>
      <Button classname="bg-blue-600 text-slate-100">Register</Button>
    </form>
  );
};
export default FormLogin;
