
const inputTypes = {
  email: {
    title: '이메일',
    placeholder: '이메일을 입력해주세요',
    invalid: '유효한 이메일을 입력해주세요',
  },
  password: {
    title: '비밀번호',
    placeholder: '비밀번호를 입력해주세요',
    invalid: '비밀번호는 8자 이상이어야 합니다',
  },
  phone: {
    title: '전화번호',
    placeholder: '전화번호를 입력해주세요',
    invalid: '유효한 전화번호를 입력해주세요',
  },
  name: {
    title: '이름',
    placeholder: '이름을 입력해주세요',
    invalid: '이름은 두 글자 이상이어야 합니다',
  },
  nickname: {
    title: '닉네임',
    placeholder: '닉네임을 입력해주세요',
    invalid: '닉네임은 두 글자 이상이어야 합니다',
  },
  passwordConfirm: {
    placeholder: '비밀번호를 다시 입력해주세요',
    invalid: '비밀번호가 일치하지 않습니다',
  },
  verificationCode: {
    placeholder: '인증번호를 입력해주세요',
    invalid: '인증번호는 6자리여야 합니다',
  },
};

export default inputTypes;