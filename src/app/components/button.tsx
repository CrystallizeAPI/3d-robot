type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
};

export const Button = ({ children, onClick, isSelected }: ButtonProps) => {
  return (
    <button type="submit" onClick={onClick} className={isSelected ? "selected" : undefined}>
      {children}
    </button>
  );
};
