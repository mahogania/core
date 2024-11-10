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
import { StatementOfAccountsController } from "../statementOfAccounts.controller";
import { StatementOfAccountsService } from "../statementOfAccounts.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  account: "exampleAccount",
  ageingBasedOn: "exampleAgeingBasedOn",
  basedOnPaymentTerms: 42,
  body: "exampleBody",
  ccTo: "exampleCcTo",
  collectionName: "exampleCollectionName",
  company: "exampleCompany",
  createdAt: new Date(),
  currency: "exampleCurrency",
  customerCollection: "exampleCustomerCollection",
  docstatus: 42,
  enableAutoEmail: 42,
  filterDuration: 42,
  financeBook: "exampleFinanceBook",
  frequency: "exampleFrequency",
  fromDate: new Date(),
  groupBy: "exampleGroupBy",
  id: "exampleId",
  idx: 42,
  ignoreCrDrNotes: 42,
  ignoreExchangeRateRevaluationJournals: 42,
  includeAgeing: 42,
  includeBreak: 42,
  letterHead: "exampleLetterHead",
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  orientation: "exampleOrientation",
  owner: "exampleOwner",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  pdfName: "examplePdfName",
  postingDate: new Date(),
  primaryMandatory: 42,
  report: "exampleReport",
  salesPartner: "exampleSalesPartner",
  salesPerson: "exampleSalesPerson",
  sender: "exampleSender",
  showNetValuesInPartyAccount: 42,
  startDate: new Date(),
  subject: "exampleSubject",
  termsAndConditions: "exampleTermsAndConditions",
  territory: "exampleTerritory",
  toDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  account: "exampleAccount",
  ageingBasedOn: "exampleAgeingBasedOn",
  basedOnPaymentTerms: 42,
  body: "exampleBody",
  ccTo: "exampleCcTo",
  collectionName: "exampleCollectionName",
  company: "exampleCompany",
  createdAt: new Date(),
  currency: "exampleCurrency",
  customerCollection: "exampleCustomerCollection",
  docstatus: 42,
  enableAutoEmail: 42,
  filterDuration: 42,
  financeBook: "exampleFinanceBook",
  frequency: "exampleFrequency",
  fromDate: new Date(),
  groupBy: "exampleGroupBy",
  id: "exampleId",
  idx: 42,
  ignoreCrDrNotes: 42,
  ignoreExchangeRateRevaluationJournals: 42,
  includeAgeing: 42,
  includeBreak: 42,
  letterHead: "exampleLetterHead",
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  orientation: "exampleOrientation",
  owner: "exampleOwner",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  pdfName: "examplePdfName",
  postingDate: new Date(),
  primaryMandatory: 42,
  report: "exampleReport",
  salesPartner: "exampleSalesPartner",
  salesPerson: "exampleSalesPerson",
  sender: "exampleSender",
  showNetValuesInPartyAccount: 42,
  startDate: new Date(),
  subject: "exampleSubject",
  termsAndConditions: "exampleTermsAndConditions",
  territory: "exampleTerritory",
  toDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    account: "exampleAccount",
    ageingBasedOn: "exampleAgeingBasedOn",
    basedOnPaymentTerms: 42,
    body: "exampleBody",
    ccTo: "exampleCcTo",
    collectionName: "exampleCollectionName",
    company: "exampleCompany",
    createdAt: new Date(),
    currency: "exampleCurrency",
    customerCollection: "exampleCustomerCollection",
    docstatus: 42,
    enableAutoEmail: 42,
    filterDuration: 42,
    financeBook: "exampleFinanceBook",
    frequency: "exampleFrequency",
    fromDate: new Date(),
    groupBy: "exampleGroupBy",
    id: "exampleId",
    idx: 42,
    ignoreCrDrNotes: 42,
    ignoreExchangeRateRevaluationJournals: 42,
    includeAgeing: 42,
    includeBreak: 42,
    letterHead: "exampleLetterHead",
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    orientation: "exampleOrientation",
    owner: "exampleOwner",
    paymentTermsTemplate: "examplePaymentTermsTemplate",
    pdfName: "examplePdfName",
    postingDate: new Date(),
    primaryMandatory: 42,
    report: "exampleReport",
    salesPartner: "exampleSalesPartner",
    salesPerson: "exampleSalesPerson",
    sender: "exampleSender",
    showNetValuesInPartyAccount: 42,
    startDate: new Date(),
    subject: "exampleSubject",
    termsAndConditions: "exampleTermsAndConditions",
    territory: "exampleTerritory",
    toDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  account: "exampleAccount",
  ageingBasedOn: "exampleAgeingBasedOn",
  basedOnPaymentTerms: 42,
  body: "exampleBody",
  ccTo: "exampleCcTo",
  collectionName: "exampleCollectionName",
  company: "exampleCompany",
  createdAt: new Date(),
  currency: "exampleCurrency",
  customerCollection: "exampleCustomerCollection",
  docstatus: 42,
  enableAutoEmail: 42,
  filterDuration: 42,
  financeBook: "exampleFinanceBook",
  frequency: "exampleFrequency",
  fromDate: new Date(),
  groupBy: "exampleGroupBy",
  id: "exampleId",
  idx: 42,
  ignoreCrDrNotes: 42,
  ignoreExchangeRateRevaluationJournals: 42,
  includeAgeing: 42,
  includeBreak: 42,
  letterHead: "exampleLetterHead",
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  orientation: "exampleOrientation",
  owner: "exampleOwner",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  pdfName: "examplePdfName",
  postingDate: new Date(),
  primaryMandatory: 42,
  report: "exampleReport",
  salesPartner: "exampleSalesPartner",
  salesPerson: "exampleSalesPerson",
  sender: "exampleSender",
  showNetValuesInPartyAccount: 42,
  startDate: new Date(),
  subject: "exampleSubject",
  termsAndConditions: "exampleTermsAndConditions",
  territory: "exampleTerritory",
  toDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createStatementOfAccounts() {
    return CREATE_RESULT;
  },
  statementOfAccountsItems: () => FIND_MANY_RESULT,
  statementOfAccounts: ({ where }: { where: { id: string } }) => {
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

describe("StatementOfAccounts", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StatementOfAccountsService,
          useValue: service,
        },
      ],
      controllers: [StatementOfAccountsController],
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

  test("POST /statementOfAccounts", async () => {
    await request(app.getHttpServer())
      .post("/statementOfAccounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /statementOfAccounts", async () => {
    await request(app.getHttpServer())
      .get("/statementOfAccounts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          fromDate: FIND_MANY_RESULT[0].fromDate.toISOString(),
          postingDate: FIND_MANY_RESULT[0].postingDate.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          toDate: FIND_MANY_RESULT[0].toDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /statementOfAccounts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/statementOfAccounts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /statementOfAccounts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/statementOfAccounts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        fromDate: FIND_ONE_RESULT.fromDate.toISOString(),
        postingDate: FIND_ONE_RESULT.postingDate.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        toDate: FIND_ONE_RESULT.toDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /statementOfAccounts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/statementOfAccounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/statementOfAccounts")
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
