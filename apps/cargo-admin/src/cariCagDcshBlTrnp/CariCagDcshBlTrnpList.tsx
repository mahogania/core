import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CariCagDcshBlTrnpList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CariCagDcshBlTrnps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="chss_no" source="chssNo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="drvr_nm" source="drvrNm" />
        <TextField label="drvr_pspr_no" source="drvrPsprNo" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="ID" source="id" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="mrn" source="mrn" />
        <TextField label="trnp_meth_nat_cd" source="trnpMethNatCd" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vhcl_mnur_cd" source="vhclMnurCd" />
        <TextField label="vhcl_nttn" source="vhclNttn" />
        <TextField label="vhcl_pt_cd" source="vhclPtCd" />
        <TextField label="vhcl_rgsr_no" source="vhclRgsrNo" />
        <TextField label="vhcl_srno" source="vhclSrno" />
        <TextField label="vhcl_ttn" source="vhclTtn" />{" "}
      </Datagrid>
    </List>
  );
};
