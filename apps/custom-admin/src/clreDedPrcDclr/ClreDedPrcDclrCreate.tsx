import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ClreDedPrcDclrCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="adcst_brkg_amt" source="adcstBrkgAmt" />
        <NumberInput label="adcst_cnsm_cmdt_cst" source="adcstCnsmCmdtCst" />
        <NumberInput label="adcst_ctnr_pckg_cst" source="adcstCtnrPckgCst" />
        <NumberInput
          label="adcst_imp_port_infee_amt"
          source="adcstImpPortInfeeAmt"
        />
        <NumberInput label="adcst_imp_port_otcst" source="adcstImpPortOtcst" />
        <NumberInput
          label="adcst_imp_port_trcg_amt"
          source="adcstImpPortTrcgAmt"
        />
        <NumberInput
          label="adcst_mtrl_cmps_ftor_cst"
          source="adcstMtrlCmpsFtorCst"
        />
        <NumberInput label="adcst_prcs_cst" source="adcstPrcsCst" />
        <TextInput label="adcst_puch_cmis_yn" source="adcstPuchCmisYn" />
        <NumberInput label="adcst_rylt_cst" source="adcstRyltCst" />
        <TextInput label="adcst_sale_cmis_yn" source="adcstSaleCmisYn" />
        <NumberInput label="adcst_selr_rvrs_amt" source="adcstSelrRvrsAmt" />
        <NumberInput label="adcst_tech_dgn_otcst" source="adcstTechDgnOtcst" />
        <NumberInput label="adcst_tool_otcst" source="adcstToolOtcst" />
        <NumberInput label="adcst_trnp_cst" source="adcstTrnpCst" />
        <TextInput label="adit_opin_cn" multiline source="aditOpinCn" />
        <NumberInput label="adtn_cst_sum_amt" source="adtnCstSumAmt" />
        <TextInput label="bfhn_dtrm_ofdc_no" source="bfhnDtrmOfdcNo" />
        <TextInput label="bfhn_dtrm_ofdc_pbls_dt" source="bfhnDtrmOfdcPblsDt" />
        <TextInput label="byer_idfy_no" source="byerIdfyNo" />
        <NumberInput label="cput_bss_dlng_prc" source="cputBssDlngPrc" />
        <NumberInput label="cput_bss_indr_amt" source="cputBssIndrAmt" />
        <NumberInput label="cput_bss_sum_amt" source="cputBssSumAmt" />
        <TextInput label="cvnt_dt" source="cvntDt" />
        <TextInput label="cvnt_no" source="cvntNo" />
        <TextInput label="dcer_nm" source="dcerNm" />
        <TextInput label="dclr_dt" source="dclrDt" />
        <TextInput label="dclr_plc_nm" source="dclrPlcNm" />
        <NumberInput label="dclr_tx_prc" source="dclrTxPrc" />
        <NumberInput
          label="ddct_exp_cnty_trif_amt"
          source="ddctExpCntyTrifAmt"
        />
        <NumberInput label="ddct_otcst" source="ddctOtcst" />
        <NumberInput label="ddct_oths_apmt_amt" source="ddctOthsApmtAmt" />
        <NumberInput label="ddct_sum_amt" source="ddctSumAmt" />
        <NumberInput label="ddct_trnp_cst" source="ddctTrnpCst" />
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="dlvr_cond_cd" source="dlvrCondCd" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextInput label="invc_no" source="invcNo" />
        <TextInput label="invc_pbls_dt" source="invcPblsDt" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <NumberInput step={1} label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextInput label="oths_desc" multiline source="othsDesc" />
        <TextInput label="ques_rspn_1_yn" source="quesRspn_1Yn" />
        <TextInput label="ques_rspn_2_yn" source="quesRspn_2Yn" />
        <TextInput label="ques_rspn_3_yn" source="quesRspn_3Yn" />
        <TextInput label="ques_rspn_4_yn" source="quesRspn_4Yn" />
        <TextInput label="ques_rspn_5_yn" source="quesRspn_5Yn" />
        <TextInput label="ques_rspn_6_yn" source="quesRspn_6Yn" />
        <TextInput label="ques_rspn_7_yn" source="quesRspn_7Yn" />
        <TextInput label="ques_rspn_8_yn" source="quesRspn_8Yn" />
        <TextInput label="reff_no" source="reffNo" />
        <TextInput label="rstc_mtr_cn" source="rstcMtrCn" />
        <TextInput label="selr_no" source="selrNo" />
      </SimpleForm>
    </Create>
  );
};
