import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GAMEEVENTCONDITION_TITLE_FIELD } from "../gameEventCondition/GameEventConditionTitle";
import { GAMEEVENTCREATURE_TITLE_FIELD } from "../gameEventCreature/GameEventCreatureTitle";
import { GAMEEVENTGAMEOBJECT_TITLE_FIELD } from "../gameEventGameObject/GameEventGameObjectTitle";
import { GAMEEVENTMODELEQUIP_TITLE_FIELD } from "../gameEventModelEquip/GameEventModelEquipTitle";
import { GAMEEVENTQUEST_TITLE_FIELD } from "../gameEventQuest/GameEventQuestTitle";

export const GameEventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameEvents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Announcement" source="announce" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="End Time" source="endTime" />
        <ReferenceField
          label="Game Event Conditions"
          source="gameeventcondition.id"
          reference="GameEventCondition"
        >
          <TextField source={GAMEEVENTCONDITION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Game Event Creatures"
          source="gameeventcreature.id"
          reference="GameEventCreature"
        >
          <TextField source={GAMEEVENTCREATURE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Game Event Game Objects"
          source="gameeventgameobject.id"
          reference="GameEventGameObject"
        >
          <TextField source={GAMEEVENTGAMEOBJECT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Game Event Model Equips"
          source="gameeventmodelequip.id"
          reference="GameEventModelEquip"
        >
          <TextField source={GAMEEVENTMODELEQUIP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Game Event Quests"
          source="gameeventquest.id"
          reference="GameEventQuest"
        >
          <TextField source={GAMEEVENTQUEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Start Time" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
