import { KeyboardAvoidingView, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { useGlobalSearchParams } from 'expo-router';
import RequiredSection from 'components/Logbook/Create/RequiredSection';
import LogStepIndicator from 'components/Logbook/Create/LogStepIndicator';
import DivingThemeSection from 'components/Logbook/Create/DivingThemeSection';
import WeatherSection from 'components/Logbook/Create/WeatherSection';
import EtcSection from 'components/Logbook/Create/EtcSection';
import EnvironmentSection from 'components/Logbook/Create/EnvironmentSection';

export default function CreateLogs() {
  const { count } = useGlobalSearchParams();
  const [currentStep, setCurrentStep] = useState(0);

  return(
    <SafeAreaView className='h-full bg-white'>
      <KeyboardAvoidingView>
        <ScrollView className='p-24'>
          <LogStepIndicator maxStep={Number(count)} currentStep={currentStep} setCurrentStep={setCurrentStep} />
          <RequiredSection />
          <DivingThemeSection />
          <WeatherSection />
          <EtcSection />
          <EnvironmentSection />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}