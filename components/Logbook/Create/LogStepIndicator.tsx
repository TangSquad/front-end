import { View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { tokens } from 'constants/';

interface LogStepIndicatorProps {
  maxStep: number;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export default function LogStepIndicator({ maxStep, currentStep, setCurrentStep } : LogStepIndicatorProps) {
  // if maxStep is less than 5, the view is horizontal, otherwise vertical
  const flexDirection = maxStep < 5 ? 'flex-row' : 'flex-col';
  const indicatorBoxStyle = `w-[${maxStep < 5 ? maxStep*50 : 320}] ${maxStep < 5 ? 'ml-8' : 'mt-8'}`;

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
      <View className={indicatorBoxStyle}>
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