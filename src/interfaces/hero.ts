import type { Advantage } from "./advantage"

export type IdType = "public" | "secret" | "none"

export interface Hero {
    // Main Data
    hero: string,
    player: string,
    identity: string,
    idtype: IdType,
    pl: number,
    xp: number,
    hp: number,

    // Abilities
    // > Strength
    str: number, // score
    rstr: number, // rank
    dstr: boolean, // disable
    // > Stamina
    sta: number, // score
    rsta: number, // Rank 
    dsta: boolean, // Disable
    // > Agility
    agi: number, // score
    ragi: number, // Rank 
    dagi: boolean, // Disable
    // > Dexterity
    dex: number, // dex Stat
    rdex: number, // Rank 
    ddex: boolean, // Disable 
    // > Fighting
    fgt: number, // Fighting Stat
    rfgt: number, // Rank
    dfgt: boolean // Disable
    // > Intellect
    int: number, // Int Stat
    rint: number, // Rank
    dint: boolean, // Disable
    // > Awerness
    awe: number, // awe Stat
    rawe: number, // Rank
    dawe: boolean, // Disable
    // > Precense 
    pre: number, // pre Stat
    rpre: number, // Rank
    dpre: boolean, // disable

    // Defenses 
    // > Dodge 
    dod: number // stat
    rdod: number // rank 

    // > Parry 
    par: number // stat
    rpar: number // rank
    
    // > Toughness 
    tou: number // stat

    // > Fort Defense 
    fod: number // stat
    rfod: number // rank
    
    // > will Defense 
    wid: number // stat
    rwid: number // rank
    
    advantages: Advantage[]
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
    dstr:false,
    sta:0,
    rsta:0,
    dsta:false,
    agi:0,
    ragi:0,
    dagi:false,
    dex:0,
    rdex:0,
    ddex:false,
    fgt:0,
    rfgt:0,
    dfgt:false,
    int:0,
    rint:0,
    dint:false,
    awe:0,
    rawe:0,
    dawe:false,
    pre:0,
    rpre:0,
    dpre:false,
    dod:0,
    rdod:0,
    par:0,
    rpar:0,
    tou:0,
    fod:0,
    rfod:0,
    wid:0,
    rwid:0,
    
    advantages:[]
}