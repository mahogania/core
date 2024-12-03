import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CREATUREEQUIPMENT_TITLE_FIELD } from "../creatureEquipment/CreatureEquipmentTitle";
import { CREATUREFORMATION_TITLE_FIELD } from "./CreatureFormationTitle";
import { CREATUREIMMUNITY_TITLE_FIELD } from "../creatureImmunity/CreatureImmunityTitle";
import { CREATURELEVELSTAT_TITLE_FIELD } from "../creatureLevelStat/CreatureLevelStatTitle";
import { CREATURELOOT_TITLE_FIELD } from "../creatureLoot/CreatureLootTitle";
import { CREATUREMODELINFO_TITLE_FIELD } from "../creatureModelInfo/CreatureModelInfoTitle";
import { CREATUREMOVEMENTINFO_TITLE_FIELD } from "../creatureMovementInfo/CreatureMovementInfoTitle";

export const CreatureFormationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Angle" source="angle" />
        <TextField label="Box Id" source="boxId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Distance" source="dist" />
        <TextField label="Group Id" source="groupId" />
        <TextField label="ID" source="id" />
        <TextField label="Leader Id" source="leaderId" />
        <TextField label="Member Id" source="memberId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Creature"
          target="creatureFormationsId"
          label="Creatures"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Area Id" source="areaId" />
            <TextField label="Behaviour Name" source="behaviourName" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Creature Equipments"
              source="creatureequipment.id"
              reference="CreatureEquipment"
            >
              <TextField source={CREATUREEQUIPMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Creature Formations"
              source="creatureformation.id"
              reference="CreatureFormation"
            >
              <TextField source={CREATUREFORMATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Creature Immunities"
              source="creatureimmunity.id"
              reference="CreatureImmunity"
            >
              <TextField source={CREATUREIMMUNITY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Creature Level Stats"
              source="creaturelevelstat.id"
              reference="CreatureLevelStat"
            >
              <TextField source={CREATURELEVELSTAT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Creature Loots"
              source="creatureloot.id"
              reference="CreatureLoot"
            >
              <TextField source={CREATURELOOT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Creature Model Info"
              source="creaturemodelinfo.id"
              reference="CreatureModelInfo"
            >
              <TextField source={CREATUREMODELINFO_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Creature Movement Infos"
              source="creaturemovementinfo.id"
              reference="CreatureMovementInfo"
            >
              <TextField source={CREATUREMOVEMENTINFO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Map ID" source="mapId" />
            <TextField label="Model Id" source="modelId" />
            <TextField label="Name" source="name" />
            <TextField label="Realm Id" source="realmId" />
            <TextField label="Transform Id" source="transformId" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Zone Id" source="zoneId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
