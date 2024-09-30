import styled from 'styled-components';
import { BasicTextFields } from '../utils/BasicTextFields';
import { BasicDatePicker } from '../utils/BasicDatePicker';
import { ComboBox } from '../utils/ComboBox';
import { useDispatch } from 'react-redux';
import { editUser } from '../../slices/userSlice';
import NumberInputIntroduction from '../utils/NumberInputIntroduction';
import UnstyledButtonsSimple from '../utils/UnstyledButtonsSimple';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
`;
const Form = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;
const BoxForm = styled.div`
  border: 1px solid white;
  padding: 2rem;
  margin-top: 1rem;
  border-radius: 4px;
`;

const states = [
  {
      "name": "Alabama",
      "abbreviation": "AL"
  },
  {
      "name": "Alaska",
      "abbreviation": "AK"
  },
  {
      "name": "American Samoa",
      "abbreviation": "AS"
  },
  {
      "name": "Arizona",
      "abbreviation": "AZ"
  },
  {
      "name": "Wyoming",
      "abbreviation": "WY"
  }
];

const department = [
  {
      "name": "Sales",
      "abbreviation": "AS"

  },
  {
      "name": "Marketing",
      "abbreviation": "AS"

  },
  {
      "name": "Engineering",
      "abbreviation": "AS"

  },
  {
      "name": "Human Ressources",
      "abbreviation": "AS"

  },
  {
      "name": "Legal",
      "abbreviation": "AS"

  }
];



const Home = () => {
  const dispatch = useDispatch();

  const handleInputChange = (field: keyof User, value: string | number | null) => {
    dispatch(editUser({ field, value }));
  };


return (
  <PageContainer>
    <h1>Create Employee</h1>
    <Form>
      <BasicTextFields label={"First Name"} onChange={(e) => handleInputChange('firstName', e.target.value)} />
      <BasicTextFields label={"Last Name"} onChange={(e) => handleInputChange('lastName', e.target.value)} />
      <BasicDatePicker label="Date of Birth" onChange={(date) => handleInputChange('birth', date ? date.format('YYYY-MM-DD') : null)} />
      <BasicDatePicker label="Start Date" onChange={(date) => handleInputChange('startDate', date ? date.format('YYYY-MM-DD') : null)} />
      <BoxForm>
        <h2>Address</h2>
        <BasicTextFields label={"Street"} onChange={(e) => handleInputChange('street', e.target.value)} />
        <BasicTextFields label={"City"} onChange={(e) => handleInputChange('city', e.target.value)} />
        <ComboBox data={states} label={"State"} onChange={(event, newValue) => handleInputChange('state', newValue ? newValue.name : null)} />
        <NumberInputIntroduction label="Zip Code" onChange={(e) => handleInputChange('zipCode', parseInt(e.target.value))} />
      </BoxForm>
      <ComboBox data={department} label={"Department"} onChange={(event, newValue) => handleInputChange('department', newValue ? newValue.name : null)} />
        <UnstyledButtonsSimple />
    </Form>
  </PageContainer>
);
}
export default Home;