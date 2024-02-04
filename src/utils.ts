import {casters} from  './_root/pages/Home/dictionaries/Caster';
import {actions} from "./_root/pages/Home/dictionaries/Action";
import {schools} from "./_root/pages/Home/dictionaries/School";
import {damageTypes} from "./_root/pages/Home/dictionaries/DamageType";
import {ranges} from "./_root/pages/Home/dictionaries/Range";
import {durations} from "./_root/pages/Home/dictionaries/Duration";


type CasterDictionary = { [key: string]: string };
type ActionDictionary = { [key: string]: string };
type SchoolsDictionary = { [key: string]: string };
type damageTypesDictionary = { [key: string]: string };
type rangesDictionary = { [key: string]: string };
type DurationDictionary = { [key: string]: string };

type Dictionaries = {
  casters: CasterDictionary; 
  actions: ActionDictionary; 
  schools : SchoolsDictionary;
  damageTypes : damageTypesDictionary;
  ranges : rangesDictionary;
  durations : DurationDictionary;
};

export const dictionaries: Dictionaries = {
  casters,
  actions, 
  schools,
  damageTypes,
  ranges,
  durations,
};