const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-red-500 w-full">Auth layout</nav>
      {children}
    </div>
  );
};

export default AuthLayout;
