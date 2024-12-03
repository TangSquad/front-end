import { View } from 'react-native';
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getLogsByLogbookId } from 'api/logbook/log';
import LogStepIndicator from '../Create/LogStepIndicator';
import SetepIndicatorText from '../StepIndicatorText';
import RequiredSection from '../Create/RequiredSection';
import DivingThemeSection from '../DivingThemeSection';
import EtcSection from './EtcSection';
import WeatherSection from './WeatherSection';
import EnvironmentSection from './EnvironmentSection';
import showToast from 'utils/toast';

export default function LogsSection() {
  const { id } = useLocalSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  
  const { data, error } = useQuery({
    queryKey: ['logs', id],
    queryFn: () => getLogsByLogbookId(Number(id)),
  });

  if (error) {
    showToast('error', '로그 데이터 로딩에 실패하였습니다.');
  }

  if (!data || data.length === 0) {
    return <View className='bg-white'></View>;
  }

  const isEtcNeeded = data && (data[currentStep].avgDepth || data[currentStep].maxDepth || data[currentStep].startBar|| data[currentStep].endBar);
  const isWeatherNeeded = data && (data[currentStep].weather || data[currentStep].airTemp || data[currentStep].surfTemp || data[currentStep].bottTemp);
  const isEnvironmentNeeded = data && (data[currentStep].tide || data[currentStep].wave || data[currentStep].surge || data[currentStep].viewSight);

  return (
    <View>
      <LogStepIndicator maxStep={data?.length} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <SetepIndicatorText step={currentStep} />
      <RequiredSection location={data[currentStep].location} diveTime={data[currentStep].diveTime} />
      {data[currentStep].subject && <DivingThemeSection currentStep={currentStep} selected={data[currentStep].subject} />}
      {isEtcNeeded &&
        <EtcSection
          avgDepth={data[currentStep].avgDepth}
          maxDepth={data[currentStep].maxDepth}
          startBar={data[currentStep].startBar}
          endBar={data[currentStep].endBar}
        />}
      {isWeatherNeeded && 
        <WeatherSection
          weather={data[currentStep].weather}
          airTemp={data[currentStep].airTemp}
          surfTemp={data[currentStep].surfTemp}
          bottTemp={data[currentStep].bottTemp}
        />}
      {isEnvironmentNeeded &&
        <EnvironmentSection
          tide={data[currentStep].tide}
          wave={data[currentStep].wave}
          surge={data[currentStep].surge}
          viewSight={data[currentStep].viewSight}
        />}
    </View>
  );
}