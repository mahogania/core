import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CargoDeclarationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="abrd_frwr_addr_nm" source="abrdFrwrAddrNm" />
        <TextField label="abrd_frwr_eml" source="abrdFrwrEml" />
        <TextField label="abrd_frwr_nm" source="abrdFrwrNm" />
        <TextField label="abrd_frwr_tlph_no" source="abrdFrwrTlphNo" />
        <TextField label="al_bl_gcnt" source="alBlGcnt" />
        <TextField label="al_cntr_gcnt" source="alCntrGcnt" />
        <TextField label="al_ecntr_cnt" source="alEcntrCnt" />
        <TextField label="al_hbl_gcnt" source="alHblGcnt" />
        <TextField label="al_ntwg" source="alNtwg" />
        <TextField label="al_pckg_gcnt" source="alPckgGcnt" />
        <TextField label="al_ttwg" source="alTtwg" />
        <TextField label="al_vhcl_gcnt" source="alVhclGcnt" />
        <TextField label="apre_yn_cd" source="apreYnCd" />
        <TextField label="arvl_dttm" source="arvlDttm" />
        <TextField label="atch_file_id" source="atchFileId" />
        <TextField label="audt_opin_cn" source="audtOpinCn" />
        <TextField label="bf_cag_mgmt_no" source="bfCagMgmtNo" />
        <TextField label="bl_mdfy_tp_cd" source="blMdfyTpCd" />
        <TextField label="bl_no" source="blNo" />
        <TextField label="bl_pbls_dt" source="blPblsDt" />
        <TextField label="bl_pt_cd" source="blPtCd" />
        <TextField label="bl_tp_cd" source="blTpCd" />
        <TextField label="cag_chrc_cd" source="cagChrcCd" />
        <TextField label="cag_dcsh_rgsr_mgmt_no" source="cagDcshRgsrMgmtNo" />
        <TextField label="cag_mgmt_no" source="cagMgmtNo" />
        <TextField label="cag_rqst_tp_cd" source="cagRqstTpCd" />
        <TextField label="cag_tp_cd" source="cagTpCd" />
        <TextField label="carr_addr_nm" source="carrAddrNm" />
        <TextField label="carr_cd" source="carrCd" />
        <TextField label="cas_no" source="casNo" />
        <TextField label="cbm_vol" source="cbmVol" />
        <TextField label="cher_addr_nm" source="cherAddrNm" />
        <TextField label="cher_gvnm_nm" source="cherGvnmNm" />
        <TextField label="cher_yn" source="cherYn" />
        <TextField label="cmdt_amt" source="cmdtAmt" />
        <TextField label="cmdt_amt_curr_cd" source="cmdtAmtCurrCd" />
        <TextField label="cmdt_knd_cd" source="cmdtKndCd" />
        <TextField label="cnsi_addr_nm" source="cnsiAddrNm" />
        <TextField label="cnsi_eml" source="cnsiEml" />
        <TextField label="cnsi_nm" source="cnsiNm" />
        <TextField label="cnsi_tlph_no" source="cnsiTlphNo" />
        <TextField label="cnsi_txpr_idfy_no" source="cnsiTxprIdfyNo" />
        <TextField label="cnsi_txpr_idfy_no_nin" source="cnsiTxprIdfyNoNin" />
        <TextField label="cntr_gcnt" source="cntrGcnt" />
        <TextField label="co_rqst_no" source="coRqstNo" />
        <TextField label="coat_trnp_yn" source="coatTrnpYn" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="del_yn" source="delYn" />
        <TextField label="dptr_dttm" source="dptrDttm" />
        <TextField label="dptr_port_cd" source="dptrPortCd" />
        <TextField label="drvr_nm" source="drvrNm" />
        <TextField label="ecntr_wght" source="ecntrWght" />
        <TextField label="eur_fxrt" source="eurFxrt" />
        <TextField label="exppn_addr_nm" source="exppnAddrNm" />
        <TextField label="exppn_eml" source="exppnEml" />
        <TextField label="exppn_nm" source="exppnNm" />
        <TextField label="exppn_tlph_no" source="exppnTlphNo" />
        <TextField label="exppn_txpr_idfy_no" source="exppnTxprIdfyNo" />
        <TextField label="exppn_txpr_idfy_no_nin" source="exppnTxprIdfyNoNin" />
        <TextField label="frst_regst_id" source="frstRegstId" />
        <TextField label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextField label="frwr_cd" source="frwrCd" />
        <TextField label="hbl_no" source="hblNo" />
        <TextField label="hdcb_tp_cd" source="hdcbTpCd" />
        <TextField label="hs_cd" source="hsCd" />
        <TextField label="hsn" source="hsn" />
        <TextField label="ibobz_cd" source="ibobzCd" />
        <TextField label="ID" source="id" />
        <TextField label="imo_no" source="imoNo" />
        <TextField label="jrsd_orgn_cd" source="jrsdOrgnCd" />
        <TextField label="last_chg_dttm" source="lastChgDttm" />
        <TextField label="last_chpr_id" source="lastChprId" />
        <TextField label="last_ldun_dt" source="lastLdunDt" />
        <TextField label="last_thrg_port_cd" source="lastThrgPortCd" />
        <TextField label="ldun_bl_gcnt" source="ldunBlGcnt" />
        <TextField label="ldun_port_cd" source="ldunPortCd" />
        <TextField label="ldun_regn_cd" source="ldunRegnCd" />
        <TextField label="ldun_yn" source="ldunYn" />
        <TextField label="lir_vol" source="lirVol" />
        <TextField label="load_regn_cd" source="loadRegnCd" />
        <TextField label="ltsp_yn" source="ltspYn" />
        <TextField label="mrn" source="mrn" />
        <TextField label="msg_prcs_stts_cd" source="msgPrcsSttsCd" />
        <TextField label="msn" source="msn" />
        <TextField label="ntpr_addr_nm" source="ntprAddrNm" />
        <TextField label="ntpr_eml" source="ntprEml" />
        <TextField label="ntpr_nm" source="ntprNm" />
        <TextField label="ntpr_tlph_no" source="ntprTlphNo" />
        <TextField label="ntwg" source="ntwg" />
        <TextField label="pckg_gcnt" source="pckgGcnt" />
        <TextField label="pckg_ut_cd" source="pckgUtCd" />
        <TextField label="pdls_nm" source="pdlsNm" />
        <TextField label="prpm_dfpm_cach_tp_cd" source="prpmDfpmCachTpCd" />
        <TextField label="real_arvl_dttm" source="realArvlDttm" />
        <TextField label="rmrk_cn" source="rmrkCn" />
        <TextField label="selc_trgt_yn" source="selcTrgtYn" />
        <TextField label="send_way" source="sendWay" />
        <TextField label="ship_nttn" source="shipNttn" />
        <TextField label="ship_ttn" source="shipTtn" />
        <TextField label="shmr_cn" source="shmrCn" />
        <TextField label="stvd_cd" source="stvdCd" />
        <TextField label="trnh_regn_cd" source="trnhRegnCd" />
        <TextField label="trnp_mean_cd" source="trnpMeanCd" />
        <TextField label="trnp_meth_idfy_no" source="trnpMethIdfyNo" />
        <TextField label="trnp_meth_loct_nm" source="trnpMethLoctNm" />
        <TextField label="trnp_meth_nat_cd" source="trnpMethNatCd" />
        <TextField label="trnp_meth_nm" source="trnpMethNm" />
        <TextField label="trnp_meth_rgsr_dt" source="trnpMethRgsrDt" />
        <TextField label="trnp_rfer_no" source="trnpRferNo" />
        <TextField label="trsn_co_cd" source="trsnCoCd" />
        <TextField label="trsn_dttm" source="trsnDttm" />
        <TextField label="ttwg" source="ttwg" />
        <TextField label="undg_gd_cd" source="undgGdCd" />
        <TextField label="undg_id" source="undgId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="usd_fxrt" source="usdFxrt" />
        <TextField label="vhcl_gcnt" source="vhclGcnt" />
      </SimpleShowLayout>
    </Show>
  );
};
