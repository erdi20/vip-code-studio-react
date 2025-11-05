import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login" description="login akun">
      <FormLogin />
    </AuthLayout>
  );
};
export default LoginPage;
