import { useSelector } from "react-redux";
import DataTable from "../utils/DataTable";
import { RootState } from '../../store';


const Current = () => {
  const user = useSelector((state: RootState) => state.users.users);
  console.log(user);
  
  return (
    <div>
      current
      <DataTable />
    </div>
  );
};

export default Current;