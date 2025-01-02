import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClreDedVlutPdlList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ClreDedVlutPdls"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="ID" source="id" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextField label="pdls_cach_amt" source="pdlsCachAmt" />
        <TextField label="pdls_cach_curr_cd" source="pdlsCachCurrCd" />
        <TextField label="pdls_cach_fxrt" source="pdlsCachFxrt" />
        <TextField label="pdls_cach_ncy_amt" source="pdlsCachNcyAmt" />
        <TextField label="pdls_ddct_amt" source="pdlsDdctAmt" />
        <TextField label="pdls_ddct_curr_cd" source="pdlsDdctCurrCd" />
        <TextField label="pdls_ddct_fxrt" source="pdlsDdctFxrt" />
        <TextField label="pdls_ddct_ncy_amt" source="pdlsDdctNcyAmt" />
        <TextField label="pdls_infee_amt" source="pdlsInfeeAmt" />
        <TextField label="pdls_infee_curr_cd" source="pdlsInfeeCurrCd" />
        <TextField label="pdls_infee_fxrt" source="pdlsInfeeFxrt" />
        <TextField label="pdls_infee_ncy_amt" source="pdlsInfeeNcyAmt" />
        <TextField label="pdls_invc_amt" source="pdlsInvcAmt" />
        <TextField label="pdls_invc_curr_cd" source="pdlsInvcCurrCd" />
        <TextField label="pdls_invc_fxrt" source="pdlsInvcFxrt" />
        <TextField label="pdls_invc_ncy_amt" source="pdlsInvcNcyAmt" />
        <TextField label="pdls_invc_usd_amt" source="pdlsInvcUsdAmt" />
        <TextField label="pdls_mprc_base_val" source="pdlsMprcBaseVal" />
        <TextField label="pdls_mprc_curr_cd" source="pdlsMprcCurrCd" />
        <TextField label="pdls_mprc_ncy_amt" source="pdlsMprcNcyAmt" />
        <TextField label="pdls_mprc_tp_cd" source="pdlsMprcTpCd" />
        <TextField label="pdls_mprc_usd_amt" source="pdlsMprcUsdAmt" />
        <TextField label="pdls_mprc_ut_amt" source="pdlsMprcUtAmt" />
        <TextField label="pdls_no" source="pdlsNo" />
        <TextField label="pdls_otcst_amt" source="pdlsOtcstAmt" />
        <TextField label="pdls_otcst_curr_cd" source="pdlsOtcstCurrCd" />
        <TextField label="pdls_otcst_fxrt" source="pdlsOtcstFxrt" />
        <TextField label="pdls_otcst_ncy_amt" source="pdlsOtcstNcyAmt" />
        <TextField label="pdls_txbs_ncy_amt" source="pdlsTxbsNcyAmt" />
        <TextField label="pdls_txbs_usd_amt" source="pdlsTxbsUsdAmt" />
        <TextField label="pdls_vlut_ncy_amt" source="pdlsVlutNcyAmt" />
        <TextField label="pdls_vlut_usd_amt" source="pdlsVlutUsdAmt" />
        <TextField label="reff_no" source="reffNo" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
