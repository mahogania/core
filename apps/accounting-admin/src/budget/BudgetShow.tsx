import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BudgetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="action_if_accumulated_monthly_budget_exceeded"
          source="actionIfAccumulatedMonthlyBudgetExceeded"
        />
        <TextField
          label="action_if_accumulated_monthly_budget_exceeded_on_mr"
          source="actionIfAccumulatedMonthlyBudgetExceededOnMr"
        />
        <TextField
          label="action_if_accumulated_monthly_budget_exceeded_on_po"
          source="actionIfAccumulatedMonthlyBudgetExceededOnPo"
        />
        <TextField
          label="action_if_annual_budget_exceeded"
          source="actionIfAnnualBudgetExceeded"
        />
        <TextField
          label="action_if_annual_budget_exceeded_on_mr"
          source="actionIfAnnualBudgetExceededOnMr"
        />
        <TextField
          label="action_if_annual_budget_exceeded_on_po"
          source="actionIfAnnualBudgetExceededOnPo"
        />
        <TextField label="amended_from" source="amendedFrom" />
        <TextField
          label="applicable_on_booking_actual_expenses"
          source="applicableOnBookingActualExpenses"
        />
        <TextField
          label="applicable_on_material_request"
          source="applicableOnMaterialRequest"
        />
        <TextField
          label="applicable_on_purchase_order"
          source="applicableOnPurchaseOrder"
        />
        <TextField label="budget_against" source="budgetAgainst" />
        <TextField label="company" source="company" />
        <TextField label="cost_center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="fiscal_year" source="fiscalYear" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="monthly_distribution" source="monthlyDistribution" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="project" source="project" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
