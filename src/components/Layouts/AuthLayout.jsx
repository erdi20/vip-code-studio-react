import { Link } from "react-router-dom";
const AuthLayout = (props) => {
  const { children, title, description, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-96">
        <h1 className="text-2xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">{description}</p>
        {children}
        <p className="font-medium text-slate-500 mb-8">
          {type == "login" ? "belum punya akun?" : "sudah punya akun?"}
          {type == "login" ? (
            <Link to="/register" className="text-blue-600">
              Daftar
            </Link>
          ) : (
            <Link to="/" className="text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};
export default AuthLayout;
