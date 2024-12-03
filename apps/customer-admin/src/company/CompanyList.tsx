import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CompanyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Companies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="abbr" source="abbr" />
        <TextField
          label="accumulated_depreciation_account"
          source="accumulatedDepreciationAccount"
        />
        <TextField
          label="allow_account_creation_against_child_company"
          source="allowAccountCreationAgainstChildCompany"
        />
        <TextField
          label="asset_received_but_not_billed"
          source="assetReceivedButNotBilled"
        />
        <TextField label="auto_err_frequency" source="autoErrFrequency" />
        <TextField
          label="auto_exchange_rate_revaluation"
          source="autoExchangeRateRevaluation"
        />
        <TextField
          label="book_advance_payments_in_separate_party_account"
          source="bookAdvancePaymentsInSeparatePartyAccount"
        />
        <TextField
          label="capital_work_in_progress_account"
          source="capitalWorkInProgressAccount"
        />
        <TextField label="chart_of_accounts" source="chartOfAccounts" />
        <TextField label="company_description" source="companyDescription" />
        <TextField label="company_logo" source="companyLogo" />
        <TextField label="company_name" source="companyName" />
        <TextField label="cost_center" source="costCenter" />
        <TextField label="country" source="country" />
        <TextField
          label="create_chart_of_accounts_based_on"
          source="createChartOfAccountsBasedOn"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="credit_limit" source="creditLimit" />
        <TextField label="date_of_commencement" source="dateOfCommencement" />
        <TextField label="date_of_establishment" source="dateOfEstablishment" />
        <TextField label="date_of_incorporation" source="dateOfIncorporation" />
        <TextField
          label="default_advance_paid_account"
          source="defaultAdvancePaidAccount"
        />
        <TextField
          label="default_advance_received_account"
          source="defaultAdvanceReceivedAccount"
        />
        <TextField label="default_bank_account" source="defaultBankAccount" />
        <TextField label="default_buying_terms" source="defaultBuyingTerms" />
        <TextField label="default_cash_account" source="defaultCashAccount" />
        <TextField label="default_currency" source="defaultCurrency" />
        <TextField
          label="default_deferred_expense_account"
          source="defaultDeferredExpenseAccount"
        />
        <TextField
          label="default_deferred_revenue_account"
          source="defaultDeferredRevenueAccount"
        />
        <TextField
          label="default_discount_account"
          source="defaultDiscountAccount"
        />
        <TextField
          label="default_expense_account"
          source="defaultExpenseAccount"
        />
        <TextField label="default_finance_book" source="defaultFinanceBook" />
        <TextField label="default_holiday_list" source="defaultHolidayList" />
        <TextField
          label="default_in_transit_warehouse"
          source="defaultInTransitWarehouse"
        />
        <TextField
          label="default_income_account"
          source="defaultIncomeAccount"
        />
        <TextField
          label="default_inventory_account"
          source="defaultInventoryAccount"
        />
        <TextField label="default_letter_head" source="defaultLetterHead" />
        <TextField
          label="default_operating_cost_account"
          source="defaultOperatingCostAccount"
        />
        <TextField
          label="default_payable_account"
          source="defaultPayableAccount"
        />
        <TextField
          label="default_provisional_account"
          source="defaultProvisionalAccount"
        />
        <TextField
          label="default_receivable_account"
          source="defaultReceivableAccount"
        />
        <TextField label="default_selling_terms" source="defaultSellingTerms" />
        <TextField
          label="default_warehouse_for_sales_return"
          source="defaultWarehouseForSalesReturn"
        />
        <TextField
          label="depreciation_cost_center"
          source="depreciationCostCenter"
        />
        <TextField
          label="depreciation_expense_account"
          source="depreciationExpenseAccount"
        />
        <TextField label="disposal_account" source="disposalAccount" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="domain" source="domain" />
        <TextField label="email" source="email" />
        <TextField
          label="enable_perpetual_inventory"
          source="enablePerpetualInventory"
        />
        <TextField
          label="enable_provisional_accounting_for_non_stock_items"
          source="enableProvisionalAccountingForNonStockItems"
        />
        <TextField
          label="exception_budget_approver_role"
          source="exceptionBudgetApproverRole"
        />
        <TextField
          label="exchange_gain_loss_account"
          source="exchangeGainLossAccount"
        />
        <TextField label="existing_company" source="existingCompany" />
        <TextField
          label="expenses_included_in_asset_valuation"
          source="expensesIncludedInAssetValuation"
        />
        <TextField
          label="expenses_included_in_valuation"
          source="expensesIncludedInValuation"
        />
        <TextField label="fax" source="fax" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="is_group" source="isGroup" />
        <TextField label="lft" source="lft" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="monthly_sales_target" source="monthlySalesTarget" />
        <TextField label="old_parent" source="oldParent" />
        <TextField label="owner" source="owner" />
        <TextField label="parent_company" source="parentCompany" />
        <TextField label="payment_terms" source="paymentTerms" />
        <TextField label="phone_no" source="phoneNo" />
        <TextField
          label="reconcile_on_advance_payment_date"
          source="reconcileOnAdvancePaymentDate"
        />
        <TextField label="registration_details" source="registrationDetails" />
        <TextField label="rgt" source="rgt" />
        <TextField label="round_off_account" source="roundOffAccount" />
        <TextField label="round_off_cost_center" source="roundOffCostCenter" />
        <TextField label="sales_monthly_history" source="salesMonthlyHistory" />
        <TextField
          label="series_for_depreciation_entry"
          source="seriesForDepreciationEntry"
        />
        <TextField
          label="stock_adjustment_account"
          source="stockAdjustmentAccount"
        />
        <TextField
          label="stock_received_but_not_billed"
          source="stockReceivedButNotBilled"
        />
        <TextField label="submit_err_jv" source="submitErrJv" />
        <TextField label="tax_id" source="taxId" />
        <TextField label="total_monthly_sales" source="totalMonthlySales" />
        <TextField
          label="transactions_annual_history"
          source="transactionsAnnualHistory"
        />
        <TextField
          label="unrealized_exchange_gain_loss_account"
          source="unrealizedExchangeGainLossAccount"
        />
        <TextField
          label="unrealized_profit_loss_account"
          source="unrealizedProfitLossAccount"
        />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="website" source="website" />
        <TextField label="write_off_account" source="writeOffAccount" />{" "}
      </Datagrid>
    </List>
  );
};
