import { AchievementScripts as TAchievementScripts } from "../api/achievementScripts/AchievementScripts";

export const ACHIEVEMENTSCRIPTS_TITLE_FIELD = "scriptName";

export const AchievementScriptsTitle = (
  record: TAchievementScripts
): string => {
  return record.scriptName?.toString() || String(record.id);
};
