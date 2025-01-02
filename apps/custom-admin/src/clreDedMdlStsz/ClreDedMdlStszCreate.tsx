import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ClreDedMdlStszCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="cach_amt" source="cachAmt" />
        <TextInput label="cach_curr_cd" source="cachCurrCd" />
        <NumberInput label="cach_fxrt" source="cachFxrt" />
        <NumberInput label="cach_ncy_amt" source="cachNcyAmt" />
        <NumberInput label="ddct_amt" source="ddctAmt" />
        <TextInput label="ddct_curr_cd" source="ddctCurrCd" />
        <NumberInput label="ddct_fxrt" source="ddctFxrt" />
        <NumberInput label="ddct_ncy_amt" source="ddctNcyAmt" />
        <NumberInput label="ddct_rt" source="ddctRt" />
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <NumberInput label="indr_pymn_tamt" source="indrPymnTamt" />
        <NumberInput label="infee_amt" source="infeeAmt" />
        <TextInput label="infee_curr_cd" source="infeeCurrCd" />
        <NumberInput label="infee_fxrt" source="infeeFxrt" />
        <NumberInput label="infee_ncy_amt" source="infeeNcyAmt" />
        <TextInput label="ingr_nm" source="ingrNm" />
        <NumberInput label="invc_amt" source="invcAmt" />
        <TextInput label="invc_curr_cd" source="invcCurrCd" />
        <NumberInput label="invc_fxrt" source="invcFxrt" />
        <NumberInput label="invc_ncy_amt" source="invcNcyAmt" />
        <NumberInput label="invc_usd_amt" source="invcUsdAmt" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <NumberInput step={1} label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextInput label="mdl_stsz_nm" source="mdlStszNm" />
        <TextInput label="mdl_stsz_no" source="mdlStszNo" />
        <NumberInput label="otcst_amt" source="otcstAmt" />
        <TextInput label="otcst_curr_cd" source="otcstCurrCd" />
        <NumberInput label="otcst_fxrt" source="otcstFxrt" />
        <NumberInput label="otcst_ncy_amt" source="otcstNcyAmt" />
        <TextInput label="pdls_no" source="pdlsNo" />
        <NumberInput label="qty" source="qty" />
        <TextInput label="qty_ut_cd" source="qtyUtCd" />
        <TextInput label="reff_no" source="reffNo" />
        <NumberInput label="ttxbs_ncy_amt" source="ttxbsNcyAmt" />
        <NumberInput label="ttxbs_usd_amt" source="ttxbsUsdAmt" />
        <NumberInput label="tvlut_ncy_amt" source="tvlutNcyAmt" />
        <NumberInput label="tvlut_usd_amt" source="tvlutUsdAmt" />
        <NumberInput label="ut_prc" source="utPrc" />
      </SimpleForm>
    </Create>
  );
};
