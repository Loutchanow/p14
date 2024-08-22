import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface ComboBoxProps {
  label: string;
  data: { name: string; abbreviation: string }[]; 
}

export const ComboBox: React.FC<ComboBoxProps> = ({ data, label }: ComboBoxProps) => {
  return (
    <Autocomplete
      disablePortal
      options={data}
      getOptionLabel={(option) => option.name} 
      sx={{ width: 267, marginTop: 1 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}


