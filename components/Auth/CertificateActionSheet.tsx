import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import ActionSheet, { SheetProps } from 'react-native-actions-sheet';
import { tokens, images } from '../../constants';
import { useState } from 'react';

const organizations = [
  'PADI',
  'SDI',
  'CMAS',
  'SSI',
  'NAUI',
  'KUDA',
  'BSAC',
];

const levels = [
  'Open Water Diver',
  'Advanced Open Water Diver',
  'Rescue Diver',
  'Dive master',
  'Instructor Deevelopment Course',
  'Course director',
];

const CertificateItem = ({ type, item, handleSelect }: { type: 'organization' | 'level' | undefined; item: string; handleSelect: () => void }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={1}
      className={`flex-row w-full h-52 items-center px-24 ${isPressed ? 'bg-primary-100' : ''}`}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={() => handleSelect()}
    >
      {type === 'organization' && <Image source={images[item]} className='mr-24'/>}
      <Text className={`${tokens.rg_16} color-gray-800`}>{item}</Text>
    </TouchableOpacity>
  );
};

function CertificateActionSheet({ payload }: SheetProps<'certificate-sheet'>) {
  const ref = payload?.ref;
  const type = payload?.type;

  const handleSelectItem = () => {
    ref?.current?.hide();
  };

  return (
    <ActionSheet ref={ref}>
      <View className='flex items-center w-full'>
        <Text className={`${tokens.md_20} color-gray-800 my-28`}>
          {type === 'organization' ? '자격증 단체' : '자격증 레벨'}
        </Text>
        <FlatList
          className='w-full'
          data={type === 'organization' ? organizations : levels}
          renderItem={({ item }) => (
            <CertificateItem
              type={type}
              item={item}
              handleSelect={handleSelectItem}
            />
          )}
        />
      </View>
    </ActionSheet>
  );
}

export default CertificateActionSheet;