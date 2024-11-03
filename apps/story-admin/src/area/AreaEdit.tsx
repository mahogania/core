import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AreaQuestTriggerTitle } from "../areaQuestTrigger/AreaQuestTriggerTitle";
import { AreaScenarioTriggerTitle } from "../areaScenarioTrigger/AreaScenarioTriggerTitle";
import { AreaTeleportTriggerTitle } from "../areaTeleportTrigger/AreaTeleportTriggerTitle";
import { ZoneTitle } from "../zone/ZoneTitle";

export const AreaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="areaQuestTriggers"
          reference="AreaQuestTrigger"
        >
          <SelectArrayInput
            optionText={AreaQuestTriggerTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="areaScenarioTriggers"
          reference="AreaScenarioTrigger"
        >
          <SelectArrayInput
            optionText={AreaScenarioTriggerTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="areaTeleportTriggers"
          reference="AreaTeleportTrigger"
        >
          <SelectArrayInput
            optionText={AreaTeleportTriggerTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="zone.id" reference="Zone" label="Zone">
          <SelectInput optionText={ZoneTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
