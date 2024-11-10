import { AchievementBehaviour as TAchievementBehaviour } from "../api/achievementBehaviour/AchievementBehaviour";

export const ACHIEVEMENTBEHAVIOUR_TITLE_FIELD = "behaviourName";

export const AchievementBehaviourTitle = (
  record: TAchievementBehaviour
): string => {
  return record.behaviourName?.toString() || String(record.id);
};
