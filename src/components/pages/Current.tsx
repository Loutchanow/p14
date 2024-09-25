import { useSelector } from "react-redux";
import { RootState } from '../../store';
import { Data } from "../métiers/Data";





const Current = () => {
  const users = useSelector((state: RootState) => state.users.users);
  console.log(users);
  
  return (
    <div>
      <Data data={users} />
    </div>
  );
};

export default Current;