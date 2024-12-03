import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TbClreDedVlutComnShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cach_amt" source="cachAmt" />
        <TextField label="cach_curr_cd" source="cachCurrCd" />
        <TextField label="cach_fxrt" source="cachFxrt" />
        <TextField label="cach_ncy_amt" source="cachNcyAmt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ddct_amt" source="ddctAmt" />
        <TextField label="ddct_curr_cd" source="ddctCurrCd" />
        <TextField label="ddct_fxrt" source="ddctFxrt" />
        <TextField label="ddct_ncy_amt" source="ddctNcyAmt" />
        <TextField label="ddct_rt" source="ddctRt" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="ID" source="id" />
        <TextField label="infee_amt" source="infeeAmt" />
        <TextField label="infee_curr_cd" source="infeeCurrCd" />
        <TextField label="infee_fxrt" source="infeeFxrt" />
        <TextField label="infee_ncy_amt" source="infeeNcyAmt" />
        <TextField label="invc_amt" source="invcAmt" />
        <TextField label="invc_curr_cd" source="invcCurrCd" />
        <TextField label="invc_fxrt" source="invcFxrt" />
        <TextField label="invc_ncy_amt" source="invcNcyAmt" />
        <TextField label="invc_usd_amt" source="invcUsdAmt" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextField label="otcst_amt" source="otcstAmt" />
        <TextField label="otcst_curr_cd" source="otcstCurrCd" />
        <TextField label="otcst_fxrt" source="otcstFxrt" />
        <TextField label="otcst_ncy_amt" source="otcstNcyAmt" />
        <TextField label="reff_no" source="reffNo" />
        <TextField label="ttxbs_ncy_amt" source="ttxbsNcyAmt" />
        <TextField label="ttxbs_usd_amt" source="ttxbsUsdAmt" />
        <TextField label="tvlut_ncy_amt" source="tvlutNcyAmt" />
        <TextField label="tvlut_usd_amt" source="tvlutUsdAmt" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
