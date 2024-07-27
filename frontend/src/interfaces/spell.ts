export interface SpellMainStats {
    spell_url: string;
    level: string;
    name: string;
    concentration: boolean;
    duration: string;
    time: string;
    ranges: string;
}


export interface SpellDescription extends SpellMainStats {

}