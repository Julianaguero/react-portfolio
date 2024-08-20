import { useContext } from "react";
import { ActiveSectionContext } from "../context/ActiveSectionContextProvider";

//Custom hook to handle null issue : activeSection could be null
export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
  
  
    if (context === null) {
      throw new Error(
        "useActiveSectionContext must be used within an ActiveSectionContextProvider"
      );
    }
  
    return context;
  }