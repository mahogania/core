export type CompanyCreateInput = {
  abbr?: string | null;
  accumulatedDepreciationAccount?: string | null;
  allowAccountCreationAgainstChildCompany?: number | null;
  assetReceivedButNotBilled?: string | null;
  autoErrFrequency?: string | null;
  autoExchangeRateRevaluation?: number | null;
  bookAdvancePaymentsInSeparatePartyAccount?: number | null;
  capitalWorkInProgressAccount?: string | null;
  chartOfAccounts?: string | null;
  companyDescription?: string | null;
  companyLogo?: string | null;
  companyName?: string | null;
  costCenter?: string | null;
  country?: string | null;
  createChartOfAccountsBasedOn?: string | null;
  creation?: Date | null;
  creditLimit?: number | null;
  dateOfCommencement?: Date | null;
  dateOfEstablishment?: Date | null;
  dateOfIncorporation?: Date | null;
  defaultAdvancePaidAccount?: string | null;
  defaultAdvanceReceivedAccount?: string | null;
  defaultBankAccount?: string | null;
  defaultBuyingTerms?: string | null;
  defaultCashAccount?: string | null;
  defaultCurrency?: string | null;
  defaultDeferredExpenseAccount?: string | null;
  defaultDeferredRevenueAccount?: string | null;
  defaultDiscountAccount?: string | null;
  defaultExpenseAccount?: string | null;
  defaultFinanceBook?: string | null;
  defaultHolidayList?: string | null;
  defaultInTransitWarehouse?: string | null;
  defaultIncomeAccount?: string | null;
  defaultInventoryAccount?: string | null;
  defaultLetterHead?: string | null;
  defaultOperatingCostAccount?: string | null;
  defaultPayableAccount?: string | null;
  defaultProvisionalAccount?: string | null;
  defaultReceivableAccount?: string | null;
  defaultSellingTerms?: string | null;
  defaultWarehouseForSalesReturn?: string | null;
  depreciationCostCenter?: string | null;
  depreciationExpenseAccount?: string | null;
  disposalAccount?: string | null;
  docstatus?: number | null;
  domain?: string | null;
  email?: string | null;
  enablePerpetualInventory?: number | null;
  enableProvisionalAccountingForNonStockItems?: number | null;
  exceptionBudgetApproverRole?: string | null;
  exchangeGainLossAccount?: string | null;
  existingCompany?: string | null;
  expensesIncludedInAssetValuation?: string | null;
  expensesIncludedInValuation?: string | null;
  fax?: string | null;
  idx?: number | null;
  isGroup?: number | null;
  lft?: number | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  monthlySalesTarget?: number | null;
  oldParent?: string | null;
  owner?: string | null;
  parentCompany?: string | null;
  paymentTerms?: string | null;
  phoneNo?: string | null;
  reconcileOnAdvancePaymentDate?: number | null;
  registrationDetails?: string | null;
  rgt?: number | null;
  roundOffAccount?: string | null;
  roundOffCostCenter?: string | null;
  salesMonthlyHistory?: string | null;
  seriesForDepreciationEntry?: string | null;
  stockAdjustmentAccount?: string | null;
  stockReceivedButNotBilled?: string | null;
  submitErrJv?: number | null;
  taxId?: string | null;
  totalMonthlySales?: number | null;
  transactionsAnnualHistory?: string | null;
  unrealizedExchangeGainLossAccount?: string | null;
  unrealizedProfitLossAccount?: string | null;
  website?: string | null;
  writeOffAccount?: string | null;
};
