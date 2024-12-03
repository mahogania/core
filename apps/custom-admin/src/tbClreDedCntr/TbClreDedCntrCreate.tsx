import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const TbClreDedCntrCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cntr_no" source="cntrNo" />
        <NumberInput step={1} label="cntr_srno" source="cntrSrno" />
        <TextInput label="cntr_stfn_stts_cd" source="cntrStfnSttsCd" />
        <TextInput label="cntr_tp_cd" source="cntrTpCd" />
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <TextInput label="insc_trgt_yn" source="inscTrgtYn" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <NumberInput step={1} label="mdfy_dgcnt" source="mdfyDgcnt" />
        <TextInput label="reff_no" source="reffNo" />
        <TextInput label="seal_chpn1" source="sealChpn1" />
        <TextInput label="seal_chpn2" source="sealChpn2" />
        <TextInput label="seal_chpn3" source="sealChpn3" />
        <TextInput label="seal_chpn_cd" source="sealChpnCd" />
        <TextInput label="seal_no1" source="sealNo1" />
        <TextInput label="seal_no2" source="sealNo2" />
        <TextInput label="seal_no3" source="sealNo3" />
      </SimpleForm>
    </Create>
  );
};
