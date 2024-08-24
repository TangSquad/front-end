import { useState } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, View, Text } from 'react-native';
import { TitledInput, PasswordInput, PhonenumInput } from '../../components/Auth/SignupInput';
import { tokens } from '../../constants';

function SignUp() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [code, setCode] = useState('');

  const handleSignup = () => {
    // Signup
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} touchSoundDisabled={true}>
      <SafeAreaView className='bg-white'>
        <View className='flex justify-between h-full py-18 px-26'>
          <View>
            <TitledInput
              type='name'
              setInput={setName}
            />
            <PhonenumInput
              type='phone'
              setInput={setPhoneNumber}
              setSecondInput={setCode}
            />
            <TitledInput
              type='email'
              setInput={setEmail}
            />
            <PasswordInput
              type='password'
              setInput={setPassword}
              setSecondInput={setPasswordConfirm}
            />
          </View>
          <TouchableOpacity
            className='bg-primary w-full py-16 flex items-center justify-center rounded-10'
            onPress={handleSignup}
          >
            <Text className={`${tokens.bd_16} color-white`}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default SignUp;