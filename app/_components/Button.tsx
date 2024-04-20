const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`border py-2 px-5 rounded-full text-sm font-normal ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
