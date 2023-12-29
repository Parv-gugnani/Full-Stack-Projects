const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="p-1 bg-red-500 w-full">Auth Layout</nav>
      {children}
    </div>
  );
};

export default AuthLayout;
