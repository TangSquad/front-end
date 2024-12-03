import { View, Text } from 'react-native';
import { useEffect, useContext } from 'react';
import { LogsContext } from 'contexts/LogsContext';
import StepIndicator from 'react-native-step-indicator';
import { tokens } from 'constants/';

interface LogStepIndicatorProps {
  maxStep: number;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export default function LogStepIndicator({ maxStep, currentStep, setCurrentStep } : LogStepIndicatorProps) {
  const { logs, updateLogs } = useContext(LogsContext);

  useEffect(() => {
    // 장소 자동 완성
    if( currentStep !== 0 && logs[currentStep].location === '' ) {
      updateLogs({ index: currentStep, key: 'location', value: logs[currentStep - 1].location });
    }

    // 잠수시간 자동 완성
    if( currentStep !== 0 && logs[currentStep].diveTime === '' ) {
      updateLogs({ index: currentStep, key: 'diveTime', value: logs[currentStep - 1].diveTime });
    }
  }, [currentStep]);


  // if maxStep is less than 5, the view is horizontal, otherwise vertical
  const flexDirection = maxStep < 5 ? 'flex-row' : 'flex-col';
  const indicatorContainerStyle = `${maxStep < 5 ? 'w-1/2' : 'w-full'} ${maxStep < 5 ? 'ml-8' : 'mt-8'}`;

  const customeStyles = {  
    // Stroke style
    separatorStrokeWidth: 4,
    separatorFinishedColor: tokens.primary_400,
    separatorUnFinishedColor: tokens.gray_300,
    // Border style
    stepStrokeWidth: 0,
    currentStepStrokeWidth: 0,
    // Indicator style
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 30,
    stepIndicatorFinishedColor: tokens.primary_400,
    stepIndicatorUnFinishedColor: tokens.gray_300,
    stepIndicatorCurrentColor: tokens.primary_400,
    // Text style
    currentStepIndicatorLabelFontSize: 16,
    stepIndicatorLabelCurrentColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#ffffff',
    stepIndicatorLabelFinishedColor: '#ffffff',
  };

  return(
    <View className={`w-full ${flexDirection} justify-center items-center py-16 bg-white rounded-10 shadow`}>
      <Text className={`${tokens.md_14} color-gray-700`}>다이빙 로그</Text>
      <View className={indicatorContainerStyle}>
        <StepIndicator
          stepCount={maxStep}
          currentPosition={currentStep}
          onPress={(step) => setCurrentStep(step)}
          direction='horizontal'
          customStyles={customeStyles}
        />
      </View>
    </View>
  );
}