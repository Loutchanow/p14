import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface LabelProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

export const BasicTextFields: React.FC<LabelProps> = ({label, onChange}: LabelProps) => {
  
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { mt: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} variant="outlined" onBlur={(e: React.FocusEvent<HTMLInputElement>) => onChange(e)} />

    </Box>
  );
}
