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
import { TbClreDedTaxController } from "../tbClreDedTax.controller";
import { TbClreDedTaxService } from "../tbClreDedTax.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bscsTaxAmt: 42.42,
  bscsTxbsAmt: 42.42,
  bscsTxrt: 42.42,
  createdAt: new Date(),
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  mgDscnAplyAmt: 42.42,
  payKndCd: "examplePayKndCd",
  payTaxAmt: 42.42,
  pdlsNo: "examplePdlsNo",
  rdexAmt: 42.42,
  rdexBaseAmt: 42.42,
  rdexCd: "exampleRdexCd",
  rdexPtCd: "exampleRdexPtCd",
  rdexTxrt: 42.42,
  reffNo: "exampleReffNo",
  taxAmt: 42.42,
  taxCd: "exampleTaxCd",
  tfrtCtgyCd: "exampleTfrtCtgyCd",
  txbsAmt: 42.42,
  txrt: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  bscsTaxAmt: 42.42,
  bscsTxbsAmt: 42.42,
  bscsTxrt: 42.42,
  createdAt: new Date(),
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  mgDscnAplyAmt: 42.42,
  payKndCd: "examplePayKndCd",
  payTaxAmt: 42.42,
  pdlsNo: "examplePdlsNo",
  rdexAmt: 42.42,
  rdexBaseAmt: 42.42,
  rdexCd: "exampleRdexCd",
  rdexPtCd: "exampleRdexPtCd",
  rdexTxrt: 42.42,
  reffNo: "exampleReffNo",
  taxAmt: 42.42,
  taxCd: "exampleTaxCd",
  tfrtCtgyCd: "exampleTfrtCtgyCd",
  txbsAmt: 42.42,
  txrt: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    bscsTaxAmt: 42.42,
    bscsTxbsAmt: 42.42,
    bscsTxrt: 42.42,
    createdAt: new Date(),
    delYn: "exampleDelYn",
    frstRegstId: "exampleFrstRegstId",
    frstRgsrDttm: new Date(),
    id: "exampleId",
    lastChgDttm: new Date(),
    lastChprId: "exampleLastChprId",
    mdfyDgcnt: 42,
    mgDscnAplyAmt: 42.42,
    payKndCd: "examplePayKndCd",
    payTaxAmt: 42.42,
    pdlsNo: "examplePdlsNo",
    rdexAmt: 42.42,
    rdexBaseAmt: 42.42,
    rdexCd: "exampleRdexCd",
    rdexPtCd: "exampleRdexPtCd",
    rdexTxrt: 42.42,
    reffNo: "exampleReffNo",
    taxAmt: 42.42,
    taxCd: "exampleTaxCd",
    tfrtCtgyCd: "exampleTfrtCtgyCd",
    txbsAmt: 42.42,
    txrt: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  bscsTaxAmt: 42.42,
  bscsTxbsAmt: 42.42,
  bscsTxrt: 42.42,
  createdAt: new Date(),
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  mgDscnAplyAmt: 42.42,
  payKndCd: "examplePayKndCd",
  payTaxAmt: 42.42,
  pdlsNo: "examplePdlsNo",
  rdexAmt: 42.42,
  rdexBaseAmt: 42.42,
  rdexCd: "exampleRdexCd",
  rdexPtCd: "exampleRdexPtCd",
  rdexTxrt: 42.42,
  reffNo: "exampleReffNo",
  taxAmt: 42.42,
  taxCd: "exampleTaxCd",
  tfrtCtgyCd: "exampleTfrtCtgyCd",
  txbsAmt: 42.42,
  txrt: 42.42,
  updatedAt: new Date(),
};

const service = {
  createTbClreDedTax() {
    return CREATE_RESULT;
  },
  tbClreDedTaxes: () => FIND_MANY_RESULT,
  tbClreDedTax: ({ where }: { where: { id: string } }) => {
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

describe("TbClreDedTax", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TbClreDedTaxService,
          useValue: service,
        },
      ],
      controllers: [TbClreDedTaxController],
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

  test("POST /tbClreDedTaxes", async () => {
    await request(app.getHttpServer())
      .post("/tbClreDedTaxes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: CREATE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: CREATE_RESULT.lastChgDttm.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /tbClreDedTaxes", async () => {
    await request(app.getHttpServer())
      .get("/tbClreDedTaxes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          frstRgsrDttm: FIND_MANY_RESULT[0].frstRgsrDttm.toISOString(),
          lastChgDttm: FIND_MANY_RESULT[0].lastChgDttm.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /tbClreDedTaxes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tbClreDedTaxes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /tbClreDedTaxes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tbClreDedTaxes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: FIND_ONE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: FIND_ONE_RESULT.lastChgDttm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /tbClreDedTaxes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/tbClreDedTaxes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: CREATE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: CREATE_RESULT.lastChgDttm.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/tbClreDedTaxes")
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
