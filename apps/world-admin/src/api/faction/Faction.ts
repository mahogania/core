import { PlayerFactionAchievement } from "../playerFactionAchievement/PlayerFactionAchievement";
import { PlayerFactionQuest } from "../playerFactionQuest/PlayerFactionQuest";
import { PlayerFactionReputation } from "../playerFactionReputation/PlayerFactionReputation";
import { PlayerFactionSpell } from "../playerFactionSpell/PlayerFactionSpell";
import { PlayerFactionTitle } from "../playerFactionTitle/PlayerFactionTitle";

export type Faction = {
  createdAt: Date;
  id: string;
  playerFactionAchievements?: PlayerFactionAchievement | null;
  playerFactionQuests?: Array<PlayerFactionQuest>;
  playerFactionReputations?: Array<PlayerFactionReputation>;
  playerFactionSpells?: Array<PlayerFactionSpell>;
  playerFactionTitles?: Array<PlayerFactionTitle>;
  updatedAt: Date;
};
