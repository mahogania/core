import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ConditionsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Comment" source="comment" />
        <TextField
          label="ConditionStringValue1"
          source="conditionStringValue1"
        />
        <TextField label="ConditionTarget" source="conditionTarget" />
        <TextField
          label="ConditionTypeOrReference"
          source="conditionTypeOrReference"
        />
        <TextField label="ConditionValue1" source="conditionValue1" />
        <TextField label="ConditionValue2" source="conditionValue2" />
        <TextField label="ConditionValue3" source="conditionValue3" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ElseGroup" source="elseGroup" />
        <TextField label="ErrorTextId" source="errorTextId" />
        <TextField label="ErrorType" source="errorType" />
        <TextField label="ID" source="id" />
        <TextField label="NegativeCondition" source="negativeCondition" />
        <TextField label="ScriptName" source="scriptName" />
        <TextField label="SourceEntry" source="sourceEntry" />
        <TextField label="SourceGroup" source="sourceGroup" />
        <TextField label="SourceId" source="sourceId" />
        <TextField
          label="SourceTypeOrReferenceId"
          source="sourceTypeOrReferenceId"
        />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
