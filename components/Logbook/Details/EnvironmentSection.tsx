import { View, Text } from 'react-native';
import SangJungHa from '../Create/SangJungHa';
import Title from '../Title';
import { Environment } from 'types/Logbook';
import { tokens } from 'constants/';

export default function EnvironmentSection(props: Environment) {

  return(
    <View className='flex-row justify-between my-16'>
      <Title content='수중환경' />
      <View>
        <View className='flex-row border-b border-gray-300 p-4 pt-0'>
          <SangJungHa
            title='조류'
            value={props.tide}
            disabled={true}
          />
          <View className='w-18' />
          <SangJungHa
            title='파도'
            value={props.wave}
            disabled={true}
          />
        </View>
        <View className='flex-row border-b border-gray-300 p-4 mt-9'>
          <SangJungHa
            title='서지'
            value={props.surge}
            disabled={true}
          />
          <View className='w-18' />
          <View className='flex-row items-center'>
            <Text className={`${tokens.md_16} color-gray-600 mr-9`}>시야</Text>
            <View className='flex-row'>
              <View className='w-[40] text-center'>
                <Text className={`${tokens.md_16} color-gray-800`}>{props.viewSight}</Text>
              </View>
              <Text className={`${tokens.rg_14} color-gray-400 mx-4`}>M</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}