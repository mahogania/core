import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const TbClreDedVhclEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="cabo_nm" source="caboNm" />
        <TextInput label="car_rgsr_no" source="carRgsrNo" />
        <TextInput label="chss_no" source="chssNo" />
        <TextInput label="clr_nm" source="clrNm" />
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="dpcmt_cn" source="dpcmtCn" />
        <TextInput label="drvr_addr" source="drvrAddr" />
        <TextInput label="drvr_nm" source="drvrNm" />
        <TextInput label="drvr_post_no" source="drvrPostNo" />
        <TextInput label="fl_knd_nm" source="flKndNm" />
        <TextInput label="frst_opra_dt" source="frstOpraDt" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextInput label="imp_pt_nm" source="impPtNm" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <TextInput label="load_wght_cn" source="loadWghtCn" />
        <NumberInput step={1} label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextInput label="mdl_stsz_no" source="mdlStszNo" />
        <TextInput label="mkng_yy" source="mkngYy" />
        <TextInput label="otpt_cn" source="otptCn" />
        <TextInput label="pdls_no" source="pdlsNo" />
        <TextInput label="reff_no" source="reffNo" />
        <NumberInput step={1} label="stcnt" source="stcnt" />
        <TextInput label="tpd_mgmt_no" source="tpdMgmtNo" />
        <TextInput label="trsf_nnpr_end_dt" source="trsfNnprEndDt" />
        <TextInput label="trsf_nnpr_strt_dt" source="trsfNnprStrtDt" />
        <TextInput label="trsf_nnpr_yn" source="trsfNnprYn" />
        <TextInput label="vhcl_knd_cd" source="vhclKndCd" />
        <TextInput label="vhcl_knd_nm" source="vhclKndNm" />
        <TextInput label="vhcl_mdl_cd" source="vhclMdlCd" />
        <TextInput label="vhcl_mnur_cd" source="vhclMnurCd" />
        <TextInput label="vhcl_rele_dt" source="vhclReleDt" />
        <TextInput label="vhcl_wght_cn" source="vhclWghtCn" />
      </SimpleForm>
    </Edit>
  );
};
