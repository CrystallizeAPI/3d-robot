type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
  disabled?: boolean;
};

export const Button = ({ children, onClick, isSelected, disabled }: ButtonProps) => {
  return (
    <button type="submit" onClick={onClick} disabled={disabled} className={isSelected ? "selected" : undefined}>
      {children}
    </button>
  );
};
