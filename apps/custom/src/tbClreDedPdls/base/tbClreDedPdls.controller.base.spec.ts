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
import { TbClreDedPdlsController } from "../tbClreDedPdls.controller";
import { TbClreDedPdlsService } from "../tbClreDedPdls.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  aditTxQty: 42.42,
  aditTxQtyUtCd: "exampleAditTxQtyUtCd",
  apcAtpmEndDt: "exampleApcAtpmEndDt",
  apcAtpmStrtDt: "exampleApcAtpmStrtDt",
  apcCd: "exampleApcCd",
  bfDtlDcshDt: "exampleBfDtlDcshDt",
  bfDtlDcshNo: "exampleBfDtlDcshNo",
  bfPdlsNo: "exampleBfPdlsNo",
  brndNm: "exampleBrndNm",
  cmdtClsfSpelCd: "exampleCmdtClsfSpelCd",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  divdFfmnTpCd: "exampleDivdFfmnTpCd",
  dlngPdlsNm: "exampleDlngPdlsNm",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  hsCd: "exampleHsCd",
  hsErrPvntVal: "exampleHsErrPvntVal",
  hsExcpMtrCd: "exampleHsExcpMtrCd",
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  mgDscnApreNo: "exampleMgDscnApreNo",
  nwprScarCmdtCd: "exampleNwprScarCmdtCd",
  oilTankNo: "exampleOilTankNo",
  orcyCntyCd: "exampleOrcyCntyCd",
  pckgDesc: "examplePckgDesc",
  pckgShmrMarkNo: "examplePckgShmrMarkNo",
  pdlsClsfBfhnJdgnPn: "examplePdlsClsfBfhnJdgnPn",
  pdlsNm: "examplePdlsNm",
  pdlsNo: "examplePdlsNo",
  pdlsNtwg: 42.42,
  pdlsPckgGcnt: 42,
  pdlsPckgUtCd: "examplePdlsPckgUtCd",
  pdlsTtwg: 42.42,
  prcDtrmMeanCd: "examplePrcDtrmMeanCd",
  prhbCmdtCd: "examplePrhbCmdtCd",
  prvlCd: "examplePrvlCd",
  psmgtFfmnXpirPrid: 42,
  qtaApreNo: "exampleQtaApreNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  reffNo: "exampleReffNo",
  regmRqstCd: "exampleRegmRqstCd",
  trifBaseVal: "exampleTrifBaseVal",
  updatedAt: new Date(),
  uprPdlsNo: "exampleUprPdlsNo",
  vhclYn: "exampleVhclYn",
};
const CREATE_RESULT = {
  aditTxQty: 42.42,
  aditTxQtyUtCd: "exampleAditTxQtyUtCd",
  apcAtpmEndDt: "exampleApcAtpmEndDt",
  apcAtpmStrtDt: "exampleApcAtpmStrtDt",
  apcCd: "exampleApcCd",
  bfDtlDcshDt: "exampleBfDtlDcshDt",
  bfDtlDcshNo: "exampleBfDtlDcshNo",
  bfPdlsNo: "exampleBfPdlsNo",
  brndNm: "exampleBrndNm",
  cmdtClsfSpelCd: "exampleCmdtClsfSpelCd",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  divdFfmnTpCd: "exampleDivdFfmnTpCd",
  dlngPdlsNm: "exampleDlngPdlsNm",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  hsCd: "exampleHsCd",
  hsErrPvntVal: "exampleHsErrPvntVal",
  hsExcpMtrCd: "exampleHsExcpMtrCd",
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  mgDscnApreNo: "exampleMgDscnApreNo",
  nwprScarCmdtCd: "exampleNwprScarCmdtCd",
  oilTankNo: "exampleOilTankNo",
  orcyCntyCd: "exampleOrcyCntyCd",
  pckgDesc: "examplePckgDesc",
  pckgShmrMarkNo: "examplePckgShmrMarkNo",
  pdlsClsfBfhnJdgnPn: "examplePdlsClsfBfhnJdgnPn",
  pdlsNm: "examplePdlsNm",
  pdlsNo: "examplePdlsNo",
  pdlsNtwg: 42.42,
  pdlsPckgGcnt: 42,
  pdlsPckgUtCd: "examplePdlsPckgUtCd",
  pdlsTtwg: 42.42,
  prcDtrmMeanCd: "examplePrcDtrmMeanCd",
  prhbCmdtCd: "examplePrhbCmdtCd",
  prvlCd: "examplePrvlCd",
  psmgtFfmnXpirPrid: 42,
  qtaApreNo: "exampleQtaApreNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  reffNo: "exampleReffNo",
  regmRqstCd: "exampleRegmRqstCd",
  trifBaseVal: "exampleTrifBaseVal",
  updatedAt: new Date(),
  uprPdlsNo: "exampleUprPdlsNo",
  vhclYn: "exampleVhclYn",
};
const FIND_MANY_RESULT = [
  {
    aditTxQty: 42.42,
    aditTxQtyUtCd: "exampleAditTxQtyUtCd",
    apcAtpmEndDt: "exampleApcAtpmEndDt",
    apcAtpmStrtDt: "exampleApcAtpmStrtDt",
    apcCd: "exampleApcCd",
    bfDtlDcshDt: "exampleBfDtlDcshDt",
    bfDtlDcshNo: "exampleBfDtlDcshNo",
    bfPdlsNo: "exampleBfPdlsNo",
    brndNm: "exampleBrndNm",
    cmdtClsfSpelCd: "exampleCmdtClsfSpelCd",
    createdAt: new Date(),
    delYn: "exampleDelYn",
    divdFfmnTpCd: "exampleDivdFfmnTpCd",
    dlngPdlsNm: "exampleDlngPdlsNm",
    frstRegstId: "exampleFrstRegstId",
    frstRgsrDttm: new Date(),
    hsCd: "exampleHsCd",
    hsErrPvntVal: "exampleHsErrPvntVal",
    hsExcpMtrCd: "exampleHsExcpMtrCd",
    id: "exampleId",
    lastChgDttm: new Date(),
    lastChprId: "exampleLastChprId",
    mdfyDgcnt: 42,
    mgDscnApreNo: "exampleMgDscnApreNo",
    nwprScarCmdtCd: "exampleNwprScarCmdtCd",
    oilTankNo: "exampleOilTankNo",
    orcyCntyCd: "exampleOrcyCntyCd",
    pckgDesc: "examplePckgDesc",
    pckgShmrMarkNo: "examplePckgShmrMarkNo",
    pdlsClsfBfhnJdgnPn: "examplePdlsClsfBfhnJdgnPn",
    pdlsNm: "examplePdlsNm",
    pdlsNo: "examplePdlsNo",
    pdlsNtwg: 42.42,
    pdlsPckgGcnt: 42,
    pdlsPckgUtCd: "examplePdlsPckgUtCd",
    pdlsTtwg: 42.42,
    prcDtrmMeanCd: "examplePrcDtrmMeanCd",
    prhbCmdtCd: "examplePrhbCmdtCd",
    prvlCd: "examplePrvlCd",
    psmgtFfmnXpirPrid: 42,
    qtaApreNo: "exampleQtaApreNo",
    qty: 42.42,
    qtyUtCd: "exampleQtyUtCd",
    reffNo: "exampleReffNo",
    regmRqstCd: "exampleRegmRqstCd",
    trifBaseVal: "exampleTrifBaseVal",
    updatedAt: new Date(),
    uprPdlsNo: "exampleUprPdlsNo",
    vhclYn: "exampleVhclYn",
  },
];
const FIND_ONE_RESULT = {
  aditTxQty: 42.42,
  aditTxQtyUtCd: "exampleAditTxQtyUtCd",
  apcAtpmEndDt: "exampleApcAtpmEndDt",
  apcAtpmStrtDt: "exampleApcAtpmStrtDt",
  apcCd: "exampleApcCd",
  bfDtlDcshDt: "exampleBfDtlDcshDt",
  bfDtlDcshNo: "exampleBfDtlDcshNo",
  bfPdlsNo: "exampleBfPdlsNo",
  brndNm: "exampleBrndNm",
  cmdtClsfSpelCd: "exampleCmdtClsfSpelCd",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  divdFfmnTpCd: "exampleDivdFfmnTpCd",
  dlngPdlsNm: "exampleDlngPdlsNm",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  hsCd: "exampleHsCd",
  hsErrPvntVal: "exampleHsErrPvntVal",
  hsExcpMtrCd: "exampleHsExcpMtrCd",
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  mgDscnApreNo: "exampleMgDscnApreNo",
  nwprScarCmdtCd: "exampleNwprScarCmdtCd",
  oilTankNo: "exampleOilTankNo",
  orcyCntyCd: "exampleOrcyCntyCd",
  pckgDesc: "examplePckgDesc",
  pckgShmrMarkNo: "examplePckgShmrMarkNo",
  pdlsClsfBfhnJdgnPn: "examplePdlsClsfBfhnJdgnPn",
  pdlsNm: "examplePdlsNm",
  pdlsNo: "examplePdlsNo",
  pdlsNtwg: 42.42,
  pdlsPckgGcnt: 42,
  pdlsPckgUtCd: "examplePdlsPckgUtCd",
  pdlsTtwg: 42.42,
  prcDtrmMeanCd: "examplePrcDtrmMeanCd",
  prhbCmdtCd: "examplePrhbCmdtCd",
  prvlCd: "examplePrvlCd",
  psmgtFfmnXpirPrid: 42,
  qtaApreNo: "exampleQtaApreNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  reffNo: "exampleReffNo",
  regmRqstCd: "exampleRegmRqstCd",
  trifBaseVal: "exampleTrifBaseVal",
  updatedAt: new Date(),
  uprPdlsNo: "exampleUprPdlsNo",
  vhclYn: "exampleVhclYn",
};

const service = {
  createTbClreDedPdls() {
    return CREATE_RESULT;
  },
  tbClreDedPdlsItems: () => FIND_MANY_RESULT,
  tbClreDedPdls: ({ where }: { where: { id: string } }) => {
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

describe("TbClreDedPdls", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TbClreDedPdlsService,
          useValue: service,
        },
      ],
      controllers: [TbClreDedPdlsController],
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

  test("POST /tbClreDedPdls", async () => {
    await request(app.getHttpServer())
      .post("/tbClreDedPdls")
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

  test("GET /tbClreDedPdls", async () => {
    await request(app.getHttpServer())
      .get("/tbClreDedPdls")
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

  test("GET /tbClreDedPdls/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tbClreDedPdls"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /tbClreDedPdls/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tbClreDedPdls"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: FIND_ONE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: FIND_ONE_RESULT.lastChgDttm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /tbClreDedPdls existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/tbClreDedPdls")
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
          .post("/tbClreDedPdls")
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
