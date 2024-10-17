import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import ActionSheet, { SheetProps } from 'react-native-actions-sheet';
import { useMutation } from '@tanstack/react-query';
import { getOrganizations, OrganizationType } from 'api/certificate/organizations';
import { getLevels, LevelType } from 'api/certificate/levels';
import { tokens } from 'constants/';

interface OrganizationProps {
  type: 'organization';
  item: OrganizationType;
  handleSelect: (type: string, item) => void;
};

interface LevelProps {
  type: 'level';
  item: LevelType;
  handleSelect: (type: string, item) => void;
};

type CertificateItemProps = OrganizationProps | LevelProps;
type SelectedItemProps = Omit<OrganizationProps, 'handleSelect'> | Omit<LevelProps, 'handleSelect'>;

const SelectedItem = ({ type, item }: SelectedItemProps): JSX.Element => {
  return (
    <View className='flex-row justify-between items-center w-fit h-fit mx-16 my-5'>
      {type === 'organization' ? <Image source={{ uri: item.imageUrl }} className='w-32 h-32 mr-12' /> : null}
      <Text className={`${tokens.md_16} color-gray-800`}>{item.name}</Text>
    </View>
  );
};

const CertificateItem = ({ type, item, handleSelect }: CertificateItemProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={1}
      className={`flex-row w-full h-54 items-center px-24 ${isPressed ? 'bg-primary-100' : ''}`}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={() => handleSelect(type, item)}
    >
      {type === 'organization' && <Image source={{ uri: item.imageUrl }} className='w-44 h-44 mr-24'/>}
      <Text className={`${tokens.rg_16} color-gray-800`}>{item.name}</Text>
    </TouchableOpacity>
  );
};

function CertificateActionSheet({ payload }: SheetProps<'certificate-sheet'>) {
  if (!payload) return null;

  const ref = payload.ref;
  const type = payload.type;

  const [organizations, setOrganizations] = useState<OrganizationType[]>();
  const [levels, setLevels] = useState<LevelType[]>();

  const organizationMutation = useMutation({
    mutationFn: getOrganizations,
    onSuccess: (data) => {
      setOrganizations(data.data);
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const levelMutation = useMutation({
    mutationFn: getLevels,
    onSuccess: (data) => {
      setLevels(data.data);
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  useEffect(() => {
    if (type === 'organization')
      organizationMutation.mutate();
    else 
      levelMutation.mutate(payload.organizationId);
  }, []);

  const handleSelectItem = (type: string, item) => {
    if (type === 'organization' && 'setSelectedOrganization' in payload) {
      payload.setSelectedOrganization({
        component: SelectedItem({ type, item }),
        id: item.id,
      });
    } else if (type === 'level' && 'setSelectedLevel' in payload) {
      payload.setSelectedLevel({
        component: SelectedItem({ type, item }),
        id: item.id,
      });
    }

    ref?.current?.hide();
  };

  return (
    <ActionSheet ref={ref}>
      <View className='flex items-center w-full mb-20'>
        <Text className={`${tokens.md_20} color-gray-800 my-28`}>
          {type === 'organization' ? '자격증 단체' : '자격증 레벨'}
        </Text>
        {type === 'organization' ? <FlatList
          className='w-full'
          data={organizations}
          renderItem={({ item }) => (
            <CertificateItem
              type={type}
              item={item}
              handleSelect={handleSelectItem}
            />
          )}
        /> :
          <FlatList
            className='w-full'
            data={levels}
            renderItem={({ item }) => (
              <CertificateItem
                type={type}
                item={item}
                handleSelect={handleSelectItem}
              />
            )}
          />
        }
      </View>
    </ActionSheet>
  );
}

export default CertificateActionSheet;