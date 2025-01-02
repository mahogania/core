import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClreDedRwmList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ClreDedRwms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="bf_cmdt_clsf_spel_cd" source="bfCmdtClsfSpelCd" />
        <TextField label="bf_dtl_dcsh_no" source="bfDtlDcshNo" />
        <TextField label="bf_hs_cd" source="bfHsCd" />
        <TextField label="bf_pdls_no" source="bfPdlsNo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="divd_ffmn_tp_cd" source="divdFfmnTpCd" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="ID" source="id" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextField label="ntwg" source="ntwg" />
        <TextField label="pdls_no" source="pdlsNo" />
        <TextField label="qty" source="qty" />
        <TextField label="qty_ut_cd" source="qtyUtCd" />
        <TextField label="reff_no" source="reffNo" />
        <TextField label="rwms_srno" source="rwmsSrno" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
