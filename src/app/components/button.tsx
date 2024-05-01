type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button type="submit" onClick={onClick}>
      {children}
    </button>
  );
};
