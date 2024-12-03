import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TbClreDedPrcDclrPdlsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="brng_trnp_cst" source="brngTrnpCst" />
        <NumberInput label="byer_pymn_cst" source="byerPymnCst" />
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <NumberInput label="indr_pymn_tamt" source="indrPymnTamt" />
        <NumberInput label="infee_amt" source="infeeAmt" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <NumberInput label="load_cst_amt" source="loadCstAmt" />
        <NumberInput step={1} label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextInput label="mdl_stsz_no" source="mdlStszNo" />
        <NumberInput label="mdtn_pcfe_amt" source="mdtnPcfeAmt" />
        <NumberInput label="mnfu_srvc_1_amt" source="mnfuSrvc_1Amt" />
        <NumberInput label="mnfu_srvc_2_amt" source="mnfuSrvc_2Amt" />
        <NumberInput label="mnfu_srvc_3_amt" source="mnfuSrvc_3Amt" />
        <NumberInput label="mnfu_srvc_4_amt" source="mnfuSrvc_4Amt" />
        <NumberInput label="otcst_amt" source="otcstAmt" />
        <NumberInput label="pcfe_amt" source="pcfeAmt" />
        <NumberInput label="pcfe_lcne_amt" source="pcfeLcneAmt" />
        <NumberInput label="pckg_amt" source="pckgAmt" />
        <TextInput label="pdls_no" source="pdlsNo" />
        <NumberInput label="pyr_trif_amt" source="pyrTrifAmt" />
        <TextInput label="reff_no" source="reffNo" />
        <NumberInput label="resale_ern_amt" source="resaleErnAmt" />
        <NumberInput label="tech_sppt_cst" source="techSpptCst" />
        <NumberInput label="trnp_cst_amt" source="trnpCstAmt" />
      </SimpleForm>
    </Create>
  );
};
