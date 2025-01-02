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
import { ClreDedMdlStszController } from "../clreDedMdlStsz.controller";
import { ClreDedMdlStszService } from "../clreDedMdlStsz.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cachAmt: 42.42,
  cachCurrCd: "exampleCachCurrCd",
  cachFxrt: 42.42,
  cachNcyAmt: 42.42,
  createdAt: new Date(),
  ddctAmt: 42.42,
  ddctCurrCd: "exampleDdctCurrCd",
  ddctFxrt: 42.42,
  ddctNcyAmt: 42.42,
  ddctRt: 42.42,
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  indrPymnTamt: 42.42,
  infeeAmt: 42.42,
  infeeCurrCd: "exampleInfeeCurrCd",
  infeeFxrt: 42.42,
  infeeNcyAmt: 42.42,
  ingrNm: "exampleIngrNm",
  invcAmt: 42.42,
  invcCurrCd: "exampleInvcCurrCd",
  invcFxrt: 42.42,
  invcNcyAmt: 42.42,
  invcUsdAmt: 42.42,
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  mdlStszNm: "exampleMdlStszNm",
  mdlStszNo: "exampleMdlStszNo",
  otcstAmt: 42.42,
  otcstCurrCd: "exampleOtcstCurrCd",
  otcstFxrt: 42.42,
  otcstNcyAmt: 42.42,
  pdlsNo: "examplePdlsNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  reffNo: "exampleReffNo",
  ttxbsNcyAmt: 42.42,
  ttxbsUsdAmt: 42.42,
  tvlutNcyAmt: 42.42,
  tvlutUsdAmt: 42.42,
  updatedAt: new Date(),
  utPrc: 42.42,
};
const CREATE_RESULT = {
  cachAmt: 42.42,
  cachCurrCd: "exampleCachCurrCd",
  cachFxrt: 42.42,
  cachNcyAmt: 42.42,
  createdAt: new Date(),
  ddctAmt: 42.42,
  ddctCurrCd: "exampleDdctCurrCd",
  ddctFxrt: 42.42,
  ddctNcyAmt: 42.42,
  ddctRt: 42.42,
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  indrPymnTamt: 42.42,
  infeeAmt: 42.42,
  infeeCurrCd: "exampleInfeeCurrCd",
  infeeFxrt: 42.42,
  infeeNcyAmt: 42.42,
  ingrNm: "exampleIngrNm",
  invcAmt: 42.42,
  invcCurrCd: "exampleInvcCurrCd",
  invcFxrt: 42.42,
  invcNcyAmt: 42.42,
  invcUsdAmt: 42.42,
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  mdlStszNm: "exampleMdlStszNm",
  mdlStszNo: "exampleMdlStszNo",
  otcstAmt: 42.42,
  otcstCurrCd: "exampleOtcstCurrCd",
  otcstFxrt: 42.42,
  otcstNcyAmt: 42.42,
  pdlsNo: "examplePdlsNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  reffNo: "exampleReffNo",
  ttxbsNcyAmt: 42.42,
  ttxbsUsdAmt: 42.42,
  tvlutNcyAmt: 42.42,
  tvlutUsdAmt: 42.42,
  updatedAt: new Date(),
  utPrc: 42.42,
};
const FIND_MANY_RESULT = [
  {
    cachAmt: 42.42,
    cachCurrCd: "exampleCachCurrCd",
    cachFxrt: 42.42,
    cachNcyAmt: 42.42,
    createdAt: new Date(),
    ddctAmt: 42.42,
    ddctCurrCd: "exampleDdctCurrCd",
    ddctFxrt: 42.42,
    ddctNcyAmt: 42.42,
    ddctRt: 42.42,
    delYn: "exampleDelYn",
    frstRegstId: "exampleFrstRegstId",
    frstRgsrDttm: new Date(),
    id: "exampleId",
    indrPymnTamt: 42.42,
    infeeAmt: 42.42,
    infeeCurrCd: "exampleInfeeCurrCd",
    infeeFxrt: 42.42,
    infeeNcyAmt: 42.42,
    ingrNm: "exampleIngrNm",
    invcAmt: 42.42,
    invcCurrCd: "exampleInvcCurrCd",
    invcFxrt: 42.42,
    invcNcyAmt: 42.42,
    invcUsdAmt: 42.42,
    lastChgDttm: new Date(),
    lastChprId: "exampleLastChprId",
    mdfyDgcnt: 42,
    mdlStszNm: "exampleMdlStszNm",
    mdlStszNo: "exampleMdlStszNo",
    otcstAmt: 42.42,
    otcstCurrCd: "exampleOtcstCurrCd",
    otcstFxrt: 42.42,
    otcstNcyAmt: 42.42,
    pdlsNo: "examplePdlsNo",
    qty: 42.42,
    qtyUtCd: "exampleQtyUtCd",
    reffNo: "exampleReffNo",
    ttxbsNcyAmt: 42.42,
    ttxbsUsdAmt: 42.42,
    tvlutNcyAmt: 42.42,
    tvlutUsdAmt: 42.42,
    updatedAt: new Date(),
    utPrc: 42.42,
  },
];
const FIND_ONE_RESULT = {
  cachAmt: 42.42,
  cachCurrCd: "exampleCachCurrCd",
  cachFxrt: 42.42,
  cachNcyAmt: 42.42,
  createdAt: new Date(),
  ddctAmt: 42.42,
  ddctCurrCd: "exampleDdctCurrCd",
  ddctFxrt: 42.42,
  ddctNcyAmt: 42.42,
  ddctRt: 42.42,
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  indrPymnTamt: 42.42,
  infeeAmt: 42.42,
  infeeCurrCd: "exampleInfeeCurrCd",
  infeeFxrt: 42.42,
  infeeNcyAmt: 42.42,
  ingrNm: "exampleIngrNm",
  invcAmt: 42.42,
  invcCurrCd: "exampleInvcCurrCd",
  invcFxrt: 42.42,
  invcNcyAmt: 42.42,
  invcUsdAmt: 42.42,
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  mdlStszNm: "exampleMdlStszNm",
  mdlStszNo: "exampleMdlStszNo",
  otcstAmt: 42.42,
  otcstCurrCd: "exampleOtcstCurrCd",
  otcstFxrt: 42.42,
  otcstNcyAmt: 42.42,
  pdlsNo: "examplePdlsNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  reffNo: "exampleReffNo",
  ttxbsNcyAmt: 42.42,
  ttxbsUsdAmt: 42.42,
  tvlutNcyAmt: 42.42,
  tvlutUsdAmt: 42.42,
  updatedAt: new Date(),
  utPrc: 42.42,
};

const service = {
  createClreDedMdlStsz() {
    return CREATE_RESULT;
  },
  clreDedMdlStszs: () => FIND_MANY_RESULT,
  clreDedMdlStsz: ({ where }: { where: { id: string } }) => {
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

describe("ClreDedMdlStsz", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ClreDedMdlStszService,
          useValue: service,
        },
      ],
      controllers: [ClreDedMdlStszController],
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

  test("POST /clreDedMdlStszs", async () => {
    await request(app.getHttpServer())
      .post("/clreDedMdlStszs")
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

  test("GET /clreDedMdlStszs", async () => {
    await request(app.getHttpServer())
      .get("/clreDedMdlStszs")
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

  test("GET /clreDedMdlStszs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/clreDedMdlStszs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /clreDedMdlStszs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/clreDedMdlStszs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: FIND_ONE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: FIND_ONE_RESULT.lastChgDttm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /clreDedMdlStszs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/clreDedMdlStszs")
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
          .post("/clreDedMdlStszs")
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
