import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface ComboBoxProps {
  label: string;
  data: { name: string; abbreviation: string }[]; 
  onChange: (event: React.SyntheticEvent, newValue: { name: string; abbreviation: string } | null) => void; 
}

export const ComboBox: React.FC<ComboBoxProps> = ({ data, label, onChange }: ComboBoxProps) => {
  return (
    <Autocomplete
      disablePortal
      options={data}
      getOptionLabel={(option) => option.name} 
      sx={{ width: 267, marginTop: 1.5 }}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}


