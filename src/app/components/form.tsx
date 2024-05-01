import { ActionBar } from "./action-bar";

type FormProps = {
  children: React.ReactNode;
  onSubmit: (value: string) => void;
};

export const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <ActionBar>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          onSubmit(form.value.value);

          form.reset();
        }}
      >
        {children}
      </form>
    </ActionBar>
  );
};
