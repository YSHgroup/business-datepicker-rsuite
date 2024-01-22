import React from 'react'
import { DateRangePicker, Stack, Button } from 'rsuite'

import subDays from 'date-fns/subDays';

const BusinessDatePicker = () => {
  const [selectedRange, setSelectedRange] = React.useState<{ weekdays: string[], weekends: string[] }>()

  
const selecteRange = (value: DateRange | null) => {
  console.log('value: ', value)
  if(value) {
  // const {weekdays, weekends} = 
  separateWeekdaysAndWeekends(value[0], value[1])
  // console.log(weekdays, weekends)
}
}

const isWeekend =(date: Date): boolean=> {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6; // 0 for Sunday, 6 for Saturday

}
const handleSelect = (range: Date) => {
  // When a range is selected, check if either start or end date is a weekend
  if (isWeekend(range)) {
    console.log('Selected range includes weekends!');
    return false
  }
  return true
};
function separateWeekdaysAndWeekends(startISO: Date, endISO: Date) {
  const startDate = new Date(startISO);
  const endDate = new Date(endISO);

  let currentDate = new Date(startDate);
  const weekdays: string[] = [];
  const weekends: string[] = [];

  while (currentDate <= endDate) {
    // getDay() returns 0 for Sunday and 6 for Saturday
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      // It's a weekend
      weekends.push(currentDate.toISOString().split('T')[0]); // Only the date part
    } else {
      // It's a weekday
      weekdays.push(currentDate.toISOString().split('T')[0]); // Only the date part
    }
    
    // Go to next day
    currentDate.setDate(currentDate.getDate() + 1);
  }
  setSelectedRange({ weekdays, weekends })
  // return { weekdays, weekends };
}

  return (
    <Stack direction="column" spacing={8} alignItems="flex-start">
    <DateRangePicker
      placement={'rightStart'}
      // open
      // showOneCalendar
      ranges={predefinedRanges}
      placeholder="Calendar"
      style={{ width: 300 }}
      onChange={selecteRange}
      onShortcutClick={(shortcut, event) => {
        console.log(shortcut);
      }}
      onSelect={handleSelect}
      onClean={()=> setSelectedRange({weekdays: [''], weekends: ['']})}
      // shouldDisableDate={isWeekend}
    />
    <h4>Weekdays: </h4>
      <ul>{selectedRange?.weekdays.map(day => <li key={day}>{day}</li>)}</ul>
      <h4>Weekends: </h4>
      <ul>{selectedRange?.weekends.map(day => <li key={day}>{day}</li>)}</ul>
  </Stack>
  )
}

type DateRange = [Date, Date]
interface RangeType<T = DateRange> {
  label: React.ReactNode;
  value: T | ((value?: T) => T);
  closeOverlay?: boolean;
  placement?: 'bottom' | 'left';
}


const predefinedRanges:RangeType[] = [
  {
      label: 'Last 7 Days',
      value: [
        subDays(new Date(), 6), new Date()
      ]
  },
  {
      label: 'Last 30 Days',
      value: [
        subDays(new Date(), 29), new Date()
      ]
  }
];

export default BusinessDatePicker