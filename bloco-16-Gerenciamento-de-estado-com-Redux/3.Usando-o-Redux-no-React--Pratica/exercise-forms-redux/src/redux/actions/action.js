export const SUBMIT_PERSONAL_INFOS = 'personalInfos/submitInfos';

export const SUBMIT_PROFESSIONAL_INFOS = 'professionalInfos/submitInfos';

export const submittedPersonalInfos = (infos) => ({
  type: 'personalInfos/submitInfos',
  payload: infos,
});

export const submittedProfessionalInfos = (infos) => ({
  type: 'professionalInfos/submitInfos',
  payload: infos,
});
