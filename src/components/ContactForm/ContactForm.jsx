import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';


import {
  BtnAdd,
  ErrorMess,
  FormStyle,
  Input,
  Label,
} from './ContactForm.styled';
import { selectContact } from 'store/selectors';
import { addContact } from 'store/operations';



const SingupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string()
  .matches(
    /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g
  )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact)
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SingupSchema}
      onSubmit={(values, actions) => {
       const isContacts = contacts.some(contact=>contact.name.toLowerCase().includes(values.name.toLowerCase()));  if (isContacts) {
        alert(`${values.name} alredy in contacts`);
        actions.resetForm();
        return;
      }
      const contact = {
        name: values.name,
        number: values.number,
      }
      dispatch(addContact(contact));

        actions.resetForm();
      }}
    >
      <FormStyle>
        <Label>
          Name
          <Input type="text" name="name" />
          <ErrorMess name="name" component="div" />
        </Label>

        <Label>
          Number
          <Input type="tel" name="number" />
          <ErrorMess name="number" component="div" />
        </Label>

        <BtnAdd type="submit">Add contact</BtnAdd>
      </FormStyle>
    </Formik>
  );
};