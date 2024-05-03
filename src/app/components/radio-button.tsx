type RadioButtonProps = {
  children: React.ReactNode;
  name: string;
  value: string;
  onClick?: () => void;
  defaultChecked?: boolean;
};

export const RadioButton = ({ children, name, value, onClick, defaultChecked }: RadioButtonProps) => {
  return (
    <label onClick={onClick}>
      <input type="radio" name={name} value={value} className="sr-only" defaultChecked={defaultChecked} />
      <button type="button">{children}</button>
    </label>
  );
};
