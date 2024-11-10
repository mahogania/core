import { Achievement } from "../achievement/Achievement";

export type AchievementBehaviour = {
  achievement?: Achievement | null;
  behaviourName: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
