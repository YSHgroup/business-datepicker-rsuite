
type DateRange = [Date, Date]

interface RangeType<T = DateRange> {
  label: React.ReactNode;
  value: T | ((value?: T) => T);
  closeOverlay?: boolean;
  placement?: 'bottom' | 'left';
}

interface SelectedRange {
    weekdays: string[]
    weekends: string[]
}

export { type DateRange, type RangeType, type SelectedRange}