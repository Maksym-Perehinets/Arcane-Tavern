import { useState, useEffect } from 'react';
import { Spell } from '../../interfaces/spell2';

const useSpell = (initialSpellId: number) => {
  const [spell, setSpell] = useState<Spell | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   fetchSpell(initialSpellId);
  // }, [initialSpellId]);

  // const fetchSpell = async (spellId: number) => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`http://localhost:8080/get-spell/${spellId}`);
  //     const data = await response.json();
  //     setSpell(data.data[0]);
  //   } catch (err) {
  //     setError('Failed to fetch spell data');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return { spell, error, loading };
};

export default useSpell;