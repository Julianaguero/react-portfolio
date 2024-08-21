import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../hooks/useActiveSectionContext";
import { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { ref, inView, entry } = useInView({
        threshold: threshold,
    });
    const { setActiveSection } = useActiveSectionContext();

    useEffect(() => {
        if (inView) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, sectionName]);

    return {
        ref, inView, entry
    }
}