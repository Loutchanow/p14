
import DataTable from '../utils/DataTable';

interface DataProps {
  data: object;
}

const columns = [
  { field: 'name', headerName: 'Name', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'startDate',
    headerName: 'Start Date',
  },
  {
    field: 'departement',
    headerName: 'Department',
    width: 160,
  },
  {
    field: 'dateOfBirth',
    headerName: 'Date Of Birth',
    width: 160,
  },  {
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

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


export const Data: React.FC<DataProps> = ({data} : DataProps) => {

  console.log(data);
  
  return (
  <DataTable data={data} columns={columns} rows={rows}/>
  );
};
