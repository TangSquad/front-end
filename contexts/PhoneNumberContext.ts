import { createContext } from 'react';

const defaultValue = {
  phoneNumber: '',
  code: '',
  isCodeSent: false,
  setIsCodeSent: (isCodeSent: boolean) => {},
  isVerified: false,
  setIsVerified: (isVerified: boolean) => {},
};

export const PhoneNumberContext = createContext(defaultValue);