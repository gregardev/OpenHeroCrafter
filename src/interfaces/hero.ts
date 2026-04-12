export type IdType = "public" | "secret" | "none"

export interface Hero {
    hero: string,
    player: string,
    identity: string,
    idtype: IdType,
    pl: number,
    xp: number,
    hp: number,
    // Abilities
    str: number, // Strength Stat
    rstr: number, // Rank of Strength
    sta: number, // Stamina Stat
    rsta: number, // Rank of Stamina
    agi: number, // Agility Stat
    ragi: number, // Rank of Agility
    dex: number, // dex Stat
    rdex: number, // Rank of dex
    fgt: number, // Fighting Stat
    rfgt: number, // Rank of Fighting
    int: number, // Int Stat
    rint: number, // Rank of Int
    awe: number, // awe Stat
    rawe: number, // Rank of awe
    pre: number, // pre Stat
    rpre: number, // Rank of pre
}

export const defaultHero: Hero = {
    hero: '',
    player:'',
    identity:'',
    idtype:'none',
    pl:10,
    xp:0,
    hp:1,
    str:0,
    rstr:0,
    sta:0,
    rsta:0,
    agi:0,
    ragi:0,
    dex:0,
    rdex:0,
    fgt:0,
    rfgt:0,
    int:0,
    rint:0,
    awe:0,
    rawe:0,
    pre:0,
    rpre:0,
    
}