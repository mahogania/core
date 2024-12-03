import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ConditionsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ConditionsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
