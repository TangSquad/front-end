export const baseUrl = 'http://13.125.41.75:8080';

export const ENDPOINTS = {
  AUTH: {
    EMAIL_LOGIN: `${baseUrl}/auth/login`,
    SEND_VERIFICATION_CODE: `${baseUrl}/auth/verification/phone/send`,
    VERIFY_PHONE_NUMBER: `${baseUrl}/auth/verification/phone/verify`,
  },
};

const api = {
  ENDPOINTS,
};

export default api;