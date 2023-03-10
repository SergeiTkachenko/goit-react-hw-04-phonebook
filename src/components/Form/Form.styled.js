import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  text-align: center;

  justify-content: center;
  display: flex;
  width: 400px;
  gap: 10px;
  flex-direction: column;
  padding: 10px;
  margin: 10px auto;

  border: 1px solid black;
  border-radius: 10px;
  background-color: teal;
`;

export const FormField = styled.label`
  display: flex;
  gap: 4px;
  flex-direction: column;
  text-align: center;

  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 10px;
  background-color: gray;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;
