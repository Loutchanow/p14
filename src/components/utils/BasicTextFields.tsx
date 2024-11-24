import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface BasicTextFieldsProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

export const BasicTextFields: React.FC<BasicTextFieldsProps> = ({label, onChange}: BasicTextFieldsProps) => {
  
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { mt: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} variant="outlined"  onBlur={(e: React.FocusEvent<HTMLInputElement>) => onChange(e)} />

    </Box>
  );
}
