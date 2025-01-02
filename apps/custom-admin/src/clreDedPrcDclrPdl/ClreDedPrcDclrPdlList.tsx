import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClreDedPrcDclrPdlList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ClreDedPrcDclrPdls"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="brng_trnp_cst" source="brngTrnpCst" />
        <TextField label="byer_pymn_cst" source="byerPymnCst" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="ID" source="id" />
        <TextField label="indr_pymn_tamt" source="indrPymnTamt" />
        <TextField label="infee_amt" source="infeeAmt" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="load_cst_amt" source="loadCstAmt" />
        <TextField label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextField label="mdl_stsz_no" source="mdlStszNo" />
        <TextField label="mdtn_pcfe_amt" source="mdtnPcfeAmt" />
        <TextField label="mnfu_srvc_1_amt" source="mnfuSrvc_1Amt" />
        <TextField label="mnfu_srvc_2_amt" source="mnfuSrvc_2Amt" />
        <TextField label="mnfu_srvc_3_amt" source="mnfuSrvc_3Amt" />
        <TextField label="mnfu_srvc_4_amt" source="mnfuSrvc_4Amt" />
        <TextField label="otcst_amt" source="otcstAmt" />
        <TextField label="pcfe_amt" source="pcfeAmt" />
        <TextField label="pcfe_lcne_amt" source="pcfeLcneAmt" />
        <TextField label="pckg_amt" source="pckgAmt" />
        <TextField label="pdls_no" source="pdlsNo" />
        <TextField label="pyr_trif_amt" source="pyrTrifAmt" />
        <TextField label="reff_no" source="reffNo" />
        <TextField label="resale_ern_amt" source="resaleErnAmt" />
        <TextField label="tech_sppt_cst" source="techSpptCst" />
        <TextField label="trnp_cst_amt" source="trnpCstAmt" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
