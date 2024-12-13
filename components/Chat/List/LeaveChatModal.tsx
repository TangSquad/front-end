import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { leaveMoim } from 'api/moim/moim-join';
import { leaveDiving } from 'api/diving/diving-join';
import Modal from 'react-native-modal';
import { tokens } from 'constants/';

interface LeaveChatModalProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  type: 'MOIM' | 'DIVING';
  gatheringId: number;
}

export default function LeaveChatModal({ visible, setVisible, type, gatheringId }: LeaveChatModalProps) {
  const handleSuccess = () => {
    const message = type === 'MOIM' ? '모임 탈퇴가 완료되었습니다.' : '다이빙 탈퇴가 완료되었습니다.';
    Alert.alert(message);
    setVisible(false);
  };

  const handleError = () => {
    const message = type === 'MOIM' ? '모임 탈퇴에 실패했습니다.' : '다이빙 탈퇴에 실패했습니다.';
    Alert.alert(message);
  };

  const moimMutation = useMutation({
    mutationFn: leaveMoim,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const divingMutation = useMutation({
    mutationFn: leaveDiving,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const handleLeave = () => {
    try {
      if (type === 'DIVING') divingMutation.mutate(gatheringId);
      else moimMutation.mutate(gatheringId);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      } else {
        Alert.alert('An unknown error occurred');
      }
    }
  };

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={() => setVisible(false)}
      onBackButtonPress={() => setVisible(false)}
      className='flex items-center'
    >
      <View className='flex items-center w-[300] bg-white p-24 rounded-10'>
        <Text className={`${tokens.bd_20} color-yellow-600 mt-4 mb-8`}>탈퇴하시겠습니까?</Text>
        <Text className={`${tokens.md_14} color-gray-800 my-16`}>
          모임을 탈퇴하시면 채팅 목록 및 대화 내용이 삭제 되고 복구 할 수 없어요.
          모임에서 탈퇴 하시겠어요?
        </Text>
        <View className='flex-row justify-between gap-x-12 mt-12'>
          <TouchableOpacity onPress={() => setVisible(false)} className='flex-1 py-12 bg-gray-200 rounded-10'>
            <Text className={`${tokens.bd_14} text-center color-gray-800`}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLeave}
            className='flex-1 py-12 bg-primary rounded-10'
          >
            <Text className={`${tokens.bd_14} color-white text-center`}>나가기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}