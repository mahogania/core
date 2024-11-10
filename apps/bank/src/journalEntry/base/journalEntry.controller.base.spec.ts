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
import { JournalEntryController } from "../journalEntry.controller";
import { JournalEntryService } from "../journalEntry.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  applyTds: 42,
  autoRepeat: "exampleAutoRepeat",
  billDate: new Date(),
  billNo: "exampleBillNo",
  chequeDate: new Date(),
  chequeNo: "exampleChequeNo",
  clearanceDate: new Date(),
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  difference: 42.42,
  docstatus: 42,
  dueDate: new Date(),
  financeBook: "exampleFinanceBook",
  fromTemplate: "exampleFromTemplate",
  id: "exampleId",
  idx: 42,
  interCompanyJournalEntryReference: "exampleInterCompanyJournalEntryReference",
  isOpening: "exampleIsOpening",
  isSystemGenerated: 42,
  letterHead: "exampleLetterHead",
  modeOfPayment: "exampleModeOfPayment",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  multiCurrency: 42,
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  paidLoan: "examplePaidLoan",
  payToRecdFrom: "examplePayToRecdFrom",
  paymentOrder: "examplePaymentOrder",
  postingDate: new Date(),
  processDeferredAccounting: "exampleProcessDeferredAccounting",
  remark: "exampleRemark",
  reversalOf: "exampleReversalOf",
  selectPrintHeading: "exampleSelectPrintHeading",
  stockEntry: "exampleStockEntry",
  taxWithholdingCategory: "exampleTaxWithholdingCategory",
  title: "exampleTitle",
  totalAmount: 42.42,
  totalAmountCurrency: "exampleTotalAmountCurrency",
  totalAmountInWords: "exampleTotalAmountInWords",
  totalCredit: 42.42,
  totalDebit: 42.42,
  updatedAt: new Date(),
  userRemark: "exampleUserRemark",
  voucherType: "exampleVoucherType",
  writeOffAmount: 42.42,
  writeOffBasedOn: "exampleWriteOffBasedOn",
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  applyTds: 42,
  autoRepeat: "exampleAutoRepeat",
  billDate: new Date(),
  billNo: "exampleBillNo",
  chequeDate: new Date(),
  chequeNo: "exampleChequeNo",
  clearanceDate: new Date(),
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  difference: 42.42,
  docstatus: 42,
  dueDate: new Date(),
  financeBook: "exampleFinanceBook",
  fromTemplate: "exampleFromTemplate",
  id: "exampleId",
  idx: 42,
  interCompanyJournalEntryReference: "exampleInterCompanyJournalEntryReference",
  isOpening: "exampleIsOpening",
  isSystemGenerated: 42,
  letterHead: "exampleLetterHead",
  modeOfPayment: "exampleModeOfPayment",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  multiCurrency: 42,
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  paidLoan: "examplePaidLoan",
  payToRecdFrom: "examplePayToRecdFrom",
  paymentOrder: "examplePaymentOrder",
  postingDate: new Date(),
  processDeferredAccounting: "exampleProcessDeferredAccounting",
  remark: "exampleRemark",
  reversalOf: "exampleReversalOf",
  selectPrintHeading: "exampleSelectPrintHeading",
  stockEntry: "exampleStockEntry",
  taxWithholdingCategory: "exampleTaxWithholdingCategory",
  title: "exampleTitle",
  totalAmount: 42.42,
  totalAmountCurrency: "exampleTotalAmountCurrency",
  totalAmountInWords: "exampleTotalAmountInWords",
  totalCredit: 42.42,
  totalDebit: 42.42,
  updatedAt: new Date(),
  userRemark: "exampleUserRemark",
  voucherType: "exampleVoucherType",
  writeOffAmount: 42.42,
  writeOffBasedOn: "exampleWriteOffBasedOn",
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    applyTds: 42,
    autoRepeat: "exampleAutoRepeat",
    billDate: new Date(),
    billNo: "exampleBillNo",
    chequeDate: new Date(),
    chequeNo: "exampleChequeNo",
    clearanceDate: new Date(),
    company: "exampleCompany",
    createdAt: new Date(),
    creation: new Date(),
    difference: 42.42,
    docstatus: 42,
    dueDate: new Date(),
    financeBook: "exampleFinanceBook",
    fromTemplate: "exampleFromTemplate",
    id: "exampleId",
    idx: 42,
    interCompanyJournalEntryReference:
      "exampleInterCompanyJournalEntryReference",
    isOpening: "exampleIsOpening",
    isSystemGenerated: 42,
    letterHead: "exampleLetterHead",
    modeOfPayment: "exampleModeOfPayment",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    multiCurrency: 42,
    namingSeries: "exampleNamingSeries",
    owner: "exampleOwner",
    paidLoan: "examplePaidLoan",
    payToRecdFrom: "examplePayToRecdFrom",
    paymentOrder: "examplePaymentOrder",
    postingDate: new Date(),
    processDeferredAccounting: "exampleProcessDeferredAccounting",
    remark: "exampleRemark",
    reversalOf: "exampleReversalOf",
    selectPrintHeading: "exampleSelectPrintHeading",
    stockEntry: "exampleStockEntry",
    taxWithholdingCategory: "exampleTaxWithholdingCategory",
    title: "exampleTitle",
    totalAmount: 42.42,
    totalAmountCurrency: "exampleTotalAmountCurrency",
    totalAmountInWords: "exampleTotalAmountInWords",
    totalCredit: 42.42,
    totalDebit: 42.42,
    updatedAt: new Date(),
    userRemark: "exampleUserRemark",
    voucherType: "exampleVoucherType",
    writeOffAmount: 42.42,
    writeOffBasedOn: "exampleWriteOffBasedOn",
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  applyTds: 42,
  autoRepeat: "exampleAutoRepeat",
  billDate: new Date(),
  billNo: "exampleBillNo",
  chequeDate: new Date(),
  chequeNo: "exampleChequeNo",
  clearanceDate: new Date(),
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  difference: 42.42,
  docstatus: 42,
  dueDate: new Date(),
  financeBook: "exampleFinanceBook",
  fromTemplate: "exampleFromTemplate",
  id: "exampleId",
  idx: 42,
  interCompanyJournalEntryReference: "exampleInterCompanyJournalEntryReference",
  isOpening: "exampleIsOpening",
  isSystemGenerated: 42,
  letterHead: "exampleLetterHead",
  modeOfPayment: "exampleModeOfPayment",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  multiCurrency: 42,
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  paidLoan: "examplePaidLoan",
  payToRecdFrom: "examplePayToRecdFrom",
  paymentOrder: "examplePaymentOrder",
  postingDate: new Date(),
  processDeferredAccounting: "exampleProcessDeferredAccounting",
  remark: "exampleRemark",
  reversalOf: "exampleReversalOf",
  selectPrintHeading: "exampleSelectPrintHeading",
  stockEntry: "exampleStockEntry",
  taxWithholdingCategory: "exampleTaxWithholdingCategory",
  title: "exampleTitle",
  totalAmount: 42.42,
  totalAmountCurrency: "exampleTotalAmountCurrency",
  totalAmountInWords: "exampleTotalAmountInWords",
  totalCredit: 42.42,
  totalDebit: 42.42,
  updatedAt: new Date(),
  userRemark: "exampleUserRemark",
  voucherType: "exampleVoucherType",
  writeOffAmount: 42.42,
  writeOffBasedOn: "exampleWriteOffBasedOn",
};

const service = {
  createJournalEntry() {
    return CREATE_RESULT;
  },
  journalEntries: () => FIND_MANY_RESULT,
  journalEntry: ({ where }: { where: { id: string } }) => {
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

describe("JournalEntry", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: JournalEntryService,
          useValue: service,
        },
      ],
      controllers: [JournalEntryController],
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

  test("POST /journalEntries", async () => {
    await request(app.getHttpServer())
      .post("/journalEntries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        billDate: CREATE_RESULT.billDate.toISOString(),
        chequeDate: CREATE_RESULT.chequeDate.toISOString(),
        clearanceDate: CREATE_RESULT.clearanceDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /journalEntries", async () => {
    await request(app.getHttpServer())
      .get("/journalEntries")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          billDate: FIND_MANY_RESULT[0].billDate.toISOString(),
          chequeDate: FIND_MANY_RESULT[0].chequeDate.toISOString(),
          clearanceDate: FIND_MANY_RESULT[0].clearanceDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          dueDate: FIND_MANY_RESULT[0].dueDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          postingDate: FIND_MANY_RESULT[0].postingDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /journalEntries/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/journalEntries"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /journalEntries/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/journalEntries"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        billDate: FIND_ONE_RESULT.billDate.toISOString(),
        chequeDate: FIND_ONE_RESULT.chequeDate.toISOString(),
        clearanceDate: FIND_ONE_RESULT.clearanceDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        dueDate: FIND_ONE_RESULT.dueDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        postingDate: FIND_ONE_RESULT.postingDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /journalEntries existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/journalEntries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        billDate: CREATE_RESULT.billDate.toISOString(),
        chequeDate: CREATE_RESULT.chequeDate.toISOString(),
        clearanceDate: CREATE_RESULT.clearanceDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/journalEntries")
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
