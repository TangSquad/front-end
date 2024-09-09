const baseUrl = 'http://13.125.41.75:8080';
const getBaseUrl = () => { return baseUrl; };

const ENDPOINTS = {
  AUTH: {
    EMAIL_LOGIN: '/auth/login',
    SEND_VERIFICATION_CODE: '/auth/verification/phone/send',
    VERIFY_PHONE_NUMBER: '/auth/verification/phone/verify',
    PHONE_DUPLICATION_CHECK: '/auth/check/phone',
    EMAIL_DUPLICATION_CHECK: '/auth/check/email',
    NICKNAME_DUPLICATION_CHECK: '/auth/check/nickname',
    SIGNUP: '/auth/register',
  },
  CERTIFICATE: {
    ORGANIZATION: '/certificate/public/organization',
    LEVEL: '/certificate/public/{organizationId}/level',
  },
};

const api = {
  ENDPOINTS,
};

export { getBaseUrl };
export default api;