import Button from "../Elements/Buttons";
import InputForm from "../Elements/input";
const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Email" type="email" name="email" placeholder="aa@gmail.com"></InputForm>
      <InputForm label="Password" type="password" name="password" placeholder="*****"></InputForm>

      <Button classname="bg-blue-600 text-slate-100">Submit</Button>
    </form>
  );
};
export default FormLogin;
