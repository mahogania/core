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
import { TbClreDedVhclController } from "../tbClreDedVhcl.controller";
import { TbClreDedVhclService } from "../tbClreDedVhcl.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  caboNm: "exampleCaboNm",
  carRgsrNo: "exampleCarRgsrNo",
  chssNo: "exampleChssNo",
  clrNm: "exampleClrNm",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  dpcmtCn: "exampleDpcmtCn",
  drvrAddr: "exampleDrvrAddr",
  drvrNm: "exampleDrvrNm",
  drvrPostNo: "exampleDrvrPostNo",
  flKndNm: "exampleFlKndNm",
  frstOpraDt: "exampleFrstOpraDt",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  impPtNm: "exampleImpPtNm",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  loadWghtCn: "exampleLoadWghtCn",
  mdfyDgcnt: 42,
  mdlStszNo: "exampleMdlStszNo",
  mkngYy: "exampleMkngYy",
  otptCn: "exampleOtptCn",
  pdlsNo: "examplePdlsNo",
  reffNo: "exampleReffNo",
  stcnt: 42,
  tpdMgmtNo: "exampleTpdMgmtNo",
  trsfNnprEndDt: "exampleTrsfNnprEndDt",
  trsfNnprStrtDt: "exampleTrsfNnprStrtDt",
  trsfNnprYn: "exampleTrsfNnprYn",
  updatedAt: new Date(),
  vhclKndCd: "exampleVhclKndCd",
  vhclKndNm: "exampleVhclKndNm",
  vhclMdlCd: "exampleVhclMdlCd",
  vhclMnurCd: "exampleVhclMnurCd",
  vhclReleDt: "exampleVhclReleDt",
  vhclWghtCn: "exampleVhclWghtCn",
};
const CREATE_RESULT = {
  caboNm: "exampleCaboNm",
  carRgsrNo: "exampleCarRgsrNo",
  chssNo: "exampleChssNo",
  clrNm: "exampleClrNm",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  dpcmtCn: "exampleDpcmtCn",
  drvrAddr: "exampleDrvrAddr",
  drvrNm: "exampleDrvrNm",
  drvrPostNo: "exampleDrvrPostNo",
  flKndNm: "exampleFlKndNm",
  frstOpraDt: "exampleFrstOpraDt",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  impPtNm: "exampleImpPtNm",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  loadWghtCn: "exampleLoadWghtCn",
  mdfyDgcnt: 42,
  mdlStszNo: "exampleMdlStszNo",
  mkngYy: "exampleMkngYy",
  otptCn: "exampleOtptCn",
  pdlsNo: "examplePdlsNo",
  reffNo: "exampleReffNo",
  stcnt: 42,
  tpdMgmtNo: "exampleTpdMgmtNo",
  trsfNnprEndDt: "exampleTrsfNnprEndDt",
  trsfNnprStrtDt: "exampleTrsfNnprStrtDt",
  trsfNnprYn: "exampleTrsfNnprYn",
  updatedAt: new Date(),
  vhclKndCd: "exampleVhclKndCd",
  vhclKndNm: "exampleVhclKndNm",
  vhclMdlCd: "exampleVhclMdlCd",
  vhclMnurCd: "exampleVhclMnurCd",
  vhclReleDt: "exampleVhclReleDt",
  vhclWghtCn: "exampleVhclWghtCn",
};
const FIND_MANY_RESULT = [
  {
    caboNm: "exampleCaboNm",
    carRgsrNo: "exampleCarRgsrNo",
    chssNo: "exampleChssNo",
    clrNm: "exampleClrNm",
    createdAt: new Date(),
    delYn: "exampleDelYn",
    dpcmtCn: "exampleDpcmtCn",
    drvrAddr: "exampleDrvrAddr",
    drvrNm: "exampleDrvrNm",
    drvrPostNo: "exampleDrvrPostNo",
    flKndNm: "exampleFlKndNm",
    frstOpraDt: "exampleFrstOpraDt",
    frstRegstId: "exampleFrstRegstId",
    frstRgsrDttm: new Date(),
    id: "exampleId",
    impPtNm: "exampleImpPtNm",
    lastChgDttm: new Date(),
    lastChprId: "exampleLastChprId",
    loadWghtCn: "exampleLoadWghtCn",
    mdfyDgcnt: 42,
    mdlStszNo: "exampleMdlStszNo",
    mkngYy: "exampleMkngYy",
    otptCn: "exampleOtptCn",
    pdlsNo: "examplePdlsNo",
    reffNo: "exampleReffNo",
    stcnt: 42,
    tpdMgmtNo: "exampleTpdMgmtNo",
    trsfNnprEndDt: "exampleTrsfNnprEndDt",
    trsfNnprStrtDt: "exampleTrsfNnprStrtDt",
    trsfNnprYn: "exampleTrsfNnprYn",
    updatedAt: new Date(),
    vhclKndCd: "exampleVhclKndCd",
    vhclKndNm: "exampleVhclKndNm",
    vhclMdlCd: "exampleVhclMdlCd",
    vhclMnurCd: "exampleVhclMnurCd",
    vhclReleDt: "exampleVhclReleDt",
    vhclWghtCn: "exampleVhclWghtCn",
  },
];
const FIND_ONE_RESULT = {
  caboNm: "exampleCaboNm",
  carRgsrNo: "exampleCarRgsrNo",
  chssNo: "exampleChssNo",
  clrNm: "exampleClrNm",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  dpcmtCn: "exampleDpcmtCn",
  drvrAddr: "exampleDrvrAddr",
  drvrNm: "exampleDrvrNm",
  drvrPostNo: "exampleDrvrPostNo",
  flKndNm: "exampleFlKndNm",
  frstOpraDt: "exampleFrstOpraDt",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  impPtNm: "exampleImpPtNm",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  loadWghtCn: "exampleLoadWghtCn",
  mdfyDgcnt: 42,
  mdlStszNo: "exampleMdlStszNo",
  mkngYy: "exampleMkngYy",
  otptCn: "exampleOtptCn",
  pdlsNo: "examplePdlsNo",
  reffNo: "exampleReffNo",
  stcnt: 42,
  tpdMgmtNo: "exampleTpdMgmtNo",
  trsfNnprEndDt: "exampleTrsfNnprEndDt",
  trsfNnprStrtDt: "exampleTrsfNnprStrtDt",
  trsfNnprYn: "exampleTrsfNnprYn",
  updatedAt: new Date(),
  vhclKndCd: "exampleVhclKndCd",
  vhclKndNm: "exampleVhclKndNm",
  vhclMdlCd: "exampleVhclMdlCd",
  vhclMnurCd: "exampleVhclMnurCd",
  vhclReleDt: "exampleVhclReleDt",
  vhclWghtCn: "exampleVhclWghtCn",
};

const service = {
  createTbClreDedVhcl() {
    return CREATE_RESULT;
  },
  tbClreDedVhcls: () => FIND_MANY_RESULT,
  tbClreDedVhcl: ({ where }: { where: { id: string } }) => {
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

describe("TbClreDedVhcl", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TbClreDedVhclService,
          useValue: service,
        },
      ],
      controllers: [TbClreDedVhclController],
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

  test("POST /tbClreDedVhcls", async () => {
    await request(app.getHttpServer())
      .post("/tbClreDedVhcls")
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

  test("GET /tbClreDedVhcls", async () => {
    await request(app.getHttpServer())
      .get("/tbClreDedVhcls")
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

  test("GET /tbClreDedVhcls/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tbClreDedVhcls"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /tbClreDedVhcls/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tbClreDedVhcls"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: FIND_ONE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: FIND_ONE_RESULT.lastChgDttm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /tbClreDedVhcls existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/tbClreDedVhcls")
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
          .post("/tbClreDedVhcls")
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
