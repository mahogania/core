import { AchievementScriptsWhereInput } from "./AchievementScriptsWhereInput";
import { AchievementScriptsOrderByInput } from "./AchievementScriptsOrderByInput";

export type AchievementScriptsFindManyArgs = {
  where?: AchievementScriptsWhereInput;
  orderBy?: Array<AchievementScriptsOrderByInput>;
  skip?: number;
  take?: number;
};
