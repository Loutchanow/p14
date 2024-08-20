import styled from 'styled-components';
import { BasicTextFields } from '../utils/BasicTextFields';
import { BasicDatePicker } from '../utils/BasicDatePicker';

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
        </BoxForm>
      </Form>
    </PageContainer>
  );
};

export default Home;