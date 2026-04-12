import { useContext } from "react";
import { ActiveHeroContext } from "../context/ActiveHeroContext";
import type { ActiveHeroContextValue } from "../interfaces/activeHeroContextValue";

export default function useActiveHero(): ActiveHeroContextValue {
    const context = useContext(ActiveHeroContext)
    return context as ActiveHeroContextValue;
}
