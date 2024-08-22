
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface OutlinedButtonsProps {
    text: string;
  }
  

export const OutlinedButtons: React.FC<OutlinedButtonsProps> = ({text}: OutlinedButtonsProps) =>{
  return (
    <Stack direction="row" spacing={2} marginTop={1}>
      <Button variant="outlined">{text}</Button>
  
    </Stack>
  );
}
