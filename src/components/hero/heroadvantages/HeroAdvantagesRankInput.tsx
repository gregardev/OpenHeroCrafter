import { memo, useCallback, useMemo } from "react";
import type { Advantage } from "../../../interfaces/advantage";
import type { Hero } from "../../../interfaces/hero";
import { Input } from "@mui/joy";

interface HeroAdvantagesRankInputInterface {
  advID: string;
  activeHero: Hero;
  handleAdvantageRankChange: (id: string, rank: number) => void;
}


const HeroAdvantagesRankInput = memo(function ({ advID, activeHero, handleAdvantageRankChange }: HeroAdvantagesRankInputInterface) {

    const value = useMemo(() => {
        const foundadv = activeHero.advantages.find(heroadv => heroadv.id === advID) as Advantage;
        return foundadv ? foundadv.rank : 0;
    }, [activeHero.advantages, advID]);

    const isDisabled = useMemo(() => {
        return !activeHero.advantages.some(heroadv => heroadv.id === advID)
    }, [activeHero.advantages, advID]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newRank = Number(e.target.value);
        handleAdvantageRankChange(advID, newRank);
    }, [advID, handleAdvantageRankChange]);

    return (
        <Input
            type="number"
            disabled={isDisabled}
            value={value}
            onChange={handleChange}
        />
    );
});

export default HeroAdvantagesRankInput;