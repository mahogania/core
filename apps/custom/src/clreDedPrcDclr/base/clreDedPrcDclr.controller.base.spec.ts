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
import { ClreDedPrcDclrController } from "../clreDedPrcDclr.controller";
import { ClreDedPrcDclrService } from "../clreDedPrcDclr.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  adcstBrkgAmt: 42.42,
  adcstCnsmCmdtCst: 42.42,
  adcstCtnrPckgCst: 42.42,
  adcstImpPortInfeeAmt: 42.42,
  adcstImpPortOtcst: 42.42,
  adcstImpPortTrcgAmt: 42.42,
  adcstMtrlCmpsFtorCst: 42.42,
  adcstPrcsCst: 42.42,
  adcstPuchCmisYn: "exampleAdcstPuchCmisYn",
  adcstRyltCst: 42.42,
  adcstSaleCmisYn: "exampleAdcstSaleCmisYn",
  adcstSelrRvrsAmt: 42.42,
  adcstTechDgnOtcst: 42.42,
  adcstToolOtcst: 42.42,
  adcstTrnpCst: 42.42,
  aditOpinCn: "exampleAditOpinCn",
  adtnCstSumAmt: 42.42,
  bfhnDtrmOfdcNo: "exampleBfhnDtrmOfdcNo",
  bfhnDtrmOfdcPblsDt: "exampleBfhnDtrmOfdcPblsDt",
  byerIdfyNo: "exampleByerIdfyNo",
  cputBssDlngPrc: 42.42,
  cputBssIndrAmt: 42.42,
  cputBssSumAmt: 42.42,
  createdAt: new Date(),
  cvntDt: "exampleCvntDt",
  cvntNo: "exampleCvntNo",
  dcerNm: "exampleDcerNm",
  dclrDt: "exampleDclrDt",
  dclrPlcNm: "exampleDclrPlcNm",
  dclrTxPrc: 42.42,
  ddctExpCntyTrifAmt: 42.42,
  ddctOtcst: 42.42,
  ddctOthsApmtAmt: 42.42,
  ddctSumAmt: 42.42,
  ddctTrnpCst: 42.42,
  delYn: "exampleDelYn",
  dlvrCondCd: "exampleDlvrCondCd",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  invcNo: "exampleInvcNo",
  invcPblsDt: "exampleInvcPblsDt",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  othsDesc: "exampleOthsDesc",
  quesRspn_1Yn: "exampleQuesRspn_1Yn",
  quesRspn_2Yn: "exampleQuesRspn_2Yn",
  quesRspn_3Yn: "exampleQuesRspn_3Yn",
  quesRspn_4Yn: "exampleQuesRspn_4Yn",
  quesRspn_5Yn: "exampleQuesRspn_5Yn",
  quesRspn_6Yn: "exampleQuesRspn_6Yn",
  quesRspn_7Yn: "exampleQuesRspn_7Yn",
  quesRspn_8Yn: "exampleQuesRspn_8Yn",
  reffNo: "exampleReffNo",
  rstcMtrCn: "exampleRstcMtrCn",
  selrNo: "exampleSelrNo",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  adcstBrkgAmt: 42.42,
  adcstCnsmCmdtCst: 42.42,
  adcstCtnrPckgCst: 42.42,
  adcstImpPortInfeeAmt: 42.42,
  adcstImpPortOtcst: 42.42,
  adcstImpPortTrcgAmt: 42.42,
  adcstMtrlCmpsFtorCst: 42.42,
  adcstPrcsCst: 42.42,
  adcstPuchCmisYn: "exampleAdcstPuchCmisYn",
  adcstRyltCst: 42.42,
  adcstSaleCmisYn: "exampleAdcstSaleCmisYn",
  adcstSelrRvrsAmt: 42.42,
  adcstTechDgnOtcst: 42.42,
  adcstToolOtcst: 42.42,
  adcstTrnpCst: 42.42,
  aditOpinCn: "exampleAditOpinCn",
  adtnCstSumAmt: 42.42,
  bfhnDtrmOfdcNo: "exampleBfhnDtrmOfdcNo",
  bfhnDtrmOfdcPblsDt: "exampleBfhnDtrmOfdcPblsDt",
  byerIdfyNo: "exampleByerIdfyNo",
  cputBssDlngPrc: 42.42,
  cputBssIndrAmt: 42.42,
  cputBssSumAmt: 42.42,
  createdAt: new Date(),
  cvntDt: "exampleCvntDt",
  cvntNo: "exampleCvntNo",
  dcerNm: "exampleDcerNm",
  dclrDt: "exampleDclrDt",
  dclrPlcNm: "exampleDclrPlcNm",
  dclrTxPrc: 42.42,
  ddctExpCntyTrifAmt: 42.42,
  ddctOtcst: 42.42,
  ddctOthsApmtAmt: 42.42,
  ddctSumAmt: 42.42,
  ddctTrnpCst: 42.42,
  delYn: "exampleDelYn",
  dlvrCondCd: "exampleDlvrCondCd",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  invcNo: "exampleInvcNo",
  invcPblsDt: "exampleInvcPblsDt",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  othsDesc: "exampleOthsDesc",
  quesRspn_1Yn: "exampleQuesRspn_1Yn",
  quesRspn_2Yn: "exampleQuesRspn_2Yn",
  quesRspn_3Yn: "exampleQuesRspn_3Yn",
  quesRspn_4Yn: "exampleQuesRspn_4Yn",
  quesRspn_5Yn: "exampleQuesRspn_5Yn",
  quesRspn_6Yn: "exampleQuesRspn_6Yn",
  quesRspn_7Yn: "exampleQuesRspn_7Yn",
  quesRspn_8Yn: "exampleQuesRspn_8Yn",
  reffNo: "exampleReffNo",
  rstcMtrCn: "exampleRstcMtrCn",
  selrNo: "exampleSelrNo",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    adcstBrkgAmt: 42.42,
    adcstCnsmCmdtCst: 42.42,
    adcstCtnrPckgCst: 42.42,
    adcstImpPortInfeeAmt: 42.42,
    adcstImpPortOtcst: 42.42,
    adcstImpPortTrcgAmt: 42.42,
    adcstMtrlCmpsFtorCst: 42.42,
    adcstPrcsCst: 42.42,
    adcstPuchCmisYn: "exampleAdcstPuchCmisYn",
    adcstRyltCst: 42.42,
    adcstSaleCmisYn: "exampleAdcstSaleCmisYn",
    adcstSelrRvrsAmt: 42.42,
    adcstTechDgnOtcst: 42.42,
    adcstToolOtcst: 42.42,
    adcstTrnpCst: 42.42,
    aditOpinCn: "exampleAditOpinCn",
    adtnCstSumAmt: 42.42,
    bfhnDtrmOfdcNo: "exampleBfhnDtrmOfdcNo",
    bfhnDtrmOfdcPblsDt: "exampleBfhnDtrmOfdcPblsDt",
    byerIdfyNo: "exampleByerIdfyNo",
    cputBssDlngPrc: 42.42,
    cputBssIndrAmt: 42.42,
    cputBssSumAmt: 42.42,
    createdAt: new Date(),
    cvntDt: "exampleCvntDt",
    cvntNo: "exampleCvntNo",
    dcerNm: "exampleDcerNm",
    dclrDt: "exampleDclrDt",
    dclrPlcNm: "exampleDclrPlcNm",
    dclrTxPrc: 42.42,
    ddctExpCntyTrifAmt: 42.42,
    ddctOtcst: 42.42,
    ddctOthsApmtAmt: 42.42,
    ddctSumAmt: 42.42,
    ddctTrnpCst: 42.42,
    delYn: "exampleDelYn",
    dlvrCondCd: "exampleDlvrCondCd",
    frstRegstId: "exampleFrstRegstId",
    frstRgsrDttm: new Date(),
    id: "exampleId",
    invcNo: "exampleInvcNo",
    invcPblsDt: "exampleInvcPblsDt",
    lastChgDttm: new Date(),
    lastChprId: "exampleLastChprId",
    mdfyDgcnt: 42,
    othsDesc: "exampleOthsDesc",
    quesRspn_1Yn: "exampleQuesRspn_1Yn",
    quesRspn_2Yn: "exampleQuesRspn_2Yn",
    quesRspn_3Yn: "exampleQuesRspn_3Yn",
    quesRspn_4Yn: "exampleQuesRspn_4Yn",
    quesRspn_5Yn: "exampleQuesRspn_5Yn",
    quesRspn_6Yn: "exampleQuesRspn_6Yn",
    quesRspn_7Yn: "exampleQuesRspn_7Yn",
    quesRspn_8Yn: "exampleQuesRspn_8Yn",
    reffNo: "exampleReffNo",
    rstcMtrCn: "exampleRstcMtrCn",
    selrNo: "exampleSelrNo",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  adcstBrkgAmt: 42.42,
  adcstCnsmCmdtCst: 42.42,
  adcstCtnrPckgCst: 42.42,
  adcstImpPortInfeeAmt: 42.42,
  adcstImpPortOtcst: 42.42,
  adcstImpPortTrcgAmt: 42.42,
  adcstMtrlCmpsFtorCst: 42.42,
  adcstPrcsCst: 42.42,
  adcstPuchCmisYn: "exampleAdcstPuchCmisYn",
  adcstRyltCst: 42.42,
  adcstSaleCmisYn: "exampleAdcstSaleCmisYn",
  adcstSelrRvrsAmt: 42.42,
  adcstTechDgnOtcst: 42.42,
  adcstToolOtcst: 42.42,
  adcstTrnpCst: 42.42,
  aditOpinCn: "exampleAditOpinCn",
  adtnCstSumAmt: 42.42,
  bfhnDtrmOfdcNo: "exampleBfhnDtrmOfdcNo",
  bfhnDtrmOfdcPblsDt: "exampleBfhnDtrmOfdcPblsDt",
  byerIdfyNo: "exampleByerIdfyNo",
  cputBssDlngPrc: 42.42,
  cputBssIndrAmt: 42.42,
  cputBssSumAmt: 42.42,
  createdAt: new Date(),
  cvntDt: "exampleCvntDt",
  cvntNo: "exampleCvntNo",
  dcerNm: "exampleDcerNm",
  dclrDt: "exampleDclrDt",
  dclrPlcNm: "exampleDclrPlcNm",
  dclrTxPrc: 42.42,
  ddctExpCntyTrifAmt: 42.42,
  ddctOtcst: 42.42,
  ddctOthsApmtAmt: 42.42,
  ddctSumAmt: 42.42,
  ddctTrnpCst: 42.42,
  delYn: "exampleDelYn",
  dlvrCondCd: "exampleDlvrCondCd",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  invcNo: "exampleInvcNo",
  invcPblsDt: "exampleInvcPblsDt",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  othsDesc: "exampleOthsDesc",
  quesRspn_1Yn: "exampleQuesRspn_1Yn",
  quesRspn_2Yn: "exampleQuesRspn_2Yn",
  quesRspn_3Yn: "exampleQuesRspn_3Yn",
  quesRspn_4Yn: "exampleQuesRspn_4Yn",
  quesRspn_5Yn: "exampleQuesRspn_5Yn",
  quesRspn_6Yn: "exampleQuesRspn_6Yn",
  quesRspn_7Yn: "exampleQuesRspn_7Yn",
  quesRspn_8Yn: "exampleQuesRspn_8Yn",
  reffNo: "exampleReffNo",
  rstcMtrCn: "exampleRstcMtrCn",
  selrNo: "exampleSelrNo",
  updatedAt: new Date(),
};

const service = {
  createClreDedPrcDclr() {
    return CREATE_RESULT;
  },
  clreDedPrcDclrs: () => FIND_MANY_RESULT,
  clreDedPrcDclr: ({ where }: { where: { id: string } }) => {
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

describe("ClreDedPrcDclr", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ClreDedPrcDclrService,
          useValue: service,
        },
      ],
      controllers: [ClreDedPrcDclrController],
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

  test("POST /clreDedPrcDclrs", async () => {
    await request(app.getHttpServer())
      .post("/clreDedPrcDclrs")
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

  test("GET /clreDedPrcDclrs", async () => {
    await request(app.getHttpServer())
      .get("/clreDedPrcDclrs")
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

  test("GET /clreDedPrcDclrs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/clreDedPrcDclrs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /clreDedPrcDclrs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/clreDedPrcDclrs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: FIND_ONE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: FIND_ONE_RESULT.lastChgDttm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /clreDedPrcDclrs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/clreDedPrcDclrs")
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
          .post("/clreDedPrcDclrs")
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
