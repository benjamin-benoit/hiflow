import * as Yup from 'yup';

export const InformationsSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Le prénom est trop court.')
    .max(50, 'Le prénom est trop long.')
    .required('Le prénom est obligatoire'),
  familyName: Yup.string()
    .min(1, 'Le nom est trop court.')
    .max(50, 'Le nom est trop long.')
    .required('Le nom est obligatoire'),
  email: Yup.string().email('L\'email est invalide').required('L\'email est obligatoire'),
});