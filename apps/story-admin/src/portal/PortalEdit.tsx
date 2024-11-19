import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AreaTeleportTriggerTitle } from "../areaTeleportTrigger/AreaTeleportTriggerTitle";

export const PortalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
        <TextInput label="Location" source="location" />
      </SimpleForm>
    </Edit>
  );
};
