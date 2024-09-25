import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import  { Dayjs } from 'dayjs'; 

interface LabelProps {
  label: string;
  onChange: (date: Dayjs | null) => void;  
}

export const BasicDatePicker: React.FC<LabelProps> = ({ label, onChange }: LabelProps) => {
  const handleDateChange = (date: Dayjs | null) => {
    onChange(date); 
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker 
          label={label} 
          onChange={handleDateChange}  
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
