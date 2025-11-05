const AuthLayout = (props) => {
  const { children, title, description } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-96">
        <h1 className="text-2xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">{description}</p>
        {children}
      </div>
    </div>
  );
};
export default AuthLayout;
