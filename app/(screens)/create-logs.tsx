import { KeyboardAvoidingView, ScrollView, SafeAreaView, View, Alert, Text } from 'react-native';
import { useState, useContext, ReactNode } from 'react';
import { router, useGlobalSearchParams } from 'expo-router';
import { LogsProvider } from 'contexts/LogsContext';
import { LogbookContext } from 'contexts/LogbookContext';
import { LogsContext } from 'contexts/LogsContext';
import { useMutation } from '@tanstack/react-query';
import { createLogbook } from 'api/logbook/logbook';
import { createLog } from 'api/logbook/log';
import { translateUrl } from 'api/upload/image';
import showToast from 'utils/toast';
import RequiredSection from 'components/Logbook/Create/RequiredSection';
import LogStepIndicator from 'components/Logbook/Create/LogStepIndicator';
import SetepIndicatorText from 'components/Logbook/StepIndicatorText';
import DivingThemeSection from 'components/Logbook/DivingThemeSection';
import WeatherSection from 'components/Logbook/Create/WeatherSection';
import EtcSection from 'components/Logbook/Create/EtcSection';
import EnvironmentSection from 'components/Logbook/Create/EnvironmentSection';
import MainButton from 'components/common/MainButton';

const CreateLogsContents = ({ children } : { children: ReactNode }) => {
  const { logbook, setLogbook } = useContext(LogbookContext);
  const { logs } = useContext(LogsContext);

  const mutationLogbook = useMutation({
    mutationFn: createLogbook,
    onSuccess: async (logbook) => {
      try {
        await Promise.all(
          logs.map((log) =>
            mutationLog.mutateAsync({ ...log, logbookId: logbook.id }),
          ),
        );
        showToast('success', '로그북 작성이 완료되었습니다.');
        router.replace('/logbook');
      } catch {
        Alert.alert('로그 작성 중 오류가 발생했습니다.');
      }
    },
    onError: (error) => {
      Alert.alert('로그북 작성에 실패했습니다.', error.message);
    },
  });

  const mutationLog = useMutation({
    mutationFn: createLog,
  });

  const mutationImage = useMutation({
    mutationFn: translateUrl,
    onSuccess: (response) => {
      return response.data.url;
    },
  });

  const handlePress = async () => {
    if (logbook.title === '') {
      Alert.alert('제목을 입력해주세요.');
      return;
    } else if (logs[0].location === '') {
      Alert.alert('다이빙 지역을 입력해주세요.');
      return;
    } else if (logs[0].diveTime === '') {
      Alert.alert('잠수시간을 입력해주세요.');
      return;
    }

    try {
      const urls = await Promise.all(
        logbook.imageUrls.map((url) => mutationImage.mutateAsync(url).then((response) => response.data.url)),
      );
  
      const updatedLogbook = { ...logbook, imageUrls: urls };
  
      setLogbook(updatedLogbook);

      mutationLogbook.mutate(updatedLogbook);
    } catch {
      Alert.alert('이미지 처리 중 오류가 발생했습니다.');
    }
  };

  return(
    <>
      {children}
      <View className='mt-32 mb-50'>
        <MainButton title='작성 완료' handlePress={handlePress} />
      </View>
    </>
  );
};

export default function CreateLogs() {
  const { count } = useGlobalSearchParams();
  const [currentStep, setCurrentStep] = useState(0);

  return(
    <SafeAreaView className='h-full bg-white'>
      <KeyboardAvoidingView>
        <ScrollView className='p-24'>
          <LogsProvider count={Number(count)}>
            <CreateLogsContents>
              <LogStepIndicator maxStep={Number(count)} currentStep={currentStep} setCurrentStep={setCurrentStep} />
              <SetepIndicatorText step={currentStep} />
              <RequiredSection currentStep={currentStep} />
              <DivingThemeSection currentStep={currentStep} />
              <WeatherSection currentStep={currentStep} />
              <EtcSection currentStep={currentStep} />
              <EnvironmentSection currentStep={currentStep} />
            </CreateLogsContents>
          </LogsProvider>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}