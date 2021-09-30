import useLocalStorage from './useLocalStorage';
import type { ActivityCards } from '../types';

export default function useActivityCard(): {
  activityCards: ActivityCards[];
  addActivityCard: (activityCard: ActivityCards) => void;
} {
  const [activityCards, setActivityCards] = useLocalStorage<ActivityCards[]>(
    'activityCards',
    []
  );

  function addActivityCard(activityCard: ActivityCards) {
    setActivityCards([...activityCards, activityCard]);
  }

  return { activityCards, addActivityCard };
}
