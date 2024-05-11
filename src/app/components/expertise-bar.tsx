import { ActionBar } from "./action-bar";
import { RadioButton } from "./radio-button";

type ExpertiseBarProps = {
  expertise: string[];
  onSelect: (expertise: string) => void;
};

export const ExpertiseBar = ({ expertise, onSelect }: ExpertiseBarProps) => {
  return (
    <ActionBar>
      {expertise.map((item, index) => (
        <RadioButton name="expertise" value={item} defaultChecked={index === 0} onClick={() => onSelect(item)}>
          {item}
        </RadioButton>
      ))}
    </ActionBar>
  );
};
