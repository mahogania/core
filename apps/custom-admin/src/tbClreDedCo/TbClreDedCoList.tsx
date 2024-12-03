import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TbClreDedCoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TbClreDedCos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dcer_addr" source="dcerAddr" />
        <TextField label="dcer_co_nm" source="dcerCoNm" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="exppn_addr" source="exppnAddr" />
        <TextField label="exppn_co_nm" source="exppnCoNm" />
        <TextField label="exppn_eml" source="exppnEml" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="ID" source="id" />
        <TextField label="imppn_addr" source="imppnAddr" />
        <TextField label="imppn_co_nm" source="imppnCoNm" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextField label="reff_no" source="reffNo" />
        <TextField label="txpr_addr" source="txprAddr" />
        <TextField label="txpr_co_nm" source="txprCoNm" />
        <TextField label="txpr_eml" source="txprEml" />
        <TextField label="txpr_tlph_no" source="txprTlphNo" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
