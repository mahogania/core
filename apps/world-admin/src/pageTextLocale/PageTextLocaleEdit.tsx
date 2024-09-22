import * as React from "react";
import { Edit, SimpleForm, EditProps } from "react-admin";

export const PageTextLocaleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
      </SimpleForm>
    </Edit>
  );
};
