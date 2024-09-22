import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AreaTriggerCreatePropertiesPolygonVertexList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AreaTriggerCreatePropertiesPolygonVertices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="AreaTriggerCreatePropertiesId"
          source="areaTriggerCreatePropertiesId"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Idx" source="idx" />
        <BooleanField label="IsCustom" source="isCustom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />
        <TextField label="VerticeTargetX" source="verticeTargetX" />
        <TextField label="VerticeTargetY" source="verticeTargetY" />
        <TextField label="VerticeX" source="verticeX" />
        <TextField label="VerticeY" source="verticeY" />{" "}
      </Datagrid>
    </List>
  );
};
