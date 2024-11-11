const baseUrl = 'https://api.tangsquad.com';
const getBaseUrl = () => { return baseUrl; };

const ENDPOINTS = {
  AUTH: {
    EMAIL_LOGIN: '/auth/login',
    KAKAO_LOGIN: '/auth/login/kakao',
    SEND_VERIFICATION_CODE: '/auth/verification/phone/send',
    VERIFY_PHONE_NUMBER: '/auth/verification/phone/verify',
    PHONE_DUPLICATION_CHECK: '/auth/check/phone',
    EMAIL_DUPLICATION_CHECK: '/auth/check/email',
    NICKNAME_DUPLICATION_CHECK: '/auth/check/nickname',
    SIGNUP: '/auth/register',
    ADDITIONAL: '/auth/additional',
  },
  CERTIFICATE: {
    ORGANIZATION: '/certificate/public/organization',
    LEVEL: '/certificate/public/{organizationId}/level',
  },
  USER: {
    PROFILE: '/user/profile',
    INTRODUCTION: '/user/introduction',
    EQUIPMENT: '/user/equipment',
  },
};

const api = {
  ENDPOINTS,
};

export { getBaseUrl };
export default api;