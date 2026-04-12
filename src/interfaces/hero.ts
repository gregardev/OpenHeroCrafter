export type IdType = "public" | "secret" | "none"

export interface Hero {
    hero: string,
    player: string,
    identity: string,
    idtype: IdType,
    pl: number,
    xp: number,
    hp: number,
}

export const defaultHero: Hero = {
    hero: '',
    player:'',
    identity:'',
    idtype:'none',
    pl:10,
    xp:0,
    hp:1
}