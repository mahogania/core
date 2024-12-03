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
import { PaymentReconciliationController } from "../paymentReconciliation.controller";
import { PaymentReconciliationService } from "../paymentReconciliation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  bankCashAccount: "exampleBankCashAccount",
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  defaultAdvanceAccount: "exampleDefaultAdvanceAccount",
  docstatus: 42,
  errorLog: "exampleErrorLog",
  fromInvoiceDate: new Date(),
  fromPaymentDate: new Date(),
  id: "exampleId",
  idx: 42,
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  receivablePayableAccount: "exampleReceivablePayableAccount",
  status: "exampleStatus",
  toInvoiceDate: new Date(),
  toPaymentDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  bankCashAccount: "exampleBankCashAccount",
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  defaultAdvanceAccount: "exampleDefaultAdvanceAccount",
  docstatus: 42,
  errorLog: "exampleErrorLog",
  fromInvoiceDate: new Date(),
  fromPaymentDate: new Date(),
  id: "exampleId",
  idx: 42,
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  receivablePayableAccount: "exampleReceivablePayableAccount",
  status: "exampleStatus",
  toInvoiceDate: new Date(),
  toPaymentDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    bankCashAccount: "exampleBankCashAccount",
    company: "exampleCompany",
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    defaultAdvanceAccount: "exampleDefaultAdvanceAccount",
    docstatus: 42,
    errorLog: "exampleErrorLog",
    fromInvoiceDate: new Date(),
    fromPaymentDate: new Date(),
    id: "exampleId",
    idx: 42,
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    party: "exampleParty",
    partyType: "examplePartyType",
    receivablePayableAccount: "exampleReceivablePayableAccount",
    status: "exampleStatus",
    toInvoiceDate: new Date(),
    toPaymentDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  bankCashAccount: "exampleBankCashAccount",
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  defaultAdvanceAccount: "exampleDefaultAdvanceAccount",
  docstatus: 42,
  errorLog: "exampleErrorLog",
  fromInvoiceDate: new Date(),
  fromPaymentDate: new Date(),
  id: "exampleId",
  idx: 42,
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  receivablePayableAccount: "exampleReceivablePayableAccount",
  status: "exampleStatus",
  toInvoiceDate: new Date(),
  toPaymentDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createPaymentReconciliation() {
    return CREATE_RESULT;
  },
  paymentReconciliations: () => FIND_MANY_RESULT,
  paymentReconciliation: ({ where }: { where: { id: string } }) => {
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

describe("PaymentReconciliation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PaymentReconciliationService,
          useValue: service,
        },
      ],
      controllers: [PaymentReconciliationController],
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

  test("POST /paymentReconciliations", async () => {
    await request(app.getHttpServer())
      .post("/paymentReconciliations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fromInvoiceDate: CREATE_RESULT.fromInvoiceDate.toISOString(),
        fromPaymentDate: CREATE_RESULT.fromPaymentDate.toISOString(),
        toInvoiceDate: CREATE_RESULT.toInvoiceDate.toISOString(),
        toPaymentDate: CREATE_RESULT.toPaymentDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /paymentReconciliations", async () => {
    await request(app.getHttpServer())
      .get("/paymentReconciliations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          fromInvoiceDate: FIND_MANY_RESULT[0].fromInvoiceDate.toISOString(),
          fromPaymentDate: FIND_MANY_RESULT[0].fromPaymentDate.toISOString(),
          toInvoiceDate: FIND_MANY_RESULT[0].toInvoiceDate.toISOString(),
          toPaymentDate: FIND_MANY_RESULT[0].toPaymentDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /paymentReconciliations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentReconciliations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /paymentReconciliations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentReconciliations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        fromInvoiceDate: FIND_ONE_RESULT.fromInvoiceDate.toISOString(),
        fromPaymentDate: FIND_ONE_RESULT.fromPaymentDate.toISOString(),
        toInvoiceDate: FIND_ONE_RESULT.toInvoiceDate.toISOString(),
        toPaymentDate: FIND_ONE_RESULT.toPaymentDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /paymentReconciliations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/paymentReconciliations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fromInvoiceDate: CREATE_RESULT.fromInvoiceDate.toISOString(),
        fromPaymentDate: CREATE_RESULT.fromPaymentDate.toISOString(),
        toInvoiceDate: CREATE_RESULT.toInvoiceDate.toISOString(),
        toPaymentDate: CREATE_RESULT.toPaymentDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/paymentReconciliations")
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
