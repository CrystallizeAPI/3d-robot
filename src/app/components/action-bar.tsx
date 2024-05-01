type BoxProps = {
  children: React.ReactNode;
};

export const ActionBar = ({ children }: BoxProps) => {
  return <div className="action-bar">{children}</div>;
};
