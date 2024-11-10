import { GameEventConditionWhereUniqueInput } from "../gameEventCondition/GameEventConditionWhereUniqueInput";
import { GameEventCreatureWhereUniqueInput } from "../gameEventCreature/GameEventCreatureWhereUniqueInput";
import { GameEventGameObjectWhereUniqueInput } from "../gameEventGameObject/GameEventGameObjectWhereUniqueInput";
import { GameEventModelEquipWhereUniqueInput } from "../gameEventModelEquip/GameEventModelEquipWhereUniqueInput";
import { GameEventQuestWhereUniqueInput } from "../gameEventQuest/GameEventQuestWhereUniqueInput";

export type GameEventUpdateInput = {
  announce?: string | null;
  description?: string | null;
  endTime?: Date | null;
  gameEventConditions?: GameEventConditionWhereUniqueInput | null;
  gameEventCreatures?: GameEventCreatureWhereUniqueInput | null;
  gameEventGameObjects?: GameEventGameObjectWhereUniqueInput | null;
  gameEventModelEquips?: GameEventModelEquipWhereUniqueInput | null;
  gameEventQuests?: GameEventQuestWhereUniqueInput | null;
  startTime?: Date | null;
};
