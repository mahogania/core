import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TbClreDedPrcDclrShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="adcst_brkg_amt" source="adcstBrkgAmt" />
        <TextField label="adcst_cnsm_cmdt_cst" source="adcstCnsmCmdtCst" />
        <TextField label="adcst_ctnr_pckg_cst" source="adcstCtnrPckgCst" />
        <TextField
          label="adcst_imp_port_infee_amt"
          source="adcstImpPortInfeeAmt"
        />
        <TextField label="adcst_imp_port_otcst" source="adcstImpPortOtcst" />
        <TextField
          label="adcst_imp_port_trcg_amt"
          source="adcstImpPortTrcgAmt"
        />
        <TextField
          label="adcst_mtrl_cmps_ftor_cst"
          source="adcstMtrlCmpsFtorCst"
        />
        <TextField label="adcst_prcs_cst" source="adcstPrcsCst" />
        <TextField label="adcst_puch_cmis_yn" source="adcstPuchCmisYn" />
        <TextField label="adcst_rylt_cst" source="adcstRyltCst" />
        <TextField label="adcst_sale_cmis_yn" source="adcstSaleCmisYn" />
        <TextField label="adcst_selr_rvrs_amt" source="adcstSelrRvrsAmt" />
        <TextField label="adcst_tech_dgn_otcst" source="adcstTechDgnOtcst" />
        <TextField label="adcst_tool_otcst" source="adcstToolOtcst" />
        <TextField label="adcst_trnp_cst" source="adcstTrnpCst" />
        <TextField label="adit_opin_cn" source="aditOpinCn" />
        <TextField label="adtn_cst_sum_amt" source="adtnCstSumAmt" />
        <TextField label="bfhn_dtrm_ofdc_no" source="bfhnDtrmOfdcNo" />
        <TextField label="bfhn_dtrm_ofdc_pbls_dt" source="bfhnDtrmOfdcPblsDt" />
        <TextField label="byer_idfy_no" source="byerIdfyNo" />
        <TextField label="cput_bss_dlng_prc" source="cputBssDlngPrc" />
        <TextField label="cput_bss_indr_amt" source="cputBssIndrAmt" />
        <TextField label="cput_bss_sum_amt" source="cputBssSumAmt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="cvnt_dt" source="cvntDt" />
        <TextField label="cvnt_no" source="cvntNo" />
        <TextField label="dcer_nm" source="dcerNm" />
        <TextField label="dclr_dt" source="dclrDt" />
        <TextField label="dclr_plc_nm" source="dclrPlcNm" />
        <TextField label="dclr_tx_prc" source="dclrTxPrc" />
        <TextField label="ddct_exp_cnty_trif_amt" source="ddctExpCntyTrifAmt" />
        <TextField label="ddct_otcst" source="ddctOtcst" />
        <TextField label="ddct_oths_apmt_amt" source="ddctOthsApmtAmt" />
        <TextField label="ddct_sum_amt" source="ddctSumAmt" />
        <TextField label="ddct_trnp_cst" source="ddctTrnpCst" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="dlvr_cond_cd" source="dlvrCondCd" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="ID" source="id" />
        <TextField label="invc_no" source="invcNo" />
        <TextField label="invc_pbls_dt" source="invcPblsDt" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextField label="oths_desc" source="othsDesc" />
        <TextField label="ques_rspn_1_yn" source="quesRspn_1Yn" />
        <TextField label="ques_rspn_2_yn" source="quesRspn_2Yn" />
        <TextField label="ques_rspn_3_yn" source="quesRspn_3Yn" />
        <TextField label="ques_rspn_4_yn" source="quesRspn_4Yn" />
        <TextField label="ques_rspn_5_yn" source="quesRspn_5Yn" />
        <TextField label="ques_rspn_6_yn" source="quesRspn_6Yn" />
        <TextField label="ques_rspn_7_yn" source="quesRspn_7Yn" />
        <TextField label="ques_rspn_8_yn" source="quesRspn_8Yn" />
        <TextField label="reff_no" source="reffNo" />
        <TextField label="rstc_mtr_cn" source="rstcMtrCn" />
        <TextField label="selr_no" source="selrNo" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
