import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CariCagDcshBlVhclCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cag_mgmt_no" source="cagMgmtNo" />
        <TextInput label="chss_no" source="chssNo" />
        <TextInput label="del_yn" source="delYn" />
        <NumberInput step={1} label="engn_clnd_gcnt" source="engnClndGcnt" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <TextInput label="mrn" source="mrn" />
        <TextInput label="vhcl_knd_nm" source="vhclKndNm" />
        <TextInput label="vhcl_mdl_cd" source="vhclMdlCd" />
        <TextInput label="vhcl_mnfc_yy" source="vhclMnfcYy" />
        <TextInput label="vhcl_mnur_cd" source="vhclMnurCd" />
        <TextInput label="vhcl_rgsr_no" source="vhclRgsrNo" />
        <NumberInput step={1} label="vhcl_srno" source="vhclSrno" />
        <NumberInput label="vhcl_totl_wght" source="vhclTotlWght" />
      </SimpleForm>
    </Create>
  );
};
