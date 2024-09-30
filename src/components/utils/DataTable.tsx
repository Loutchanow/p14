import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface DataTableProps {
  columns: GridColDef[];  
  rows: GridRowsProp;     
}

export default function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
