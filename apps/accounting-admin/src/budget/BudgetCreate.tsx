import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const BudgetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="action_if_accumulated_monthly_budget_exceeded"
          source="actionIfAccumulatedMonthlyBudgetExceeded"
        />
        <TextInput
          label="action_if_accumulated_monthly_budget_exceeded_on_mr"
          source="actionIfAccumulatedMonthlyBudgetExceededOnMr"
        />
        <TextInput
          label="action_if_accumulated_monthly_budget_exceeded_on_po"
          source="actionIfAccumulatedMonthlyBudgetExceededOnPo"
        />
        <TextInput
          label="action_if_annual_budget_exceeded"
          source="actionIfAnnualBudgetExceeded"
        />
        <TextInput
          label="action_if_annual_budget_exceeded_on_mr"
          source="actionIfAnnualBudgetExceededOnMr"
        />
        <TextInput
          label="action_if_annual_budget_exceeded_on_po"
          source="actionIfAnnualBudgetExceededOnPo"
        />
        <TextInput label="amended_from" source="amendedFrom" />
        <NumberInput
          step={1}
          label="applicable_on_booking_actual_expenses"
          source="applicableOnBookingActualExpenses"
        />
        <NumberInput
          step={1}
          label="applicable_on_material_request"
          source="applicableOnMaterialRequest"
        />
        <NumberInput
          step={1}
          label="applicable_on_purchase_order"
          source="applicableOnPurchaseOrder"
        />
        <TextInput label="budget_against" source="budgetAgainst" />
        <TextInput label="company" source="company" />
        <TextInput label="cost_center" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="fiscal_year" source="fiscalYear" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="monthly_distribution" source="monthlyDistribution" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <TextInput label="project" source="project" />
      </SimpleForm>
    </Create>
  );
};
