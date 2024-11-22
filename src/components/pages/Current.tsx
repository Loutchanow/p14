import { useSelector } from "react-redux";
import { RootState } from '../../store';
import { Data } from "../métiers/Data";
// import testData from "../../../public/data";
const Current = () => {

  const users = useSelector((state: RootState) => state.users.users);
  


  return (
    <div>
      <Data data={users} />
      //for testing with mocked users
      {/* <Data data={testData} /> */}
    </div>
  );
};

export default Current; 