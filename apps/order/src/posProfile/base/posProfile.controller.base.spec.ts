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
import { PosProfileController } from "../posProfile.controller";
import { PosProfileService } from "../posProfile.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accountForChangeAmount: "exampleAccountForChangeAmount",
  allowDiscountChange: 42,
  allowRateChange: 42,
  applyDiscountOn: "exampleApplyDiscountOn",
  autoAddItemToCart: 42,
  campaign: "exampleCampaign",
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  costCenter: "exampleCostCenter",
  country: "exampleCountry",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customer: "exampleCustomer",
  disableRoundedTotal: 42,
  disabled: 42,
  docStatus: 42,
  expenseAccount: "exampleExpenseAccount",
  hideImages: 42,
  hideUnavailableItems: 42,
  id: "exampleId",
  idx: 42,
  ignorePricingRule: 42,
  incomeAccount: "exampleIncomeAccount",
  letterHead: "exampleLetterHead",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  printFormat: "examplePrintFormat",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  taxCategory: "exampleTaxCategory",
  taxesAndCharges: "exampleTaxesAndCharges",
  tcName: "exampleTcName",
  updateStock: 42,
  updatedAt: new Date(),
  validateStockOnSave: 42,
  warehouse: "exampleWarehouse",
  writeOffAccount: "exampleWriteOffAccount",
  writeOffCostCenter: "exampleWriteOffCostCenter",
  writeOffLimit: 42.42,
};
const CREATE_RESULT = {
  accountForChangeAmount: "exampleAccountForChangeAmount",
  allowDiscountChange: 42,
  allowRateChange: 42,
  applyDiscountOn: "exampleApplyDiscountOn",
  autoAddItemToCart: 42,
  campaign: "exampleCampaign",
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  costCenter: "exampleCostCenter",
  country: "exampleCountry",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customer: "exampleCustomer",
  disableRoundedTotal: 42,
  disabled: 42,
  docStatus: 42,
  expenseAccount: "exampleExpenseAccount",
  hideImages: 42,
  hideUnavailableItems: 42,
  id: "exampleId",
  idx: 42,
  ignorePricingRule: 42,
  incomeAccount: "exampleIncomeAccount",
  letterHead: "exampleLetterHead",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  printFormat: "examplePrintFormat",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  taxCategory: "exampleTaxCategory",
  taxesAndCharges: "exampleTaxesAndCharges",
  tcName: "exampleTcName",
  updateStock: 42,
  updatedAt: new Date(),
  validateStockOnSave: 42,
  warehouse: "exampleWarehouse",
  writeOffAccount: "exampleWriteOffAccount",
  writeOffCostCenter: "exampleWriteOffCostCenter",
  writeOffLimit: 42.42,
};
const FIND_MANY_RESULT = [
  {
    accountForChangeAmount: "exampleAccountForChangeAmount",
    allowDiscountChange: 42,
    allowRateChange: 42,
    applyDiscountOn: "exampleApplyDiscountOn",
    autoAddItemToCart: 42,
    campaign: "exampleCampaign",
    company: "exampleCompany",
    companyAddress: "exampleCompanyAddress",
    costCenter: "exampleCostCenter",
    country: "exampleCountry",
    createdAt: new Date(),
    creation: new Date(),
    currency: "exampleCurrency",
    customer: "exampleCustomer",
    disableRoundedTotal: 42,
    disabled: 42,
    docStatus: 42,
    expenseAccount: "exampleExpenseAccount",
    hideImages: 42,
    hideUnavailableItems: 42,
    id: "exampleId",
    idx: 42,
    ignorePricingRule: 42,
    incomeAccount: "exampleIncomeAccount",
    letterHead: "exampleLetterHead",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    printFormat: "examplePrintFormat",
    selectPrintHeading: "exampleSelectPrintHeading",
    sellingPriceList: "exampleSellingPriceList",
    taxCategory: "exampleTaxCategory",
    taxesAndCharges: "exampleTaxesAndCharges",
    tcName: "exampleTcName",
    updateStock: 42,
    updatedAt: new Date(),
    validateStockOnSave: 42,
    warehouse: "exampleWarehouse",
    writeOffAccount: "exampleWriteOffAccount",
    writeOffCostCenter: "exampleWriteOffCostCenter",
    writeOffLimit: 42.42,
  },
];
const FIND_ONE_RESULT = {
  accountForChangeAmount: "exampleAccountForChangeAmount",
  allowDiscountChange: 42,
  allowRateChange: 42,
  applyDiscountOn: "exampleApplyDiscountOn",
  autoAddItemToCart: 42,
  campaign: "exampleCampaign",
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  costCenter: "exampleCostCenter",
  country: "exampleCountry",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customer: "exampleCustomer",
  disableRoundedTotal: 42,
  disabled: 42,
  docStatus: 42,
  expenseAccount: "exampleExpenseAccount",
  hideImages: 42,
  hideUnavailableItems: 42,
  id: "exampleId",
  idx: 42,
  ignorePricingRule: 42,
  incomeAccount: "exampleIncomeAccount",
  letterHead: "exampleLetterHead",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  printFormat: "examplePrintFormat",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  taxCategory: "exampleTaxCategory",
  taxesAndCharges: "exampleTaxesAndCharges",
  tcName: "exampleTcName",
  updateStock: 42,
  updatedAt: new Date(),
  validateStockOnSave: 42,
  warehouse: "exampleWarehouse",
  writeOffAccount: "exampleWriteOffAccount",
  writeOffCostCenter: "exampleWriteOffCostCenter",
  writeOffLimit: 42.42,
};

const service = {
  createPosProfile() {
    return CREATE_RESULT;
  },
  posProfiles: () => FIND_MANY_RESULT,
  posProfile: ({ where }: { where: { id: string } }) => {
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

describe("PosProfile", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PosProfileService,
          useValue: service,
        },
      ],
      controllers: [PosProfileController],
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

  test("POST /posProfiles", async () => {
    await request(app.getHttpServer())
      .post("/posProfiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /posProfiles", async () => {
    await request(app.getHttpServer())
      .get("/posProfiles")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /posProfiles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/posProfiles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /posProfiles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/posProfiles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /posProfiles existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/posProfiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/posProfiles")
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
