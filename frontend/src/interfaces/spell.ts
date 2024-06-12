export interface SpellMainStats {
    id: number;
    level: string;
    name: string;
    duration: {
      concentration: boolean;
      type: string;
      time: {
        number: number;
        unit: string;
      }[];
    };
    time: {
      number: number;
      unit: string;
    }[];
    ranges: {
      distance: {
        amount: number;
        type: string;
      };
      type: string;
    };
}


export interface SpellDescription extends SpellMainStats {

}