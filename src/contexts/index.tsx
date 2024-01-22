import React, { createContext, useContext, useState } from "react";
import { type SelectedRange } from "../types";

const SeletedRangeContext = createContext<{
  selectedRange: SelectedRange;
  setSelectedRange: React.Dispatch<React.SetStateAction<SelectedRange>>;
}>({
  selectedRange: { weekdays: [""], weekends: [""] },
  setSelectedRange: () => {},
});

export const useSelectedRangeContext = () => useContext(SeletedRangeContext)

// const selectedRangeState = {selectedRange: { weekdays: [""], weekends: [""] } , setSelectedRange: () => {}}
export default function index({children}:{children: React.ReactNode}) {
  const [selectedRange, setSelectedRange] = useState<SelectedRange>({
    weekdays: [],
    weekends: [],
  });
  return (
    <SeletedRangeContext.Provider value={{selectedRange, setSelectedRange}}>
      {children}
    </SeletedRangeContext.Provider>
  );
}
