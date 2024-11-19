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
    DELETE_ACCOUNT: '/auth/withdraw',
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
  PASSWORD: {
    SEND_CODE: '/password/sendCode',
    VERIFY_CODE: '/password/verifyCode',
    RESET: '/password/reset', 
  },
  LOGBOOK: {
    MY_LOGBOOK: '/logbook',
  },
  MOIM: {
    MOIM: '/moim',
    MOIM_BY_ID: '/moim/{moimId}',
    MOIM_ALL: '/moim/all',
    MOIM_LIKED: '/moim/like',
    MOIM_LIKE: '/moim/like/{moimId}',
    MOIM_UNLIKE: '/moim/unlike/{moimId}',
    MOIM_JOIN: '/moim/join/{moimId}',
  },
  DIVING: {
    DIVING: '/diving',
    DIVING_BY_ID: '/diving/{divingId}',
    DIVING_ALL: '/diving/all',
    DIVING_LIKED: '/diving/like',
    DIVING_LIKE: '/diving/like/{divingId}',
    DIVING_UNLIKE: '/diving/unlike/{divingId}',
    DIVING_JOIN: '/diving/join/{divingId}',
  },
  UPLOAD: '/upload',
};

const api = {
  ENDPOINTS,
};

export { getBaseUrl };
export default api;