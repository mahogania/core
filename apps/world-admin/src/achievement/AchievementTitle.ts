import { Achievement as TAchievement } from "../api/achievement/Achievement";

export const ACHIEVEMENT_TITLE_FIELD = "id";

export const AchievementTitle = (record: TAchievement): string => {
  return record.id?.toString() || String(record.id);
};
