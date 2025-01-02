import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClreDedCntrList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ClreDedCntrs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="cntr_no" source="cntrNo" />
        <TextField label="cntr_srno" source="cntrSrno" />
        <TextField label="cntr_stfn_stts_cd" source="cntrStfnSttsCd" />
        <TextField label="cntr_tp_cd" source="cntrTpCd" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="ID" source="id" />
        <TextField label="insc_trgt_yn" source="inscTrgtYn" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextField label="reff_no" source="reffNo" />
        <TextField label="seal_chpn1" source="sealChpn1" />
        <TextField label="seal_chpn2" source="sealChpn2" />
        <TextField label="seal_chpn3" source="sealChpn3" />
        <TextField label="seal_chpn_cd" source="sealChpnCd" />
        <TextField label="seal_no1" source="sealNo1" />
        <TextField label="seal_no2" source="sealNo2" />
        <TextField label="seal_no3" source="sealNo3" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
