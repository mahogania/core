import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CompanyController } from "../company.controller";
import { CompanyService } from "../company.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  abbr: "exampleAbbr",
  accumulatedDepreciationAccount: "exampleAccumulatedDepreciationAccount",
  allowAccountCreationAgainstChildCompany: 42,
  assetReceivedButNotBilled: "exampleAssetReceivedButNotBilled",
  autoErrFrequency: "exampleAutoErrFrequency",
  autoExchangeRateRevaluation: 42,
  bookAdvancePaymentsInSeparatePartyAccount: 42,
  capitalWorkInProgressAccount: "exampleCapitalWorkInProgressAccount",
  chartOfAccounts: "exampleChartOfAccounts",
  companyDescription: "exampleCompanyDescription",
  companyLogo: "exampleCompanyLogo",
  companyName: "exampleCompanyName",
  costCenter: "exampleCostCenter",
  country: "exampleCountry",
  createChartOfAccountsBasedOn: "exampleCreateChartOfAccountsBasedOn",
  createdAt: new Date(),
  creation: new Date(),
  creditLimit: 42.42,
  dateOfCommencement: new Date(),
  dateOfEstablishment: new Date(),
  dateOfIncorporation: new Date(),
  defaultAdvancePaidAccount: "exampleDefaultAdvancePaidAccount",
  defaultAdvanceReceivedAccount: "exampleDefaultAdvanceReceivedAccount",
  defaultBankAccount: "exampleDefaultBankAccount",
  defaultBuyingTerms: "exampleDefaultBuyingTerms",
  defaultCashAccount: "exampleDefaultCashAccount",
  defaultCurrency: "exampleDefaultCurrency",
  defaultDeferredExpenseAccount: "exampleDefaultDeferredExpenseAccount",
  defaultDeferredRevenueAccount: "exampleDefaultDeferredRevenueAccount",
  defaultDiscountAccount: "exampleDefaultDiscountAccount",
  defaultExpenseAccount: "exampleDefaultExpenseAccount",
  defaultFinanceBook: "exampleDefaultFinanceBook",
  defaultHolidayList: "exampleDefaultHolidayList",
  defaultInTransitWarehouse: "exampleDefaultInTransitWarehouse",
  defaultIncomeAccount: "exampleDefaultIncomeAccount",
  defaultInventoryAccount: "exampleDefaultInventoryAccount",
  defaultLetterHead: "exampleDefaultLetterHead",
  defaultOperatingCostAccount: "exampleDefaultOperatingCostAccount",
  defaultPayableAccount: "exampleDefaultPayableAccount",
  defaultProvisionalAccount: "exampleDefaultProvisionalAccount",
  defaultReceivableAccount: "exampleDefaultReceivableAccount",
  defaultSellingTerms: "exampleDefaultSellingTerms",
  defaultWarehouseForSalesReturn: "exampleDefaultWarehouseForSalesReturn",
  depreciationCostCenter: "exampleDepreciationCostCenter",
  depreciationExpenseAccount: "exampleDepreciationExpenseAccount",
  disposalAccount: "exampleDisposalAccount",
  docstatus: 42,
  domain: "exampleDomain",
  email: "exampleEmail",
  enablePerpetualInventory: 42,
  enableProvisionalAccountingForNonStockItems: 42,
  exceptionBudgetApproverRole: "exampleExceptionBudgetApproverRole",
  exchangeGainLossAccount: "exampleExchangeGainLossAccount",
  existingCompany: "exampleExistingCompany",
  expensesIncludedInAssetValuation: "exampleExpensesIncludedInAssetValuation",
  expensesIncludedInValuation: "exampleExpensesIncludedInValuation",
  fax: "exampleFax",
  id: "exampleId",
  idx: 42,
  isGroup: 42,
  lft: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  monthlySalesTarget: 42.42,
  oldParent: "exampleOldParent",
  owner: "exampleOwner",
  parentCompany: "exampleParentCompany",
  paymentTerms: "examplePaymentTerms",
  phoneNo: "examplePhoneNo",
  reconcileOnAdvancePaymentDate: 42,
  registrationDetails: "exampleRegistrationDetails",
  rgt: 42,
  roundOffAccount: "exampleRoundOffAccount",
  roundOffCostCenter: "exampleRoundOffCostCenter",
  salesMonthlyHistory: "exampleSalesMonthlyHistory",
  seriesForDepreciationEntry: "exampleSeriesForDepreciationEntry",
  stockAdjustmentAccount: "exampleStockAdjustmentAccount",
  stockReceivedButNotBilled: "exampleStockReceivedButNotBilled",
  submitErrJv: 42,
  taxId: "exampleTaxId",
  totalMonthlySales: 42.42,
  transactionsAnnualHistory: "exampleTransactionsAnnualHistory",
  unrealizedExchangeGainLossAccount: "exampleUnrealizedExchangeGainLossAccount",
  unrealizedProfitLossAccount: "exampleUnrealizedProfitLossAccount",
  updatedAt: new Date(),
  website: "exampleWebsite",
  writeOffAccount: "exampleWriteOffAccount",
};
const CREATE_RESULT = {
  abbr: "exampleAbbr",
  accumulatedDepreciationAccount: "exampleAccumulatedDepreciationAccount",
  allowAccountCreationAgainstChildCompany: 42,
  assetReceivedButNotBilled: "exampleAssetReceivedButNotBilled",
  autoErrFrequency: "exampleAutoErrFrequency",
  autoExchangeRateRevaluation: 42,
  bookAdvancePaymentsInSeparatePartyAccount: 42,
  capitalWorkInProgressAccount: "exampleCapitalWorkInProgressAccount",
  chartOfAccounts: "exampleChartOfAccounts",
  companyDescription: "exampleCompanyDescription",
  companyLogo: "exampleCompanyLogo",
  companyName: "exampleCompanyName",
  costCenter: "exampleCostCenter",
  country: "exampleCountry",
  createChartOfAccountsBasedOn: "exampleCreateChartOfAccountsBasedOn",
  createdAt: new Date(),
  creation: new Date(),
  creditLimit: 42.42,
  dateOfCommencement: new Date(),
  dateOfEstablishment: new Date(),
  dateOfIncorporation: new Date(),
  defaultAdvancePaidAccount: "exampleDefaultAdvancePaidAccount",
  defaultAdvanceReceivedAccount: "exampleDefaultAdvanceReceivedAccount",
  defaultBankAccount: "exampleDefaultBankAccount",
  defaultBuyingTerms: "exampleDefaultBuyingTerms",
  defaultCashAccount: "exampleDefaultCashAccount",
  defaultCurrency: "exampleDefaultCurrency",
  defaultDeferredExpenseAccount: "exampleDefaultDeferredExpenseAccount",
  defaultDeferredRevenueAccount: "exampleDefaultDeferredRevenueAccount",
  defaultDiscountAccount: "exampleDefaultDiscountAccount",
  defaultExpenseAccount: "exampleDefaultExpenseAccount",
  defaultFinanceBook: "exampleDefaultFinanceBook",
  defaultHolidayList: "exampleDefaultHolidayList",
  defaultInTransitWarehouse: "exampleDefaultInTransitWarehouse",
  defaultIncomeAccount: "exampleDefaultIncomeAccount",
  defaultInventoryAccount: "exampleDefaultInventoryAccount",
  defaultLetterHead: "exampleDefaultLetterHead",
  defaultOperatingCostAccount: "exampleDefaultOperatingCostAccount",
  defaultPayableAccount: "exampleDefaultPayableAccount",
  defaultProvisionalAccount: "exampleDefaultProvisionalAccount",
  defaultReceivableAccount: "exampleDefaultReceivableAccount",
  defaultSellingTerms: "exampleDefaultSellingTerms",
  defaultWarehouseForSalesReturn: "exampleDefaultWarehouseForSalesReturn",
  depreciationCostCenter: "exampleDepreciationCostCenter",
  depreciationExpenseAccount: "exampleDepreciationExpenseAccount",
  disposalAccount: "exampleDisposalAccount",
  docstatus: 42,
  domain: "exampleDomain",
  email: "exampleEmail",
  enablePerpetualInventory: 42,
  enableProvisionalAccountingForNonStockItems: 42,
  exceptionBudgetApproverRole: "exampleExceptionBudgetApproverRole",
  exchangeGainLossAccount: "exampleExchangeGainLossAccount",
  existingCompany: "exampleExistingCompany",
  expensesIncludedInAssetValuation: "exampleExpensesIncludedInAssetValuation",
  expensesIncludedInValuation: "exampleExpensesIncludedInValuation",
  fax: "exampleFax",
  id: "exampleId",
  idx: 42,
  isGroup: 42,
  lft: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  monthlySalesTarget: 42.42,
  oldParent: "exampleOldParent",
  owner: "exampleOwner",
  parentCompany: "exampleParentCompany",
  paymentTerms: "examplePaymentTerms",
  phoneNo: "examplePhoneNo",
  reconcileOnAdvancePaymentDate: 42,
  registrationDetails: "exampleRegistrationDetails",
  rgt: 42,
  roundOffAccount: "exampleRoundOffAccount",
  roundOffCostCenter: "exampleRoundOffCostCenter",
  salesMonthlyHistory: "exampleSalesMonthlyHistory",
  seriesForDepreciationEntry: "exampleSeriesForDepreciationEntry",
  stockAdjustmentAccount: "exampleStockAdjustmentAccount",
  stockReceivedButNotBilled: "exampleStockReceivedButNotBilled",
  submitErrJv: 42,
  taxId: "exampleTaxId",
  totalMonthlySales: 42.42,
  transactionsAnnualHistory: "exampleTransactionsAnnualHistory",
  unrealizedExchangeGainLossAccount: "exampleUnrealizedExchangeGainLossAccount",
  unrealizedProfitLossAccount: "exampleUnrealizedProfitLossAccount",
  updatedAt: new Date(),
  website: "exampleWebsite",
  writeOffAccount: "exampleWriteOffAccount",
};
const FIND_MANY_RESULT = [
  {
    abbr: "exampleAbbr",
    accumulatedDepreciationAccount: "exampleAccumulatedDepreciationAccount",
    allowAccountCreationAgainstChildCompany: 42,
    assetReceivedButNotBilled: "exampleAssetReceivedButNotBilled",
    autoErrFrequency: "exampleAutoErrFrequency",
    autoExchangeRateRevaluation: 42,
    bookAdvancePaymentsInSeparatePartyAccount: 42,
    capitalWorkInProgressAccount: "exampleCapitalWorkInProgressAccount",
    chartOfAccounts: "exampleChartOfAccounts",
    companyDescription: "exampleCompanyDescription",
    companyLogo: "exampleCompanyLogo",
    companyName: "exampleCompanyName",
    costCenter: "exampleCostCenter",
    country: "exampleCountry",
    createChartOfAccountsBasedOn: "exampleCreateChartOfAccountsBasedOn",
    createdAt: new Date(),
    creation: new Date(),
    creditLimit: 42.42,
    dateOfCommencement: new Date(),
    dateOfEstablishment: new Date(),
    dateOfIncorporation: new Date(),
    defaultAdvancePaidAccount: "exampleDefaultAdvancePaidAccount",
    defaultAdvanceReceivedAccount: "exampleDefaultAdvanceReceivedAccount",
    defaultBankAccount: "exampleDefaultBankAccount",
    defaultBuyingTerms: "exampleDefaultBuyingTerms",
    defaultCashAccount: "exampleDefaultCashAccount",
    defaultCurrency: "exampleDefaultCurrency",
    defaultDeferredExpenseAccount: "exampleDefaultDeferredExpenseAccount",
    defaultDeferredRevenueAccount: "exampleDefaultDeferredRevenueAccount",
    defaultDiscountAccount: "exampleDefaultDiscountAccount",
    defaultExpenseAccount: "exampleDefaultExpenseAccount",
    defaultFinanceBook: "exampleDefaultFinanceBook",
    defaultHolidayList: "exampleDefaultHolidayList",
    defaultInTransitWarehouse: "exampleDefaultInTransitWarehouse",
    defaultIncomeAccount: "exampleDefaultIncomeAccount",
    defaultInventoryAccount: "exampleDefaultInventoryAccount",
    defaultLetterHead: "exampleDefaultLetterHead",
    defaultOperatingCostAccount: "exampleDefaultOperatingCostAccount",
    defaultPayableAccount: "exampleDefaultPayableAccount",
    defaultProvisionalAccount: "exampleDefaultProvisionalAccount",
    defaultReceivableAccount: "exampleDefaultReceivableAccount",
    defaultSellingTerms: "exampleDefaultSellingTerms",
    defaultWarehouseForSalesReturn: "exampleDefaultWarehouseForSalesReturn",
    depreciationCostCenter: "exampleDepreciationCostCenter",
    depreciationExpenseAccount: "exampleDepreciationExpenseAccount",
    disposalAccount: "exampleDisposalAccount",
    docstatus: 42,
    domain: "exampleDomain",
    email: "exampleEmail",
    enablePerpetualInventory: 42,
    enableProvisionalAccountingForNonStockItems: 42,
    exceptionBudgetApproverRole: "exampleExceptionBudgetApproverRole",
    exchangeGainLossAccount: "exampleExchangeGainLossAccount",
    existingCompany: "exampleExistingCompany",
    expensesIncludedInAssetValuation: "exampleExpensesIncludedInAssetValuation",
    expensesIncludedInValuation: "exampleExpensesIncludedInValuation",
    fax: "exampleFax",
    id: "exampleId",
    idx: 42,
    isGroup: 42,
    lft: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    monthlySalesTarget: 42.42,
    oldParent: "exampleOldParent",
    owner: "exampleOwner",
    parentCompany: "exampleParentCompany",
    paymentTerms: "examplePaymentTerms",
    phoneNo: "examplePhoneNo",
    reconcileOnAdvancePaymentDate: 42,
    registrationDetails: "exampleRegistrationDetails",
    rgt: 42,
    roundOffAccount: "exampleRoundOffAccount",
    roundOffCostCenter: "exampleRoundOffCostCenter",
    salesMonthlyHistory: "exampleSalesMonthlyHistory",
    seriesForDepreciationEntry: "exampleSeriesForDepreciationEntry",
    stockAdjustmentAccount: "exampleStockAdjustmentAccount",
    stockReceivedButNotBilled: "exampleStockReceivedButNotBilled",
    submitErrJv: 42,
    taxId: "exampleTaxId",
    totalMonthlySales: 42.42,
    transactionsAnnualHistory: "exampleTransactionsAnnualHistory",
    unrealizedExchangeGainLossAccount:
      "exampleUnrealizedExchangeGainLossAccount",
    unrealizedProfitLossAccount: "exampleUnrealizedProfitLossAccount",
    updatedAt: new Date(),
    website: "exampleWebsite",
    writeOffAccount: "exampleWriteOffAccount",
  },
];
const FIND_ONE_RESULT = {
  abbr: "exampleAbbr",
  accumulatedDepreciationAccount: "exampleAccumulatedDepreciationAccount",
  allowAccountCreationAgainstChildCompany: 42,
  assetReceivedButNotBilled: "exampleAssetReceivedButNotBilled",
  autoErrFrequency: "exampleAutoErrFrequency",
  autoExchangeRateRevaluation: 42,
  bookAdvancePaymentsInSeparatePartyAccount: 42,
  capitalWorkInProgressAccount: "exampleCapitalWorkInProgressAccount",
  chartOfAccounts: "exampleChartOfAccounts",
  companyDescription: "exampleCompanyDescription",
  companyLogo: "exampleCompanyLogo",
  companyName: "exampleCompanyName",
  costCenter: "exampleCostCenter",
  country: "exampleCountry",
  createChartOfAccountsBasedOn: "exampleCreateChartOfAccountsBasedOn",
  createdAt: new Date(),
  creation: new Date(),
  creditLimit: 42.42,
  dateOfCommencement: new Date(),
  dateOfEstablishment: new Date(),
  dateOfIncorporation: new Date(),
  defaultAdvancePaidAccount: "exampleDefaultAdvancePaidAccount",
  defaultAdvanceReceivedAccount: "exampleDefaultAdvanceReceivedAccount",
  defaultBankAccount: "exampleDefaultBankAccount",
  defaultBuyingTerms: "exampleDefaultBuyingTerms",
  defaultCashAccount: "exampleDefaultCashAccount",
  defaultCurrency: "exampleDefaultCurrency",
  defaultDeferredExpenseAccount: "exampleDefaultDeferredExpenseAccount",
  defaultDeferredRevenueAccount: "exampleDefaultDeferredRevenueAccount",
  defaultDiscountAccount: "exampleDefaultDiscountAccount",
  defaultExpenseAccount: "exampleDefaultExpenseAccount",
  defaultFinanceBook: "exampleDefaultFinanceBook",
  defaultHolidayList: "exampleDefaultHolidayList",
  defaultInTransitWarehouse: "exampleDefaultInTransitWarehouse",
  defaultIncomeAccount: "exampleDefaultIncomeAccount",
  defaultInventoryAccount: "exampleDefaultInventoryAccount",
  defaultLetterHead: "exampleDefaultLetterHead",
  defaultOperatingCostAccount: "exampleDefaultOperatingCostAccount",
  defaultPayableAccount: "exampleDefaultPayableAccount",
  defaultProvisionalAccount: "exampleDefaultProvisionalAccount",
  defaultReceivableAccount: "exampleDefaultReceivableAccount",
  defaultSellingTerms: "exampleDefaultSellingTerms",
  defaultWarehouseForSalesReturn: "exampleDefaultWarehouseForSalesReturn",
  depreciationCostCenter: "exampleDepreciationCostCenter",
  depreciationExpenseAccount: "exampleDepreciationExpenseAccount",
  disposalAccount: "exampleDisposalAccount",
  docstatus: 42,
  domain: "exampleDomain",
  email: "exampleEmail",
  enablePerpetualInventory: 42,
  enableProvisionalAccountingForNonStockItems: 42,
  exceptionBudgetApproverRole: "exampleExceptionBudgetApproverRole",
  exchangeGainLossAccount: "exampleExchangeGainLossAccount",
  existingCompany: "exampleExistingCompany",
  expensesIncludedInAssetValuation: "exampleExpensesIncludedInAssetValuation",
  expensesIncludedInValuation: "exampleExpensesIncludedInValuation",
  fax: "exampleFax",
  id: "exampleId",
  idx: 42,
  isGroup: 42,
  lft: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  monthlySalesTarget: 42.42,
  oldParent: "exampleOldParent",
  owner: "exampleOwner",
  parentCompany: "exampleParentCompany",
  paymentTerms: "examplePaymentTerms",
  phoneNo: "examplePhoneNo",
  reconcileOnAdvancePaymentDate: 42,
  registrationDetails: "exampleRegistrationDetails",
  rgt: 42,
  roundOffAccount: "exampleRoundOffAccount",
  roundOffCostCenter: "exampleRoundOffCostCenter",
  salesMonthlyHistory: "exampleSalesMonthlyHistory",
  seriesForDepreciationEntry: "exampleSeriesForDepreciationEntry",
  stockAdjustmentAccount: "exampleStockAdjustmentAccount",
  stockReceivedButNotBilled: "exampleStockReceivedButNotBilled",
  submitErrJv: 42,
  taxId: "exampleTaxId",
  totalMonthlySales: 42.42,
  transactionsAnnualHistory: "exampleTransactionsAnnualHistory",
  unrealizedExchangeGainLossAccount: "exampleUnrealizedExchangeGainLossAccount",
  unrealizedProfitLossAccount: "exampleUnrealizedProfitLossAccount",
  updatedAt: new Date(),
  website: "exampleWebsite",
  writeOffAccount: "exampleWriteOffAccount",
};

const service = {
  createCompany() {
    return CREATE_RESULT;
  },
  companies: () => FIND_MANY_RESULT,
  company: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Company", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CompanyService,
          useValue: service,
        },
      ],
      controllers: [CompanyController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /companies", async () => {
    await request(app.getHttpServer())
      .post("/companies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        dateOfCommencement: CREATE_RESULT.dateOfCommencement.toISOString(),
        dateOfEstablishment: CREATE_RESULT.dateOfEstablishment.toISOString(),
        dateOfIncorporation: CREATE_RESULT.dateOfIncorporation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /companies", async () => {
    await request(app.getHttpServer())
      .get("/companies")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          dateOfCommencement:
            FIND_MANY_RESULT[0].dateOfCommencement.toISOString(),
          dateOfEstablishment:
            FIND_MANY_RESULT[0].dateOfEstablishment.toISOString(),
          dateOfIncorporation:
            FIND_MANY_RESULT[0].dateOfIncorporation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /companies/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/companies"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /companies/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/companies"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        dateOfCommencement: FIND_ONE_RESULT.dateOfCommencement.toISOString(),
        dateOfEstablishment: FIND_ONE_RESULT.dateOfEstablishment.toISOString(),
        dateOfIncorporation: FIND_ONE_RESULT.dateOfIncorporation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /companies existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/companies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        dateOfCommencement: CREATE_RESULT.dateOfCommencement.toISOString(),
        dateOfEstablishment: CREATE_RESULT.dateOfEstablishment.toISOString(),
        dateOfIncorporation: CREATE_RESULT.dateOfIncorporation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/companies")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
