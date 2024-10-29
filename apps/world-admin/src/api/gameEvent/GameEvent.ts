import { GameEventCondition } from "../gameEventCondition/GameEventCondition";
import { GameEventCreature } from "../gameEventCreature/GameEventCreature";
import { GameEventGameObject } from "../gameEventGameObject/GameEventGameObject";
import { GameEventModelEquip } from "../gameEventModelEquip/GameEventModelEquip";
import { GameEventQuest } from "../gameEventQuest/GameEventQuest";

export type GameEvent = {
  announce: string | null;
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  gameEventConditions?: GameEventCondition | null;
  gameEventCreatures?: GameEventCreature | null;
  gameEventGameObjects?: GameEventGameObject | null;
  gameEventModelEquips?: GameEventModelEquip | null;
  gameEventQuests?: GameEventQuest | null;
  id: string;
  startTime: Date | null;
  updatedAt: Date;
};
