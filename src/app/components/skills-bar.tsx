import { ActionBar } from "./action-bar";
import { RadioButton } from "./radio-button";

type SkillsBarProps = {
  skills: string[];
  onSelect: (expertise: string) => void;
};

export const SkillsBar = ({ skills, onSelect }: SkillsBarProps) => {
  return (
    <ActionBar>
      {skills.map((item, index) => (
        <RadioButton name="expertise" value={item} defaultChecked={index === 0} onClick={() => onSelect(item)}>
          {item}
        </RadioButton>
      ))}
    </ActionBar>
  );
};
