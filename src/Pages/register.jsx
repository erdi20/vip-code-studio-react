import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" description='daftar akun'>
      <FormRegister />;
    </AuthLayout>
  );
};
export default RegisterPage;
