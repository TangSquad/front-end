import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { tokens } from '../../constants';
import CreateGatheringInputSection from '../../components/CreateGatheringInputSection';

function CreateGathering() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [line, setLine] = useState('');
  const [desc, setDesc] = useState('');
  const [limit, setLimit] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = () => {
    if (!name || !line || !desc || !limit || !cost) {
      alert('입력하지 않은 항목이 있습니다.');
      return;
    }
    alert('모임 생성 완료');
    router.back();
  };

  return (
    <ScrollView>
      <View className='flex-1 bg-white rounded-t-30 px-24 py-20 gap-y-24 mt-10'>
        <Text className={`${tokens.bd_20} color-primary`}>모임 소개</Text>
        <CreateGatheringInputSection
          title='모임 이름'
          placeholder='모임 이름을 입력하세요.'
          limit={20}
          input={name}
          setInput={setName}
        />
        <CreateGatheringInputSection
          title='한 줄 소개'
          placeholder='모임을 소개하는 한 줄을 작성하세요.'
          limit={20}
          input={line}
          setInput={setLine}
        />
        <CreateGatheringInputSection
          title='모임 소개'
          placeholder='모임을 소개하는 글을 작성하세요.'
          input={desc}
          setInput={setDesc}
        />
        <Text className={`${tokens.bd_20} color-primary`}>모임 정보</Text>
        <CreateGatheringInputSection
          title='인원 제한'
          flex='row'
          input={limit}
          setInput={setLimit}
        />
        <CreateGatheringInputSection
          title='1인 활동 예상 비용'
          flex='row'
          input={cost}
          setInput={setCost}
        />
        <TouchableOpacity
          className='rounded-10 bg-primary py-16 justify-center items-center'
          onPress={handleSubmit}
        >
          <Text className={`${tokens.md_16} color-white`}>완료</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default CreateGathering;