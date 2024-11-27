import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { useState } from 'react';
import { useGlobalSearchParams } from 'expo-router';
import LogStepIndicator from 'components/Logbook/Create/LogStepIndicator';
import DivingThemeSection from 'components/Logbook/Create/DivingThemeSection';

export default function CreateLogs() {
  const { count } = useGlobalSearchParams();
  const [currentStep, setCurrentStep] = useState(0);

  return(
    <KeyboardAvoidingView className='h-full bg-white'>
      <ScrollView className='p-24'>
        <LogStepIndicator maxStep={Number(count)} currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <DivingThemeSection />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}