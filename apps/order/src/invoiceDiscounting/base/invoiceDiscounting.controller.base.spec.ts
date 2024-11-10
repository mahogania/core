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
import { InvoiceDiscountingController } from "../invoiceDiscounting.controller";
import { InvoiceDiscountingService } from "../invoiceDiscounting.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accountsReceivableCredit: "exampleAccountsReceivableCredit",
  accountsReceivableDiscounted: "exampleAccountsReceivableDiscounted",
  accountsReceivableUnpaid: "exampleAccountsReceivableUnpaid",
  amendedFrom: "exampleAmendedFrom",
  bankAccount: "exampleBankAccount",
  bankCharges: 42.42,
  bankChargesAccount: "exampleBankChargesAccount",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  loanEndDate: new Date(),
  loanPeriod: 42,
  loanStartDate: new Date(),
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  postingDate: new Date(),
  shortTermLoan: "exampleShortTermLoan",
  status: "exampleStatus",
  totalAmount: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  accountsReceivableCredit: "exampleAccountsReceivableCredit",
  accountsReceivableDiscounted: "exampleAccountsReceivableDiscounted",
  accountsReceivableUnpaid: "exampleAccountsReceivableUnpaid",
  amendedFrom: "exampleAmendedFrom",
  bankAccount: "exampleBankAccount",
  bankCharges: 42.42,
  bankChargesAccount: "exampleBankChargesAccount",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  loanEndDate: new Date(),
  loanPeriod: 42,
  loanStartDate: new Date(),
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  postingDate: new Date(),
  shortTermLoan: "exampleShortTermLoan",
  status: "exampleStatus",
  totalAmount: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    accountsReceivableCredit: "exampleAccountsReceivableCredit",
    accountsReceivableDiscounted: "exampleAccountsReceivableDiscounted",
    accountsReceivableUnpaid: "exampleAccountsReceivableUnpaid",
    amendedFrom: "exampleAmendedFrom",
    bankAccount: "exampleBankAccount",
    bankCharges: 42.42,
    bankChargesAccount: "exampleBankChargesAccount",
    company: "exampleCompany",
    createdAt: new Date(),
    creation: new Date(),
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    loanEndDate: new Date(),
    loanPeriod: 42,
    loanStartDate: new Date(),
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    postingDate: new Date(),
    shortTermLoan: "exampleShortTermLoan",
    status: "exampleStatus",
    totalAmount: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  accountsReceivableCredit: "exampleAccountsReceivableCredit",
  accountsReceivableDiscounted: "exampleAccountsReceivableDiscounted",
  accountsReceivableUnpaid: "exampleAccountsReceivableUnpaid",
  amendedFrom: "exampleAmendedFrom",
  bankAccount: "exampleBankAccount",
  bankCharges: 42.42,
  bankChargesAccount: "exampleBankChargesAccount",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  loanEndDate: new Date(),
  loanPeriod: 42,
  loanStartDate: new Date(),
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  postingDate: new Date(),
  shortTermLoan: "exampleShortTermLoan",
  status: "exampleStatus",
  totalAmount: 42.42,
  updatedAt: new Date(),
};

const service = {
  createInvoiceDiscounting() {
    return CREATE_RESULT;
  },
  invoiceDiscountings: () => FIND_MANY_RESULT,
  invoiceDiscounting: ({ where }: { where: { id: string } }) => {
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

describe("InvoiceDiscounting", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: InvoiceDiscountingService,
          useValue: service,
        },
      ],
      controllers: [InvoiceDiscountingController],
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

  test("POST /invoiceDiscountings", async () => {
    await request(app.getHttpServer())
      .post("/invoiceDiscountings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        loanEndDate: CREATE_RESULT.loanEndDate.toISOString(),
        loanStartDate: CREATE_RESULT.loanStartDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /invoiceDiscountings", async () => {
    await request(app.getHttpServer())
      .get("/invoiceDiscountings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          loanEndDate: FIND_MANY_RESULT[0].loanEndDate.toISOString(),
          loanStartDate: FIND_MANY_RESULT[0].loanStartDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          postingDate: FIND_MANY_RESULT[0].postingDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /invoiceDiscountings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/invoiceDiscountings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /invoiceDiscountings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/invoiceDiscountings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        loanEndDate: FIND_ONE_RESULT.loanEndDate.toISOString(),
        loanStartDate: FIND_ONE_RESULT.loanStartDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        postingDate: FIND_ONE_RESULT.postingDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /invoiceDiscountings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/invoiceDiscountings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        loanEndDate: CREATE_RESULT.loanEndDate.toISOString(),
        loanStartDate: CREATE_RESULT.loanStartDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/invoiceDiscountings")
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
