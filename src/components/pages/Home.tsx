import styled from 'styled-components';
import { BasicTextFields } from '../utils/BasicTextFields';
import { BasicDatePicker } from '../utils/BasicDatePicker';
import { ComboBox } from '../utils/ComboBox';
import { NumberInputBasic } from '../utils/NumberInputBasic';
import { ModalUnstyled } from '../utils/ModalUnstyled';

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
          <NumberInputBasic label='Zip Code' />
        </BoxForm>
        <ComboBox data={department} label={"Department"}/>
        <ModalUnstyled text={"Employee created !"} label='Save'/>
      </Form>
    </PageContainer>
  );
};

export default Home;