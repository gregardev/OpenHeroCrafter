export type IdType = "public" | "secret" | "none"

export interface Hero {
    hero: string,
    player: string,
    identity: string,
    idtype: IdType
}

export const defaultHero: Hero = {
    hero: '',
    player:'',
    identity:'',
    idtype:'none'
}