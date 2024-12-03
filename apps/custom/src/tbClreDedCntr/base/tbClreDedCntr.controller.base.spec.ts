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
import { TbClreDedCntrController } from "../tbClreDedCntr.controller";
import { TbClreDedCntrService } from "../tbClreDedCntr.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cntrNo: "exampleCntrNo",
  cntrSrno: 42,
  cntrStfnSttsCd: "exampleCntrStfnSttsCd",
  cntrTpCd: "exampleCntrTpCd",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  inscTrgtYn: "exampleInscTrgtYn",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  reffNo: "exampleReffNo",
  sealChpn1: "exampleSealChpn1",
  sealChpn2: "exampleSealChpn2",
  sealChpn3: "exampleSealChpn3",
  sealChpnCd: "exampleSealChpnCd",
  sealNo1: "exampleSealNo1",
  sealNo2: "exampleSealNo2",
  sealNo3: "exampleSealNo3",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  cntrNo: "exampleCntrNo",
  cntrSrno: 42,
  cntrStfnSttsCd: "exampleCntrStfnSttsCd",
  cntrTpCd: "exampleCntrTpCd",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  inscTrgtYn: "exampleInscTrgtYn",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  reffNo: "exampleReffNo",
  sealChpn1: "exampleSealChpn1",
  sealChpn2: "exampleSealChpn2",
  sealChpn3: "exampleSealChpn3",
  sealChpnCd: "exampleSealChpnCd",
  sealNo1: "exampleSealNo1",
  sealNo2: "exampleSealNo2",
  sealNo3: "exampleSealNo3",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    cntrNo: "exampleCntrNo",
    cntrSrno: 42,
    cntrStfnSttsCd: "exampleCntrStfnSttsCd",
    cntrTpCd: "exampleCntrTpCd",
    createdAt: new Date(),
    delYn: "exampleDelYn",
    frstRegstId: "exampleFrstRegstId",
    frstRgsrDttm: new Date(),
    id: "exampleId",
    inscTrgtYn: "exampleInscTrgtYn",
    lastChgDttm: new Date(),
    lastChprId: "exampleLastChprId",
    mdfyDgcnt: 42,
    reffNo: "exampleReffNo",
    sealChpn1: "exampleSealChpn1",
    sealChpn2: "exampleSealChpn2",
    sealChpn3: "exampleSealChpn3",
    sealChpnCd: "exampleSealChpnCd",
    sealNo1: "exampleSealNo1",
    sealNo2: "exampleSealNo2",
    sealNo3: "exampleSealNo3",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  cntrNo: "exampleCntrNo",
  cntrSrno: 42,
  cntrStfnSttsCd: "exampleCntrStfnSttsCd",
  cntrTpCd: "exampleCntrTpCd",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  inscTrgtYn: "exampleInscTrgtYn",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  reffNo: "exampleReffNo",
  sealChpn1: "exampleSealChpn1",
  sealChpn2: "exampleSealChpn2",
  sealChpn3: "exampleSealChpn3",
  sealChpnCd: "exampleSealChpnCd",
  sealNo1: "exampleSealNo1",
  sealNo2: "exampleSealNo2",
  sealNo3: "exampleSealNo3",
  updatedAt: new Date(),
};

const service = {
  createTbClreDedCntr() {
    return CREATE_RESULT;
  },
  tbClreDedCntrs: () => FIND_MANY_RESULT,
  tbClreDedCntr: ({ where }: { where: { id: string } }) => {
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

describe("TbClreDedCntr", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TbClreDedCntrService,
          useValue: service,
        },
      ],
      controllers: [TbClreDedCntrController],
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

  test("POST /tbClreDedCntrs", async () => {
    await request(app.getHttpServer())
      .post("/tbClreDedCntrs")
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

  test("GET /tbClreDedCntrs", async () => {
    await request(app.getHttpServer())
      .get("/tbClreDedCntrs")
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

  test("GET /tbClreDedCntrs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tbClreDedCntrs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /tbClreDedCntrs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tbClreDedCntrs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: FIND_ONE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: FIND_ONE_RESULT.lastChgDttm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /tbClreDedCntrs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/tbClreDedCntrs")
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
          .post("/tbClreDedCntrs")
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
