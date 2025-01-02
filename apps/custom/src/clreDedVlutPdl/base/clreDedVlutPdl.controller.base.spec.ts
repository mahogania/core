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
import { ClreDedVlutPdlController } from "../clreDedVlutPdl.controller";
import { ClreDedVlutPdlService } from "../clreDedVlutPdl.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  pdlsCachAmt: 42.42,
  pdlsCachCurrCd: "examplePdlsCachCurrCd",
  pdlsCachFxrt: 42.42,
  pdlsCachNcyAmt: 42.42,
  pdlsDdctAmt: 42.42,
  pdlsDdctCurrCd: "examplePdlsDdctCurrCd",
  pdlsDdctFxrt: 42.42,
  pdlsDdctNcyAmt: 42.42,
  pdlsInfeeAmt: 42.42,
  pdlsInfeeCurrCd: "examplePdlsInfeeCurrCd",
  pdlsInfeeFxrt: 42.42,
  pdlsInfeeNcyAmt: 42.42,
  pdlsInvcAmt: 42.42,
  pdlsInvcCurrCd: "examplePdlsInvcCurrCd",
  pdlsInvcFxrt: 42.42,
  pdlsInvcNcyAmt: 42.42,
  pdlsInvcUsdAmt: 42.42,
  pdlsMprcBaseVal: 42.42,
  pdlsMprcCurrCd: "examplePdlsMprcCurrCd",
  pdlsMprcNcyAmt: 42.42,
  pdlsMprcTpCd: "examplePdlsMprcTpCd",
  pdlsMprcUsdAmt: 42.42,
  pdlsMprcUtAmt: 42.42,
  pdlsNo: "examplePdlsNo",
  pdlsOtcstAmt: 42.42,
  pdlsOtcstCurrCd: "examplePdlsOtcstCurrCd",
  pdlsOtcstFxrt: 42.42,
  pdlsOtcstNcyAmt: 42.42,
  pdlsTxbsNcyAmt: 42.42,
  pdlsTxbsUsdAmt: 42.42,
  pdlsVlutNcyAmt: 42.42,
  pdlsVlutUsdAmt: 42.42,
  reffNo: "exampleReffNo",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  pdlsCachAmt: 42.42,
  pdlsCachCurrCd: "examplePdlsCachCurrCd",
  pdlsCachFxrt: 42.42,
  pdlsCachNcyAmt: 42.42,
  pdlsDdctAmt: 42.42,
  pdlsDdctCurrCd: "examplePdlsDdctCurrCd",
  pdlsDdctFxrt: 42.42,
  pdlsDdctNcyAmt: 42.42,
  pdlsInfeeAmt: 42.42,
  pdlsInfeeCurrCd: "examplePdlsInfeeCurrCd",
  pdlsInfeeFxrt: 42.42,
  pdlsInfeeNcyAmt: 42.42,
  pdlsInvcAmt: 42.42,
  pdlsInvcCurrCd: "examplePdlsInvcCurrCd",
  pdlsInvcFxrt: 42.42,
  pdlsInvcNcyAmt: 42.42,
  pdlsInvcUsdAmt: 42.42,
  pdlsMprcBaseVal: 42.42,
  pdlsMprcCurrCd: "examplePdlsMprcCurrCd",
  pdlsMprcNcyAmt: 42.42,
  pdlsMprcTpCd: "examplePdlsMprcTpCd",
  pdlsMprcUsdAmt: 42.42,
  pdlsMprcUtAmt: 42.42,
  pdlsNo: "examplePdlsNo",
  pdlsOtcstAmt: 42.42,
  pdlsOtcstCurrCd: "examplePdlsOtcstCurrCd",
  pdlsOtcstFxrt: 42.42,
  pdlsOtcstNcyAmt: 42.42,
  pdlsTxbsNcyAmt: 42.42,
  pdlsTxbsUsdAmt: 42.42,
  pdlsVlutNcyAmt: 42.42,
  pdlsVlutUsdAmt: 42.42,
  reffNo: "exampleReffNo",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    delYn: "exampleDelYn",
    frstRegstId: "exampleFrstRegstId",
    frstRgsrDttm: new Date(),
    id: "exampleId",
    lastChgDttm: new Date(),
    lastChprId: "exampleLastChprId",
    mdfyDgcnt: 42,
    pdlsCachAmt: 42.42,
    pdlsCachCurrCd: "examplePdlsCachCurrCd",
    pdlsCachFxrt: 42.42,
    pdlsCachNcyAmt: 42.42,
    pdlsDdctAmt: 42.42,
    pdlsDdctCurrCd: "examplePdlsDdctCurrCd",
    pdlsDdctFxrt: 42.42,
    pdlsDdctNcyAmt: 42.42,
    pdlsInfeeAmt: 42.42,
    pdlsInfeeCurrCd: "examplePdlsInfeeCurrCd",
    pdlsInfeeFxrt: 42.42,
    pdlsInfeeNcyAmt: 42.42,
    pdlsInvcAmt: 42.42,
    pdlsInvcCurrCd: "examplePdlsInvcCurrCd",
    pdlsInvcFxrt: 42.42,
    pdlsInvcNcyAmt: 42.42,
    pdlsInvcUsdAmt: 42.42,
    pdlsMprcBaseVal: 42.42,
    pdlsMprcCurrCd: "examplePdlsMprcCurrCd",
    pdlsMprcNcyAmt: 42.42,
    pdlsMprcTpCd: "examplePdlsMprcTpCd",
    pdlsMprcUsdAmt: 42.42,
    pdlsMprcUtAmt: 42.42,
    pdlsNo: "examplePdlsNo",
    pdlsOtcstAmt: 42.42,
    pdlsOtcstCurrCd: "examplePdlsOtcstCurrCd",
    pdlsOtcstFxrt: 42.42,
    pdlsOtcstNcyAmt: 42.42,
    pdlsTxbsNcyAmt: 42.42,
    pdlsTxbsUsdAmt: 42.42,
    pdlsVlutNcyAmt: 42.42,
    pdlsVlutUsdAmt: 42.42,
    reffNo: "exampleReffNo",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  pdlsCachAmt: 42.42,
  pdlsCachCurrCd: "examplePdlsCachCurrCd",
  pdlsCachFxrt: 42.42,
  pdlsCachNcyAmt: 42.42,
  pdlsDdctAmt: 42.42,
  pdlsDdctCurrCd: "examplePdlsDdctCurrCd",
  pdlsDdctFxrt: 42.42,
  pdlsDdctNcyAmt: 42.42,
  pdlsInfeeAmt: 42.42,
  pdlsInfeeCurrCd: "examplePdlsInfeeCurrCd",
  pdlsInfeeFxrt: 42.42,
  pdlsInfeeNcyAmt: 42.42,
  pdlsInvcAmt: 42.42,
  pdlsInvcCurrCd: "examplePdlsInvcCurrCd",
  pdlsInvcFxrt: 42.42,
  pdlsInvcNcyAmt: 42.42,
  pdlsInvcUsdAmt: 42.42,
  pdlsMprcBaseVal: 42.42,
  pdlsMprcCurrCd: "examplePdlsMprcCurrCd",
  pdlsMprcNcyAmt: 42.42,
  pdlsMprcTpCd: "examplePdlsMprcTpCd",
  pdlsMprcUsdAmt: 42.42,
  pdlsMprcUtAmt: 42.42,
  pdlsNo: "examplePdlsNo",
  pdlsOtcstAmt: 42.42,
  pdlsOtcstCurrCd: "examplePdlsOtcstCurrCd",
  pdlsOtcstFxrt: 42.42,
  pdlsOtcstNcyAmt: 42.42,
  pdlsTxbsNcyAmt: 42.42,
  pdlsTxbsUsdAmt: 42.42,
  pdlsVlutNcyAmt: 42.42,
  pdlsVlutUsdAmt: 42.42,
  reffNo: "exampleReffNo",
  updatedAt: new Date(),
};

const service = {
  createClreDedVlutPdl() {
    return CREATE_RESULT;
  },
  clreDedVlutPdls: () => FIND_MANY_RESULT,
  clreDedVlutPdl: ({ where }: { where: { id: string } }) => {
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

describe("ClreDedVlutPdl", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ClreDedVlutPdlService,
          useValue: service,
        },
      ],
      controllers: [ClreDedVlutPdlController],
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

  test("POST /clreDedVlutPdls", async () => {
    await request(app.getHttpServer())
      .post("/clreDedVlutPdls")
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

  test("GET /clreDedVlutPdls", async () => {
    await request(app.getHttpServer())
      .get("/clreDedVlutPdls")
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

  test("GET /clreDedVlutPdls/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/clreDedVlutPdls"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /clreDedVlutPdls/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/clreDedVlutPdls"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: FIND_ONE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: FIND_ONE_RESULT.lastChgDttm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /clreDedVlutPdls existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/clreDedVlutPdls")
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
          .post("/clreDedVlutPdls")
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
