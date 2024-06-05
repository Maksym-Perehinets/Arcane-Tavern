type Dictionary = { [key: string]: string };

type Dictionaries = {
  [key: string]: Dictionary;
};


const dictionaries: Dictionaries = {
  casters: await import('./components/dictionaries/Caster').then((module) => module.casters),
  actions: await import('./components/dictionaries/Action').then((module) => module.actions),
  schools: await import('./components/dictionaries/School').then((module) => module.schools),
  damageTypes: await import('./components/dictionaries/DamageType').then((module) => module.damageTypes),
  ranges: await import('./components/dictionaries/Range').then((module) => module.ranges),
  durations: await import('./components/dictionaries/Duration').then((module) => module.durations),
};

export { dictionaries };
