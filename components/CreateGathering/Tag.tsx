import { Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { tokens } from 'constants/';

interface TagProps {
  tag: string;
  disabled: boolean;
  handleSelect: (tag: string) => void;
}

function Tag({ tag, disabled, handleSelect }: TagProps) {
  const [isChecked, setIsChecked] = useState(false);
  const checkedStyle = `${tokens.md_14} bg-white border border-primary-600`;
  const uncheckedStyle = `bg-gray-50 ${tokens.rg_14} border border-gray-50`;

  const handlePress = () => {
    setIsChecked(!isChecked);
    handleSelect(tag);
  };

  return(
    <TouchableOpacity
      className={`mr-10 mb-10 py-5 px-15 ${isChecked ? checkedStyle : uncheckedStyle} rounded-30`}
      onPress={handlePress}
      disabled={disabled}
    >
      <Text className={`${isChecked ? 'color-blue-600' : 'color-gray-600'}`}>{tag}</Text>
    </TouchableOpacity>
  );
}

export default Tag;