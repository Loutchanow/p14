
import DataTable from '../utils/DataTable';

interface DataProps {
  data: Array<any>;
}


const columns = [
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'birth',
    headerName: 'Date Of Birth',
    width: 160,
  },  
  {
    field: 'startDate',
    headerName: 'Start Date',
  },
  {
    field: 'department',
    headerName: 'Department',
    width: 160,
  },
  { 
    field: 'street',
    headerName: 'Street',
    width: 160,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 160,
  },
  {
    field: 'state',
    headerName: 'State',
    width: 160,
  },
  {
    field: 'zipCode',
    headerName: 'Zid Code',
    type: 'number',
    width: 100,
  },
];



interface DataProps {
  data: Array<{ [key: string]: any }>;
}

export const Data: React.FC<DataProps> = ({ data }: DataProps) => {
  const getIdAndFilter = (data: Array<{ [key: string]: any }>) => {
    return data
      .filter((item) => {
        return Object.values(item).every(value => value !== null && value !== undefined);
      })
      .map((item, index) => ({
        ...item,  
        id: index 
      }));
  };

  const dataWithId = getIdAndFilter(data);
  
  console.log(dataWithId); 

  return (
    <DataTable 
      columns={columns} 
      rows={dataWithId} 
    />
  );
};
