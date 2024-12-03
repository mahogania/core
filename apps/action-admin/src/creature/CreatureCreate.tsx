import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CreatureEquipmentTitle } from "../creatureEquipment/CreatureEquipmentTitle";
import { CreatureFormationTitle } from "../creatureFormation/CreatureFormationTitle";
import { CreatureImmunityTitle } from "../creatureImmunity/CreatureImmunityTitle";
import { CreatureLevelStatTitle } from "../creatureLevelStat/CreatureLevelStatTitle";
import { CreatureLootTitle } from "../creatureLoot/CreatureLootTitle";
import { CreatureModelInfoTitle } from "../creatureModelInfo/CreatureModelInfoTitle";
import { CreatureMovementInfoTitle } from "../creatureMovementInfo/CreatureMovementInfoTitle";

export const CreatureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Area Id" source="areaId" />
        <TextInput label="Behaviour Name" source="behaviourName" />
        <ReferenceInput
          source="creatureEquipments.id"
          reference="CreatureEquipment"
          label="Creature Equipments"
        >
          <SelectInput optionText={CreatureEquipmentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="creatureFormations.id"
          reference="CreatureFormation"
          label="Creature Formations"
        >
          <SelectInput optionText={CreatureFormationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="creatureImmunities.id"
          reference="CreatureImmunity"
          label="Creature Immunities"
        >
          <SelectInput optionText={CreatureImmunityTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="creatureLevelStats.id"
          reference="CreatureLevelStat"
          label="Creature Level Stats"
        >
          <SelectInput optionText={CreatureLevelStatTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="creatureLoots.id"
          reference="CreatureLoot"
          label="Creature Loots"
        >
          <SelectInput optionText={CreatureLootTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="creatureModelInfo.id"
          reference="CreatureModelInfo"
          label="Creature Model Info"
        >
          <SelectInput optionText={CreatureModelInfoTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="creatureMovementInfos.id"
          reference="CreatureMovementInfo"
          label="Creature Movement Infos"
        >
          <SelectInput optionText={CreatureMovementInfoTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Map ID" source="mapId" />
        <NumberInput step={1} label="Model Id" source="modelId" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Realm Id" source="realmId" />
        <TextInput label="Transform Id" source="transformId" />
        <NumberInput step={1} label="Zone Id" source="zoneId" />
      </SimpleForm>
    </Create>
  );
};
