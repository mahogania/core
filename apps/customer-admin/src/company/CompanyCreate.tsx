import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CompanyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="abbr" source="abbr" />
        <TextInput
          label="accumulated_depreciation_account"
          source="accumulatedDepreciationAccount"
        />
        <NumberInput
          step={1}
          label="allow_account_creation_against_child_company"
          source="allowAccountCreationAgainstChildCompany"
        />
        <TextInput
          label="asset_received_but_not_billed"
          source="assetReceivedButNotBilled"
        />
        <TextInput label="auto_err_frequency" source="autoErrFrequency" />
        <NumberInput
          step={1}
          label="auto_exchange_rate_revaluation"
          source="autoExchangeRateRevaluation"
        />
        <NumberInput
          step={1}
          label="book_advance_payments_in_separate_party_account"
          source="bookAdvancePaymentsInSeparatePartyAccount"
        />
        <TextInput
          label="capital_work_in_progress_account"
          source="capitalWorkInProgressAccount"
        />
        <TextInput label="chart_of_accounts" source="chartOfAccounts" />
        <TextInput
          label="company_description"
          multiline
          source="companyDescription"
        />
        <TextInput label="company_logo" multiline source="companyLogo" />
        <TextInput label="company_name" source="companyName" />
        <TextInput label="cost_center" source="costCenter" />
        <TextInput label="country" source="country" />
        <TextInput
          label="create_chart_of_accounts_based_on"
          source="createChartOfAccountsBasedOn"
        />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="credit_limit" source="creditLimit" />
        <DateTimeInput
          label="date_of_commencement"
          source="dateOfCommencement"
        />
        <DateTimeInput
          label="date_of_establishment"
          source="dateOfEstablishment"
        />
        <DateTimeInput
          label="date_of_incorporation"
          source="dateOfIncorporation"
        />
        <TextInput
          label="default_advance_paid_account"
          source="defaultAdvancePaidAccount"
        />
        <TextInput
          label="default_advance_received_account"
          source="defaultAdvanceReceivedAccount"
        />
        <TextInput label="default_bank_account" source="defaultBankAccount" />
        <TextInput label="default_buying_terms" source="defaultBuyingTerms" />
        <TextInput label="default_cash_account" source="defaultCashAccount" />
        <TextInput label="default_currency" source="defaultCurrency" />
        <TextInput
          label="default_deferred_expense_account"
          source="defaultDeferredExpenseAccount"
        />
        <TextInput
          label="default_deferred_revenue_account"
          source="defaultDeferredRevenueAccount"
        />
        <TextInput
          label="default_discount_account"
          source="defaultDiscountAccount"
        />
        <TextInput
          label="default_expense_account"
          source="defaultExpenseAccount"
        />
        <TextInput label="default_finance_book" source="defaultFinanceBook" />
        <TextInput label="default_holiday_list" source="defaultHolidayList" />
        <TextInput
          label="default_in_transit_warehouse"
          source="defaultInTransitWarehouse"
        />
        <TextInput
          label="default_income_account"
          source="defaultIncomeAccount"
        />
        <TextInput
          label="default_inventory_account"
          source="defaultInventoryAccount"
        />
        <TextInput label="default_letter_head" source="defaultLetterHead" />
        <TextInput
          label="default_operating_cost_account"
          source="defaultOperatingCostAccount"
        />
        <TextInput
          label="default_payable_account"
          source="defaultPayableAccount"
        />
        <TextInput
          label="default_provisional_account"
          source="defaultProvisionalAccount"
        />
        <TextInput
          label="default_receivable_account"
          source="defaultReceivableAccount"
        />
        <TextInput label="default_selling_terms" source="defaultSellingTerms" />
        <TextInput
          label="default_warehouse_for_sales_return"
          source="defaultWarehouseForSalesReturn"
        />
        <TextInput
          label="depreciation_cost_center"
          source="depreciationCostCenter"
        />
        <TextInput
          label="depreciation_expense_account"
          source="depreciationExpenseAccount"
        />
        <TextInput label="disposal_account" source="disposalAccount" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="domain" source="domain" />
        <TextInput label="email" source="email" />
        <NumberInput
          step={1}
          label="enable_perpetual_inventory"
          source="enablePerpetualInventory"
        />
        <NumberInput
          step={1}
          label="enable_provisional_accounting_for_non_stock_items"
          source="enableProvisionalAccountingForNonStockItems"
        />
        <TextInput
          label="exception_budget_approver_role"
          source="exceptionBudgetApproverRole"
        />
        <TextInput
          label="exchange_gain_loss_account"
          source="exchangeGainLossAccount"
        />
        <TextInput label="existing_company" source="existingCompany" />
        <TextInput
          label="expenses_included_in_asset_valuation"
          source="expensesIncludedInAssetValuation"
        />
        <TextInput
          label="expenses_included_in_valuation"
          source="expensesIncludedInValuation"
        />
        <TextInput label="fax" source="fax" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="is_group" source="isGroup" />
        <NumberInput step={1} label="lft" source="lft" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <NumberInput label="monthly_sales_target" source="monthlySalesTarget" />
        <TextInput label="old_parent" source="oldParent" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent_company" source="parentCompany" />
        <TextInput label="payment_terms" source="paymentTerms" />
        <TextInput label="phone_no" source="phoneNo" />
        <NumberInput
          step={1}
          label="reconcile_on_advance_payment_date"
          source="reconcileOnAdvancePaymentDate"
        />
        <TextInput
          label="registration_details"
          multiline
          source="registrationDetails"
        />
        <NumberInput step={1} label="rgt" source="rgt" />
        <TextInput label="round_off_account" source="roundOffAccount" />
        <TextInput label="round_off_cost_center" source="roundOffCostCenter" />
        <TextInput
          label="sales_monthly_history"
          multiline
          source="salesMonthlyHistory"
        />
        <TextInput
          label="series_for_depreciation_entry"
          source="seriesForDepreciationEntry"
        />
        <TextInput
          label="stock_adjustment_account"
          source="stockAdjustmentAccount"
        />
        <TextInput
          label="stock_received_but_not_billed"
          source="stockReceivedButNotBilled"
        />
        <NumberInput step={1} label="submit_err_jv" source="submitErrJv" />
        <TextInput label="tax_id" source="taxId" />
        <NumberInput label="total_monthly_sales" source="totalMonthlySales" />
        <TextInput
          label="transactions_annual_history"
          multiline
          source="transactionsAnnualHistory"
        />
        <TextInput
          label="unrealized_exchange_gain_loss_account"
          source="unrealizedExchangeGainLossAccount"
        />
        <TextInput
          label="unrealized_profit_loss_account"
          source="unrealizedProfitLossAccount"
        />
        <TextInput label="website" source="website" />
        <TextInput label="write_off_account" source="writeOffAccount" />
      </SimpleForm>
    </Create>
  );
};
