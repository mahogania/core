import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GameEventConditionTitle } from "../gameEventCondition/GameEventConditionTitle";
import { GameEventCreatureTitle } from "../gameEventCreature/GameEventCreatureTitle";
import { GameEventGameObjectTitle } from "../gameEventGameObject/GameEventGameObjectTitle";
import { GameEventModelEquipTitle } from "../gameEventModelEquip/GameEventModelEquipTitle";
import { GameEventQuestTitle } from "../gameEventQuest/GameEventQuestTitle";

export const GameEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Announcement" source="announce" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="End Time" source="endTime" />
        <ReferenceInput
          source="gameEventConditions.id"
          reference="GameEventCondition"
          label="Game Event Conditions"
        >
          <SelectInput optionText={GameEventConditionTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="gameEventCreatures.id"
          reference="GameEventCreature"
          label="Game Event Creatures"
        >
          <SelectInput optionText={GameEventCreatureTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="gameEventGameObjects.id"
          reference="GameEventGameObject"
          label="Game Event Game Objects"
        >
          <SelectInput optionText={GameEventGameObjectTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="gameEventModelEquips.id"
          reference="GameEventModelEquip"
          label="Game Event Model Equips"
        >
          <SelectInput optionText={GameEventModelEquipTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="gameEventQuests.id"
          reference="GameEventQuest"
          label="Game Event Quests"
        >
          <SelectInput optionText={GameEventQuestTitle} />
        </ReferenceInput>
        <DateTimeInput label="Start Time" source="startTime" />
      </SimpleForm>
    </Edit>
  );
};
