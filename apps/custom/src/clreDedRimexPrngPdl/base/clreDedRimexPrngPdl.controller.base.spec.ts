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
import { ClreDedRimexPrngPdlController } from "../clreDedRimexPrngPdl.controller";
import { ClreDedRimexPrngPdlService } from "../clreDedRimexPrngPdl.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cmdtClsfSpelCd: "exampleCmdtClsfSpelCd",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  dlngPdlsNm: "exampleDlngPdlsNm",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  hsCd: "exampleHsCd",
  hsErrPvntVal: "exampleHsErrPvntVal",
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  orcyCntyCd: "exampleOrcyCntyCd",
  pdlsNm: "examplePdlsNm",
  pdlsNtwg: 42.42,
  pdlsTtwg: 42.42,
  prngPdlsNo: "examplePrngPdlsNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  reffNo: "exampleReffNo",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  cmdtClsfSpelCd: "exampleCmdtClsfSpelCd",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  dlngPdlsNm: "exampleDlngPdlsNm",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  hsCd: "exampleHsCd",
  hsErrPvntVal: "exampleHsErrPvntVal",
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  orcyCntyCd: "exampleOrcyCntyCd",
  pdlsNm: "examplePdlsNm",
  pdlsNtwg: 42.42,
  pdlsTtwg: 42.42,
  prngPdlsNo: "examplePrngPdlsNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  reffNo: "exampleReffNo",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    cmdtClsfSpelCd: "exampleCmdtClsfSpelCd",
    createdAt: new Date(),
    delYn: "exampleDelYn",
    dlngPdlsNm: "exampleDlngPdlsNm",
    frstRegstId: "exampleFrstRegstId",
    frstRgsrDttm: new Date(),
    hsCd: "exampleHsCd",
    hsErrPvntVal: "exampleHsErrPvntVal",
    id: "exampleId",
    lastChgDttm: new Date(),
    lastChprId: "exampleLastChprId",
    mdfyDgcnt: 42,
    orcyCntyCd: "exampleOrcyCntyCd",
    pdlsNm: "examplePdlsNm",
    pdlsNtwg: 42.42,
    pdlsTtwg: 42.42,
    prngPdlsNo: "examplePrngPdlsNo",
    qty: 42.42,
    qtyUtCd: "exampleQtyUtCd",
    reffNo: "exampleReffNo",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  cmdtClsfSpelCd: "exampleCmdtClsfSpelCd",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  dlngPdlsNm: "exampleDlngPdlsNm",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  hsCd: "exampleHsCd",
  hsErrPvntVal: "exampleHsErrPvntVal",
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  orcyCntyCd: "exampleOrcyCntyCd",
  pdlsNm: "examplePdlsNm",
  pdlsNtwg: 42.42,
  pdlsTtwg: 42.42,
  prngPdlsNo: "examplePrngPdlsNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  reffNo: "exampleReffNo",
  updatedAt: new Date(),
};

const service = {
  createClreDedRimexPrngPdl() {
    return CREATE_RESULT;
  },
  clreDedRimexPrngPdls: () => FIND_MANY_RESULT,
  clreDedRimexPrngPdl: ({ where }: { where: { id: string } }) => {
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

describe("ClreDedRimexPrngPdl", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ClreDedRimexPrngPdlService,
          useValue: service,
        },
      ],
      controllers: [ClreDedRimexPrngPdlController],
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

  test("POST /clreDedRimexPrngPdls", async () => {
    await request(app.getHttpServer())
      .post("/clreDedRimexPrngPdls")
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

  test("GET /clreDedRimexPrngPdls", async () => {
    await request(app.getHttpServer())
      .get("/clreDedRimexPrngPdls")
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

  test("GET /clreDedRimexPrngPdls/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/clreDedRimexPrngPdls"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /clreDedRimexPrngPdls/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/clreDedRimexPrngPdls"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: FIND_ONE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: FIND_ONE_RESULT.lastChgDttm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /clreDedRimexPrngPdls existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/clreDedRimexPrngPdls")
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
          .post("/clreDedRimexPrngPdls")
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
