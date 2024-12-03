import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ChequePrintTemplateEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          label="acc_no_dist_from_left_edge"
          source="accNoDistFromLeftEdge"
        />
        <NumberInput
          label="acc_no_dist_from_top_edge"
          source="accNoDistFromTopEdge"
        />
        <NumberInput
          label="acc_pay_dist_from_left_edge"
          source="accPayDistFromLeftEdge"
        />
        <NumberInput
          label="acc_pay_dist_from_top_edge"
          source="accPayDistFromTopEdge"
        />
        <NumberInput
          label="amt_in_figures_from_left_edge"
          source="amtInFiguresFromLeftEdge"
        />
        <NumberInput
          label="amt_in_figures_from_top_edge"
          source="amtInFiguresFromTopEdge"
        />
        <NumberInput label="amt_in_word_width" source="amtInWordWidth" />
        <NumberInput
          label="amt_in_words_from_left_edge"
          source="amtInWordsFromLeftEdge"
        />
        <NumberInput
          label="amt_in_words_from_top_edge"
          source="amtInWordsFromTopEdge"
        />
        <NumberInput
          label="amt_in_words_line_spacing"
          source="amtInWordsLineSpacing"
        />
        <TextInput label="bank_name" source="bankName" />
        <NumberInput label="cheque_height" source="chequeHeight" />
        <TextInput label="cheque_size" source="chequeSize" />
        <NumberInput label="cheque_width" source="chequeWidth" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput
          label="date_dist_from_left_edge"
          source="dateDistFromLeftEdge"
        />
        <NumberInput
          label="date_dist_from_top_edge"
          source="dateDistFromTopEdge"
        />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput
          step={1}
          label="has_print_format"
          source="hasPrintFormat"
        />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="is_account_payable"
          source="isAccountPayable"
        />
        <TextInput label="message_to_show" source="messageToShow" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="owner" source="owner" />
        <NumberInput
          label="payer_name_from_left_edge"
          source="payerNameFromLeftEdge"
        />
        <NumberInput
          label="payer_name_from_top_edge"
          source="payerNameFromTopEdge"
        />
        <TextInput label="scanned_cheque" multiline source="scannedCheque" />
        <NumberInput
          label="signatory_from_left_edge"
          source="signatoryFromLeftEdge"
        />
        <NumberInput
          label="signatory_from_top_edge"
          source="signatoryFromTopEdge"
        />
        <NumberInput
          label="starting_position_from_top_edge"
          source="startingPositionFromTopEdge"
        />
      </SimpleForm>
    </Edit>
  );
};
