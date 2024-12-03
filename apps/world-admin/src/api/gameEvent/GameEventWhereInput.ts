import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GameEventConditionWhereUniqueInput } from "../gameEventCondition/GameEventConditionWhereUniqueInput";
import { GameEventCreatureWhereUniqueInput } from "../gameEventCreature/GameEventCreatureWhereUniqueInput";
import { GameEventGameObjectWhereUniqueInput } from "../gameEventGameObject/GameEventGameObjectWhereUniqueInput";
import { GameEventModelEquipWhereUniqueInput } from "../gameEventModelEquip/GameEventModelEquipWhereUniqueInput";
import { GameEventQuestWhereUniqueInput } from "../gameEventQuest/GameEventQuestWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type GameEventWhereInput = {
  announce?: StringNullableFilter;
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  gameEventConditions?: GameEventConditionWhereUniqueInput;
  gameEventCreatures?: GameEventCreatureWhereUniqueInput;
  gameEventGameObjects?: GameEventGameObjectWhereUniqueInput;
  gameEventModelEquips?: GameEventModelEquipWhereUniqueInput;
  gameEventQuests?: GameEventQuestWhereUniqueInput;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
};
