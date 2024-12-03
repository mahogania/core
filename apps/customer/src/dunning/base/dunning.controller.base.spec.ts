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
import { DunningController } from "../dunning.controller";
import { DunningService } from "../dunning.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  addressDisplay: "exampleAddressDisplay",
  amendedFrom: "exampleAmendedFrom",
  baseDunningAmount: 42.42,
  bodyText: "exampleBodyText",
  closingText: "exampleClosingText",
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  conversionRate: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerName: "exampleCustomerName",
  docstatus: 42,
  dunningAmount: 42.42,
  dunningFee: 42.42,
  dunningType: "exampleDunningType",
  grandTotal: 42.42,
  id: "exampleId",
  idx: 42,
  incomeAccount: "exampleIncomeAccount",
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  postingDate: new Date(),
  postingTime: new Date(),
  rateOfInterest: 42.42,
  spacer: "exampleSpacer",
  status: "exampleStatus",
  totalInterest: 42.42,
  totalOutstanding: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  addressDisplay: "exampleAddressDisplay",
  amendedFrom: "exampleAmendedFrom",
  baseDunningAmount: 42.42,
  bodyText: "exampleBodyText",
  closingText: "exampleClosingText",
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  conversionRate: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerName: "exampleCustomerName",
  docstatus: 42,
  dunningAmount: 42.42,
  dunningFee: 42.42,
  dunningType: "exampleDunningType",
  grandTotal: 42.42,
  id: "exampleId",
  idx: 42,
  incomeAccount: "exampleIncomeAccount",
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  postingDate: new Date(),
  postingTime: new Date(),
  rateOfInterest: 42.42,
  spacer: "exampleSpacer",
  status: "exampleStatus",
  totalInterest: 42.42,
  totalOutstanding: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    addressDisplay: "exampleAddressDisplay",
    amendedFrom: "exampleAmendedFrom",
    baseDunningAmount: 42.42,
    bodyText: "exampleBodyText",
    closingText: "exampleClosingText",
    company: "exampleCompany",
    companyAddress: "exampleCompanyAddress",
    companyAddressDisplay: "exampleCompanyAddressDisplay",
    contactDisplay: "exampleContactDisplay",
    contactEmail: "exampleContactEmail",
    contactMobile: "exampleContactMobile",
    contactPerson: "exampleContactPerson",
    conversionRate: 42.42,
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    currency: "exampleCurrency",
    customer: "exampleCustomer",
    customerAddress: "exampleCustomerAddress",
    customerName: "exampleCustomerName",
    docstatus: 42,
    dunningAmount: 42.42,
    dunningFee: 42.42,
    dunningType: "exampleDunningType",
    grandTotal: 42.42,
    id: "exampleId",
    idx: 42,
    incomeAccount: "exampleIncomeAccount",
    language: "exampleLanguage",
    letterHead: "exampleLetterHead",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    owner: "exampleOwner",
    postingDate: new Date(),
    postingTime: new Date(),
    rateOfInterest: 42.42,
    spacer: "exampleSpacer",
    status: "exampleStatus",
    totalInterest: 42.42,
    totalOutstanding: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  addressDisplay: "exampleAddressDisplay",
  amendedFrom: "exampleAmendedFrom",
  baseDunningAmount: 42.42,
  bodyText: "exampleBodyText",
  closingText: "exampleClosingText",
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  conversionRate: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerName: "exampleCustomerName",
  docstatus: 42,
  dunningAmount: 42.42,
  dunningFee: 42.42,
  dunningType: "exampleDunningType",
  grandTotal: 42.42,
  id: "exampleId",
  idx: 42,
  incomeAccount: "exampleIncomeAccount",
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  postingDate: new Date(),
  postingTime: new Date(),
  rateOfInterest: 42.42,
  spacer: "exampleSpacer",
  status: "exampleStatus",
  totalInterest: 42.42,
  totalOutstanding: 42.42,
  updatedAt: new Date(),
};

const service = {
  createDunning() {
    return CREATE_RESULT;
  },
  dunnings: () => FIND_MANY_RESULT,
  dunning: ({ where }: { where: { id: string } }) => {
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

describe("Dunning", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DunningService,
          useValue: service,
        },
      ],
      controllers: [DunningController],
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

  test("POST /dunnings", async () => {
    await request(app.getHttpServer())
      .post("/dunnings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        postingTime: CREATE_RESULT.postingTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /dunnings", async () => {
    await request(app.getHttpServer())
      .get("/dunnings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          postingDate: FIND_MANY_RESULT[0].postingDate.toISOString(),
          postingTime: FIND_MANY_RESULT[0].postingTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /dunnings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dunnings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /dunnings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dunnings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        postingDate: FIND_ONE_RESULT.postingDate.toISOString(),
        postingTime: FIND_ONE_RESULT.postingTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /dunnings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/dunnings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        postingTime: CREATE_RESULT.postingTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/dunnings")
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
