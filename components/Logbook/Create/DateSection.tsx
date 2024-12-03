import { View } from 'react-native';
import { useContext } from 'react';
import { LogbookContext } from 'contexts/LogbookContext';
import Title from '../Title';
import DateTimePicker from 'react-native-ui-datepicker';
import { tokens } from 'constants/';

export default function DateSection() {
  const { logbook, setLogbook } = useContext(LogbookContext);

  return(
    <View className='my-16'>
      <Title content='날짜' />
      <View className='h-8' />
      <View className='px-16'>
        <DateTimePicker
          mode='single'
          date={logbook.date || undefined}
          onChange={(params) => setLogbook({ ...logbook, date: params.date?.toString() || '' })}
          calendarTextStyle={{ color: tokens.gray_700 }}
          weekDaysTextStyle={{ color: tokens.gray_700 }}
          todayTextStyle={{ color: tokens.primary_400 }}
          todayContainerStyle={{
            backgroundColor: tokens.primary_100,
            borderWidth: 0,
          }}
          selectedTextStyle={{ color: '#FFFFFF', backgroundColor: tokens.primary_500 }}
          selectedItemColor='#3371FF'
          headerContainerStyle={{ backgroundColor: `${tokens.primary_100}` }}
          headerTextStyle={{ color: tokens.gray_700, marginVertical: 8 }}
          headerButtonColor={tokens.gray_700}
        />
      </View>
    </View>
  );
}