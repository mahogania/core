import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const CargoDeclarationTrailerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cag_mgmt_no" source="cagMgmtNo" />
        <TextInput label="chss_no" source="chssNo" />
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <TextInput label="mrn" source="mrn" />
        <NumberInput step={1} label="trlr_srno" source="trlrSrno" />
        <TextInput label="trlr_stsz" source="trlrStsz" />
        <TextInput label="vhcl_rgsr_no" source="vhclRgsrNo" />
      </SimpleForm>
    </Create>
  );
};
