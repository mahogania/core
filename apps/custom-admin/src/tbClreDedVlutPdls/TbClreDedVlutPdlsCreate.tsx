import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const TbClreDedVlutPdlsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <NumberInput step={1} label="mdfy_dgcnt" source="mdfyDgcnt" />
        <NumberInput label="pdls_cach_amt" source="pdlsCachAmt" />
        <TextInput label="pdls_cach_curr_cd" source="pdlsCachCurrCd" />
        <NumberInput label="pdls_cach_fxrt" source="pdlsCachFxrt" />
        <NumberInput label="pdls_cach_ncy_amt" source="pdlsCachNcyAmt" />
        <NumberInput label="pdls_ddct_amt" source="pdlsDdctAmt" />
        <TextInput label="pdls_ddct_curr_cd" source="pdlsDdctCurrCd" />
        <NumberInput label="pdls_ddct_fxrt" source="pdlsDdctFxrt" />
        <NumberInput label="pdls_ddct_ncy_amt" source="pdlsDdctNcyAmt" />
        <NumberInput label="pdls_infee_amt" source="pdlsInfeeAmt" />
        <TextInput label="pdls_infee_curr_cd" source="pdlsInfeeCurrCd" />
        <NumberInput label="pdls_infee_fxrt" source="pdlsInfeeFxrt" />
        <NumberInput label="pdls_infee_ncy_amt" source="pdlsInfeeNcyAmt" />
        <NumberInput label="pdls_invc_amt" source="pdlsInvcAmt" />
        <TextInput label="pdls_invc_curr_cd" source="pdlsInvcCurrCd" />
        <NumberInput label="pdls_invc_fxrt" source="pdlsInvcFxrt" />
        <NumberInput label="pdls_invc_ncy_amt" source="pdlsInvcNcyAmt" />
        <NumberInput label="pdls_invc_usd_amt" source="pdlsInvcUsdAmt" />
        <NumberInput label="pdls_mprc_base_val" source="pdlsMprcBaseVal" />
        <TextInput label="pdls_mprc_curr_cd" source="pdlsMprcCurrCd" />
        <NumberInput label="pdls_mprc_ncy_amt" source="pdlsMprcNcyAmt" />
        <TextInput label="pdls_mprc_tp_cd" source="pdlsMprcTpCd" />
        <NumberInput label="pdls_mprc_usd_amt" source="pdlsMprcUsdAmt" />
        <NumberInput label="pdls_mprc_ut_amt" source="pdlsMprcUtAmt" />
        <TextInput label="pdls_no" source="pdlsNo" />
        <NumberInput label="pdls_otcst_amt" source="pdlsOtcstAmt" />
        <TextInput label="pdls_otcst_curr_cd" source="pdlsOtcstCurrCd" />
        <NumberInput label="pdls_otcst_fxrt" source="pdlsOtcstFxrt" />
        <NumberInput label="pdls_otcst_ncy_amt" source="pdlsOtcstNcyAmt" />
        <NumberInput label="pdls_txbs_ncy_amt" source="pdlsTxbsNcyAmt" />
        <NumberInput label="pdls_txbs_usd_amt" source="pdlsTxbsUsdAmt" />
        <NumberInput label="pdls_vlut_ncy_amt" source="pdlsVlutNcyAmt" />
        <NumberInput label="pdls_vlut_usd_amt" source="pdlsVlutUsdAmt" />
        <TextInput label="reff_no" source="reffNo" />
      </SimpleForm>
    </Create>
  );
};
