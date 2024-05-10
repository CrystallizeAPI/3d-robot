import { ActionBar } from "./action-bar";
import { RadioButton } from "./radio-button";

type VariantsBarProps = {
  variants: string[];
  onSelect: (variant: string) => void;
};

export const VariantsBar = ({ variants, onSelect }: VariantsBarProps) => {
  return (
    <ActionBar>
      {variants.map((variant, index) => (
        <RadioButton
          key={variant}
          name="variant"
          value={variant}
          defaultChecked={index === 0}
          onClick={() => onSelect(variant)}
        >
          {variant}
        </RadioButton>
      ))}
    </ActionBar>
  );
};
