import { ScrollView, View, Text } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import DateTimePicker, { DateType } from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import AddPhoto from '../../components/CreateGathering/AddPhoto';
import CreateGatheringInputSection from 'components/CreateGatheringInputSection';
import PublicPrivateSwitch from 'components/CreateGathering/PublicPrivateSwitch';
import TagGroup from 'components/CreateGathering/TagGroup';
import MainButton from 'components/common/MainButton';
import { tokens } from 'constants/';
import { tags } from 'data/';

export default function CreateDiving() {
  const router = useRouter();
  const [isPublic, setIsPublic] = useState(true);
  const [thumbnail, setThumbnail] = useState<string>('');
  const [name, setName] = useState('');
  const [line, setLine] = useState('');
  const [limit, setLimit] = useState('');
  const [cost, setCost] = useState('');

  const [selectedAge, setSelectedAge] = useState<string[]>([]);
  const [selectedMood, setSelectedMood] = useState<string[]>([]);
  const [selectedCert, setSelectedCert] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);

  const isEmpty = (arr: string[]) => arr.length === 0;

  const handleSubmit = () => {
    if (!name || !line || !limit || !cost || isEmpty(selectedCert) || isEmpty(selectedMood) || isEmpty(selectedAge) || !date) {
      alert('입력하지 않은 항목이 있습니다.');
      return;
    }
    alert('다이빙 생성 완료');
    router.back();
  };

  const [date, setDate] = useState<{startDate: DateType, endDate: DateType}>();

  return (
    <ScrollView className='flex-1 bg-white'>
      <AddPhoto uri={thumbnail} setUri={setThumbnail} />
      <View className='-top-30 flex-1 bg-white rounded-t-30 px-24 py-20 space-y-24'>
        <PublicPrivateSwitch
          type='다이빙'
          isPublic={isPublic}
          setIsPublic={setIsPublic}
        />
        <Text className={`${tokens.bd_20} color-primary`}>다이빙 소개</Text>
        <CreateGatheringInputSection
          title='다이빙 이름'
          placeholder='다이빙 이름을 입력하세요.'
          limit={20}
          input={name}
          setInput={setName}
        />
        <CreateGatheringInputSection
          title='한 줄 소개'
          placeholder='다이빙을 소개하는 한 줄을 작성하세요.'
          limit={20}
          input={line}
          setInput={setLine}
        />
        <Text className={`${tokens.bd_16} color-gray-600 mb-12`}>다이빙 일정</Text>
        <DateTimePicker
          height={340}
          mode='range'
          startDate={date?.startDate}
          endDate={date?.endDate}
          onChange={(params) => setDate({ startDate: params.startDate, endDate: params.endDate })}
          minDate={dayjs().toDate()}
          calendarTextStyle={{ color: tokens.gray_700 }}
          weekDaysTextStyle={{ color: tokens.gray_700 }}
          todayTextStyle={{ color: tokens.primary_400 }}
          todayContainerStyle={{
            backgroundColor: tokens.primary_100,
            borderWidth: 0,
          }}
          selectedTextStyle={{ color: '#FFFFFF', backgroundColor: tokens.primary_500 }}
          selectedItemColor='#3371FF'
          selectedRangeBackgroundColor={tokens.primary_200}
          headerContainerStyle={{ backgroundColor: `${tokens.primary_100}` }}
          headerTextStyle={{ color: tokens.gray_700, marginVertical: 8 }}
          headerButtonColor={tokens.gray_700}
        />
        <Text className={`${tokens.bd_20} color-primary`}>다이빙 정보</Text>
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
        <TagGroup
          data={tags.certificates}
          title="자격 조건"
          selectedTags={selectedCert}
          setSelectedTags={setSelectedCert}
        />
        <TagGroup
          data={tags.locations}
          title="활동 지역"
          limit={1}
          selectedTags={selectedLocation}
          setSelectedTags={setSelectedLocation}
        />
        <TagGroup
          data={tags.ageGroup}
          title="연령"
          selectedTags={selectedAge}
          setSelectedTags={setSelectedAge}
        />
        <TagGroup
          data={tags.mood}
          title="분위기"
          limit={2}
          selectedTags={selectedMood}
          setSelectedTags={setSelectedMood}
        />
        <View className='mb-30'>
          <MainButton title='완료' handlePress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
}