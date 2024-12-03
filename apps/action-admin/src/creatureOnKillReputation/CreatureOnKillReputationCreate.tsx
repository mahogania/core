import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const CreatureOnKillReputationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="creatureId" source="creatureId" />
        <NumberInput step={1} label="IsTeamAward1" source="isTeamAward1" />
        <NumberInput step={1} label="IsTeamAward2" source="isTeamAward2" />
        <NumberInput step={1} label="MaxStanding1" source="maxStanding1" />
        <NumberInput step={1} label="MaxStanding2" source="maxStanding2" />
        <NumberInput
          step={1}
          label="RewOnKillRepFaction1"
          source="rewOnKillRepFaction1"
        />
        <NumberInput
          step={1}
          label="RewOnKillRepFaction2"
          source="rewOnKillRepFaction2"
        />
        <NumberInput
          step={1}
          label="RewOnKillRepValue1"
          source="rewOnKillRepValue1"
        />
        <NumberInput
          step={1}
          label="RewOnKillRepValue2"
          source="rewOnKillRepValue2"
        />
        <NumberInput step={1} label="TeamDependent" source="teamDependent" />
      </SimpleForm>
    </Create>
  );
};
