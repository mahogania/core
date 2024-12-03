import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AreaTitle } from "../area/AreaTitle";
import { PortalTitle } from "../portal/PortalTitle";

export const AreaTeleportTriggerEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="area.id" reference="Area" label="Area">
          <SelectInput optionText={AreaTitle} />
        </ReferenceInput>
        <TextInput label="Name" multiline source="name" />
        <ReferenceInput source="portal.id" reference="Portal" label="Portal">
          <SelectInput optionText={PortalTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
