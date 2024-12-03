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
import { PaymentLedgerEntryController } from "../paymentLedgerEntry.controller";
import { PaymentLedgerEntryService } from "../paymentLedgerEntry.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  account: "exampleAccount",
  accountCurrency: "exampleAccountCurrency",
  accountType: "exampleAccountType",
  againstVoucherNo: "exampleAgainstVoucherNo",
  againstVoucherType: "exampleAgainstVoucherType",
  amount: 42.42,
  amountInAccountCurrency: 42.42,
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  delinked: 42,
  docstatus: 42,
  dueDate: new Date(),
  financeBook: "exampleFinanceBook",
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  postingDate: new Date(),
  remarks: "exampleRemarks",
  updatedAt: new Date(),
  voucherDetailNo: "exampleVoucherDetailNo",
  voucherNo: "exampleVoucherNo",
  voucherType: "exampleVoucherType",
};
const CREATE_RESULT = {
  account: "exampleAccount",
  accountCurrency: "exampleAccountCurrency",
  accountType: "exampleAccountType",
  againstVoucherNo: "exampleAgainstVoucherNo",
  againstVoucherType: "exampleAgainstVoucherType",
  amount: 42.42,
  amountInAccountCurrency: 42.42,
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  delinked: 42,
  docstatus: 42,
  dueDate: new Date(),
  financeBook: "exampleFinanceBook",
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  postingDate: new Date(),
  remarks: "exampleRemarks",
  updatedAt: new Date(),
  voucherDetailNo: "exampleVoucherDetailNo",
  voucherNo: "exampleVoucherNo",
  voucherType: "exampleVoucherType",
};
const FIND_MANY_RESULT = [
  {
    account: "exampleAccount",
    accountCurrency: "exampleAccountCurrency",
    accountType: "exampleAccountType",
    againstVoucherNo: "exampleAgainstVoucherNo",
    againstVoucherType: "exampleAgainstVoucherType",
    amount: 42.42,
    amountInAccountCurrency: 42.42,
    company: "exampleCompany",
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    delinked: 42,
    docstatus: 42,
    dueDate: new Date(),
    financeBook: "exampleFinanceBook",
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    party: "exampleParty",
    partyType: "examplePartyType",
    postingDate: new Date(),
    remarks: "exampleRemarks",
    updatedAt: new Date(),
    voucherDetailNo: "exampleVoucherDetailNo",
    voucherNo: "exampleVoucherNo",
    voucherType: "exampleVoucherType",
  },
];
const FIND_ONE_RESULT = {
  account: "exampleAccount",
  accountCurrency: "exampleAccountCurrency",
  accountType: "exampleAccountType",
  againstVoucherNo: "exampleAgainstVoucherNo",
  againstVoucherType: "exampleAgainstVoucherType",
  amount: 42.42,
  amountInAccountCurrency: 42.42,
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  delinked: 42,
  docstatus: 42,
  dueDate: new Date(),
  financeBook: "exampleFinanceBook",
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  postingDate: new Date(),
  remarks: "exampleRemarks",
  updatedAt: new Date(),
  voucherDetailNo: "exampleVoucherDetailNo",
  voucherNo: "exampleVoucherNo",
  voucherType: "exampleVoucherType",
};

const service = {
  createPaymentLedgerEntry() {
    return CREATE_RESULT;
  },
  paymentLedgerEntries: () => FIND_MANY_RESULT,
  paymentLedgerEntry: ({ where }: { where: { id: string } }) => {
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

describe("PaymentLedgerEntry", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PaymentLedgerEntryService,
          useValue: service,
        },
      ],
      controllers: [PaymentLedgerEntryController],
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

  test("POST /paymentLedgerEntries", async () => {
    await request(app.getHttpServer())
      .post("/paymentLedgerEntries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /paymentLedgerEntries", async () => {
    await request(app.getHttpServer())
      .get("/paymentLedgerEntries")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          dueDate: FIND_MANY_RESULT[0].dueDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          postingDate: FIND_MANY_RESULT[0].postingDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /paymentLedgerEntries/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentLedgerEntries"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /paymentLedgerEntries/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentLedgerEntries"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        dueDate: FIND_ONE_RESULT.dueDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        postingDate: FIND_ONE_RESULT.postingDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /paymentLedgerEntries existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/paymentLedgerEntries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/paymentLedgerEntries")
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
