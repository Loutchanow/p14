import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
interface LabelProps {
  label: string;
}
export const BasicDatePicker: React.FC<LabelProps> = ({label}: LabelProps)=>{
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label={label}/>
      </DemoContainer>
    </LocalizationProvider>
  );
}
