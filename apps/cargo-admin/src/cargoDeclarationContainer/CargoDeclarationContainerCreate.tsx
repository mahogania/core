import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CargoDeclarationContainerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cag_mgmt_no" source="cagMgmtNo" />
        <TextInput label="cntr_no" source="cntrNo" />
        <NumberInput step={1} label="cntr_srno" source="cntrSrno" />
        <TextInput label="cntr_tp_cd" source="cntrTpCd" />
        <TextInput label="del_yn" source="delYn" />
        <NumberInput label="ecntr_wght" source="ecntrWght" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <TextInput label="mrn" source="mrn" />
        <NumberInput step={1} label="pckg_gcnt" source="pckgGcnt" />
        <TextInput label="pckg_ut_cd" source="pckgUtCd" />
        <TextInput label="seal_chpn1" source="sealChpn1" />
        <TextInput label="seal_chpn2" source="sealChpn2" />
        <TextInput label="seal_chpn3" source="sealChpn3" />
        <TextInput label="seal_no1" source="sealNo1" />
        <TextInput label="seal_no2" source="sealNo2" />
        <TextInput label="seal_no3" source="sealNo3" />
        <NumberInput label="ttwg" source="ttwg" />
      </SimpleForm>
    </Create>
  );
};
