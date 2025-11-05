import Button from "../Elements/Buttons";
import InputForm from "../Elements/input";
const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Nama" type="text" name="nama" placeholder="nama"></InputForm>
      <InputForm label="Email" type="email" name="email" placeholder="aa@gmail.com"></InputForm>
      <InputForm label="Password" type="password" name="password" placeholder="*****"></InputForm>

      <Button classname="bg-blue-600 text-slate-100">Register</Button>
    </form>
  );
};
export default FormLogin;
