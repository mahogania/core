import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { CommandTitle } from "../command/CommandTitle";
import { ViewTitle } from "../view/ViewTitle";

export const ProcessorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="commands" reference="Command">
          <SelectArrayInput
            optionText={CommandTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="views" reference="View">
          <SelectArrayInput
            optionText={ViewTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
