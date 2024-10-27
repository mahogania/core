import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { AreaQuestTriggerTitle } from "../areaQuestTrigger/AreaQuestTriggerTitle";
import { AreaScenarioTriggerTitle } from "../areaScenarioTrigger/AreaScenarioTriggerTitle";
import { AreaTeleportTriggerTitle } from "../areaTeleportTrigger/AreaTeleportTriggerTitle";

export const AreaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
      </SimpleForm>
    </Create>
  );
};
