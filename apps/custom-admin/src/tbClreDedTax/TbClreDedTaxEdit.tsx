import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TbClreDedTaxEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="bscs_tax_amt" source="bscsTaxAmt" />
        <NumberInput label="bscs_txbs_amt" source="bscsTxbsAmt" />
        <NumberInput label="bscs_txrt" source="bscsTxrt" />
        <TextInput label="del_yn" source="delYn" />
        <TextInput label="frst_regst_id" source="frstRegstId" />
        <DateTimeInput label="frst_rgsr_dttm" source="frstRgsrDttm" />
        <DateTimeInput label="last_chg_dttm" source="lastChgDttm" />
        <TextInput label="last_chpr_id" source="lastChprId" />
        <NumberInput step={1} label="mdfy_dgcnt" source="mdfyDgcnt" />
        <NumberInput label="mg_dscn_aply_amt" source="mgDscnAplyAmt" />
        <TextInput label="pay_knd_cd" source="payKndCd" />
        <NumberInput label="pay_tax_amt" source="payTaxAmt" />
        <TextInput label="pdls_no" source="pdlsNo" />
        <NumberInput label="rdex_amt" source="rdexAmt" />
        <NumberInput label="rdex_base_amt" source="rdexBaseAmt" />
        <TextInput label="rdex_cd" source="rdexCd" />
        <TextInput label="rdex_pt_cd" source="rdexPtCd" />
        <NumberInput label="rdex_txrt" source="rdexTxrt" />
        <TextInput label="reff_no" source="reffNo" />
        <NumberInput label="tax_amt" source="taxAmt" />
        <TextInput label="tax_cd" source="taxCd" />
        <TextInput label="tfrt_ctgy_cd" source="tfrtCtgyCd" />
        <NumberInput label="txbs_amt" source="txbsAmt" />
        <NumberInput label="txrt" source="txrt" />
      </SimpleForm>
    </Edit>
  );
};
