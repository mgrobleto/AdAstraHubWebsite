import React from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Box from '@mui/material/Box';
import { DatePickerToolbar } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const MyDatePicker = ({defaultValue, value, onAccept}) => {

    const minDate = dayjs("1995-06-16");

    const CustomToolbar = (props) => {
        return (
          <Box
            // Pass the className to the root element to get correct layout
            className={props.className}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <DatePickerToolbar {...props} />
            <RocketLaunchIcon fontSize="large" sx={{ m: 5 }} />
          </Box>
        );
    }

  return (
    <MobileDatePicker 
        maxDate={defaultValue}
        minDate={minDate}
        formatDensity="spacious"
        format='YYYY/MM/DD'
        defaultValue={dayjs()}
        value={value}
        onAccept={onAccept}
        slotProps={{ textField: { helperText: "Select a date :)" } }}
        slots={{
            toolbar: CustomToolbar,
        }}
        sx={{ color: '#fff', p: 2, fontSize: 14, borderRadius: 8, margin: 5}}
    />
  )
}

export default MyDatePicker
