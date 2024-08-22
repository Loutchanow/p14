import styled from 'styled-components';
import { BasicTextFields } from '../utils/BasicTextFields';
import { BasicDatePicker } from '../utils/BasicDatePicker';
import { ComboBox } from '../utils/ComboBox';
import UseNumberInput from '../utils/UseNumberInput';
import OutlinedButtons from '../utils/OutlinedButtons';

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
  },
  {
      "name": "Marketing",
  },
  {
      "name": "Engineering",
  },
  {
      "name": "Human Ressources",
  },
  {
      "name": "Legal",
  }
];



const Home = () => {
  return (
    <PageContainer>

      <h1>Create Employee</h1>
      <Form>
        <BasicTextFields label={"First Name"}/>
        <BasicTextFields label={"Last Name"}/>
        <BasicDatePicker label={"Date of Birth"} />
        <BasicDatePicker label={"Start date"} />
        <BoxForm>
          <h2>Adress</h2>
          <BasicTextFields label={"Street"}/>
          <BasicTextFields label={"City"}/>
          <ComboBox data={states} label={"State"}/>
          <UseNumberInput />
        </BoxForm>
        <ComboBox data={department} label={"Department"}/>
        <OutlinedButtons text={"Save"} />
      </Form>
    </PageContainer>
  );
};

export default Home;