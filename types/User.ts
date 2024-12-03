type Profile = {
  userId: number;
  profileImageUrl: string;
  name: string;
  nickname: string;
  clubCount: number;
  divingCount: number;
  logBookCount: number;
  certificationName: string;
  certificationImageUrl: string;
  isLogbookOpen: boolean;
  isEquipmentOpen: boolean;
}

type EditProfile = Partial<
  Omit<Profile, 'userId' | 'clubCount' | 'divingCount' | 'logBookCount' | 'certificationName' | 'certificationImageUrl'>>
  & Partial<Introduction>
  & Partial<Equipment>;

type Equipment = {
  height: string;
  weight: string;
  suit: string;
  weightBelt: string;
  bc: string;
  shoes: string;
  mask: string;
}

type Introduction = {
  introduction: string;
  link: string;
  affiliation: string;
  prevDiving: string;
}

export {
  Profile,
  EditProfile,
  Equipment,
  Introduction,
};