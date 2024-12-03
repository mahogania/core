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
import { TbClreDedPrcDclrPdlsController } from "../tbClreDedPrcDclrPdls.controller";
import { TbClreDedPrcDclrPdlsService } from "../tbClreDedPrcDclrPdls.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  brngTrnpCst: 42.42,
  byerPymnCst: 42.42,
  createdAt: new Date(),
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  indrPymnTamt: 42.42,
  infeeAmt: 42.42,
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  loadCstAmt: 42.42,
  mdfyDgcnt: 42,
  mdlStszNo: "exampleMdlStszNo",
  mdtnPcfeAmt: 42.42,
  mnfuSrvc_1Amt: 42.42,
  mnfuSrvc_2Amt: 42.42,
  mnfuSrvc_3Amt: 42.42,
  mnfuSrvc_4Amt: 42.42,
  otcstAmt: 42.42,
  pcfeAmt: 42.42,
  pcfeLcneAmt: 42.42,
  pckgAmt: 42.42,
  pdlsNo: "examplePdlsNo",
  pyrTrifAmt: 42.42,
  reffNo: "exampleReffNo",
  resaleErnAmt: 42.42,
  techSpptCst: 42.42,
  trnpCstAmt: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  brngTrnpCst: 42.42,
  byerPymnCst: 42.42,
  createdAt: new Date(),
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  indrPymnTamt: 42.42,
  infeeAmt: 42.42,
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  loadCstAmt: 42.42,
  mdfyDgcnt: 42,
  mdlStszNo: "exampleMdlStszNo",
  mdtnPcfeAmt: 42.42,
  mnfuSrvc_1Amt: 42.42,
  mnfuSrvc_2Amt: 42.42,
  mnfuSrvc_3Amt: 42.42,
  mnfuSrvc_4Amt: 42.42,
  otcstAmt: 42.42,
  pcfeAmt: 42.42,
  pcfeLcneAmt: 42.42,
  pckgAmt: 42.42,
  pdlsNo: "examplePdlsNo",
  pyrTrifAmt: 42.42,
  reffNo: "exampleReffNo",
  resaleErnAmt: 42.42,
  techSpptCst: 42.42,
  trnpCstAmt: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    brngTrnpCst: 42.42,
    byerPymnCst: 42.42,
    createdAt: new Date(),
    delYn: "exampleDelYn",
    frstRegstId: "exampleFrstRegstId",
    frstRgsrDttm: new Date(),
    id: "exampleId",
    indrPymnTamt: 42.42,
    infeeAmt: 42.42,
    lastChgDttm: new Date(),
    lastChprId: "exampleLastChprId",
    loadCstAmt: 42.42,
    mdfyDgcnt: 42,
    mdlStszNo: "exampleMdlStszNo",
    mdtnPcfeAmt: 42.42,
    mnfuSrvc_1Amt: 42.42,
    mnfuSrvc_2Amt: 42.42,
    mnfuSrvc_3Amt: 42.42,
    mnfuSrvc_4Amt: 42.42,
    otcstAmt: 42.42,
    pcfeAmt: 42.42,
    pcfeLcneAmt: 42.42,
    pckgAmt: 42.42,
    pdlsNo: "examplePdlsNo",
    pyrTrifAmt: 42.42,
    reffNo: "exampleReffNo",
    resaleErnAmt: 42.42,
    techSpptCst: 42.42,
    trnpCstAmt: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  brngTrnpCst: 42.42,
  byerPymnCst: 42.42,
  createdAt: new Date(),
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  indrPymnTamt: 42.42,
  infeeAmt: 42.42,
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  loadCstAmt: 42.42,
  mdfyDgcnt: 42,
  mdlStszNo: "exampleMdlStszNo",
  mdtnPcfeAmt: 42.42,
  mnfuSrvc_1Amt: 42.42,
  mnfuSrvc_2Amt: 42.42,
  mnfuSrvc_3Amt: 42.42,
  mnfuSrvc_4Amt: 42.42,
  otcstAmt: 42.42,
  pcfeAmt: 42.42,
  pcfeLcneAmt: 42.42,
  pckgAmt: 42.42,
  pdlsNo: "examplePdlsNo",
  pyrTrifAmt: 42.42,
  reffNo: "exampleReffNo",
  resaleErnAmt: 42.42,
  techSpptCst: 42.42,
  trnpCstAmt: 42.42,
  updatedAt: new Date(),
};

const service = {
  createTbClreDedPrcDclrPdls() {
    return CREATE_RESULT;
  },
  tbClreDedPrcDclrPdlsItems: () => FIND_MANY_RESULT,
  tbClreDedPrcDclrPdls: ({ where }: { where: { id: string } }) => {
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

describe("TbClreDedPrcDclrPdls", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TbClreDedPrcDclrPdlsService,
          useValue: service,
        },
      ],
      controllers: [TbClreDedPrcDclrPdlsController],
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

  test("POST /tbClreDedPrcDclrPdls", async () => {
    await request(app.getHttpServer())
      .post("/tbClreDedPrcDclrPdls")
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

  test("GET /tbClreDedPrcDclrPdls", async () => {
    await request(app.getHttpServer())
      .get("/tbClreDedPrcDclrPdls")
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

  test("GET /tbClreDedPrcDclrPdls/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tbClreDedPrcDclrPdls"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /tbClreDedPrcDclrPdls/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tbClreDedPrcDclrPdls"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: FIND_ONE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: FIND_ONE_RESULT.lastChgDttm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /tbClreDedPrcDclrPdls existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/tbClreDedPrcDclrPdls")
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
          .post("/tbClreDedPrcDclrPdls")
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
