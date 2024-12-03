import { PlayerFactionAchievement } from "../playerFactionAchievement/PlayerFactionAchievement";
import { Achievement } from "../achievement/Achievement";
import { GeneStat } from "../geneStat/GeneStat";
import { PlayerCraft } from "../playerCraft/PlayerCraft";
import { PlayerFactionQuest } from "../playerFactionQuest/PlayerFactionQuest";
import { PlayerFactionReputation } from "../playerFactionReputation/PlayerFactionReputation";
import { PlayerFactionSpell } from "../playerFactionSpell/PlayerFactionSpell";
import { PlayerFactionTitle } from "../playerFactionTitle/PlayerFactionTitle";
import { PlayerXpForLevel } from "../playerXpForLevel/PlayerXpForLevel";
import { Response } from "../response/Response";

export type Player = {
  PlayerFactionAchievements?: Array<PlayerFactionAchievement>;
  achievements?: Array<Achievement>;
  createdAt: Date;
  geneStats?: GeneStat | null;
  id: string;
  playerCrafts?: Array<PlayerCraft>;
  playerFactionQuests?: Array<PlayerFactionQuest>;
  playerFactionReputations?: Array<PlayerFactionReputation>;
  playerFactionSpells?: Array<PlayerFactionSpell>;
  playerFactionTitles?: Array<PlayerFactionTitle>;
  playerXpForLevels?: Array<PlayerXpForLevel>;
  responses?: Array<Response>;
  updatedAt: Date;
};
