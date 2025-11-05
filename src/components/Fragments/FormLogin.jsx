import Button from "../Elements/Buttons";
import InputForm from "../Elements/input";
import { Link } from "react-router-dom";
const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Email" type="email" name="email" placeholder="aa@gmail.com"></InputForm>
      <InputForm label="Password" type="password" name="password" placeholder="*****"></InputForm>
      <p className="font-medium text-slate-500 mb-8">
        belum punya akun?
        <Link to="/register" className="text-blue-600">
          Daftar
        </Link>
      </p>

      <Button classname="bg-blue-600 text-slate-100">Submit</Button>
    </form>
  );
};
export default FormLogin;
