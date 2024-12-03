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
import { CargoDeclarationController } from "../cargoDeclaration.controller";
import { CargoDeclarationService } from "../cargoDeclaration.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  abrdFrwrAddrNm: "exampleAbrdFrwrAddrNm",
  abrdFrwrEml: "exampleAbrdFrwrEml",
  abrdFrwrNm: "exampleAbrdFrwrNm",
  abrdFrwrTlphNo: "exampleAbrdFrwrTlphNo",
  alBlGcnt: 42,
  alCntrGcnt: 42,
  alEcntrCnt: 42,
  alHblGcnt: 42,
  alNtwg: 42.42,
  alPckgGcnt: 42,
  alTtwg: 42.42,
  alVhclGcnt: 42,
  apreYnCd: "exampleApreYnCd",
  arvlDttm: new Date(),
  atchFileId: "exampleAtchFileId",
  audtOpinCn: "exampleAudtOpinCn",
  bfCagMgmtNo: "exampleBfCagMgmtNo",
  blMdfyTpCd: "exampleBlMdfyTpCd",
  blNo: "exampleBlNo",
  blPblsDt: "exampleBlPblsDt",
  blPtCd: "exampleBlPtCd",
  blTpCd: "exampleBlTpCd",
  cagChrcCd: "exampleCagChrcCd",
  cagDcshRgsrMgmtNo: "exampleCagDcshRgsrMgmtNo",
  cagMgmtNo: "exampleCagMgmtNo",
  cagRqstTpCd: "exampleCagRqstTpCd",
  cagTpCd: "exampleCagTpCd",
  carrAddrNm: "exampleCarrAddrNm",
  carrCd: "exampleCarrCd",
  casNo: "exampleCasNo",
  cbmVol: 42.42,
  cherAddrNm: "exampleCherAddrNm",
  cherGvnmNm: "exampleCherGvnmNm",
  cherYn: "exampleCherYn",
  cmdtAmt: 42.42,
  cmdtAmtCurrCd: "exampleCmdtAmtCurrCd",
  cmdtKndCd: "exampleCmdtKndCd",
  cnsiAddrNm: "exampleCnsiAddrNm",
  cnsiEml: "exampleCnsiEml",
  cnsiNm: "exampleCnsiNm",
  cnsiTlphNo: "exampleCnsiTlphNo",
  cnsiTxprIdfyNo: "exampleCnsiTxprIdfyNo",
  cnsiTxprIdfyNoNin: "exampleCnsiTxprIdfyNoNin",
  cntrGcnt: 42,
  coRqstNo: "exampleCoRqstNo",
  coatTrnpYn: "exampleCoatTrnpYn",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  dptrDttm: new Date(),
  dptrPortCd: "exampleDptrPortCd",
  drvrNm: "exampleDrvrNm",
  ecntrWght: 42.42,
  eurFxrt: 42.42,
  exppnAddrNm: "exampleExppnAddrNm",
  exppnEml: "exampleExppnEml",
  exppnNm: "exampleExppnNm",
  exppnTlphNo: "exampleExppnTlphNo",
  exppnTxprIdfyNo: "exampleExppnTxprIdfyNo",
  exppnTxprIdfyNoNin: "exampleExppnTxprIdfyNoNin",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  frwrCd: "exampleFrwrCd",
  hblNo: "exampleHblNo",
  hdcbTpCd: "exampleHdcbTpCd",
  hsCd: "exampleHsCd",
  hsn: "exampleHsn",
  ibobzCd: "exampleIbobzCd",
  id: "exampleId",
  imoNo: "exampleImoNo",
  jrsdOrgnCd: "exampleJrsdOrgnCd",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  lastLdunDt: "exampleLastLdunDt",
  lastThrgPortCd: "exampleLastThrgPortCd",
  ldunBlGcnt: 42,
  ldunPortCd: "exampleLdunPortCd",
  ldunRegnCd: "exampleLdunRegnCd",
  ldunYn: "exampleLdunYn",
  lirVol: 42.42,
  loadRegnCd: "exampleLoadRegnCd",
  ltspYn: "exampleLtspYn",
  mrn: "exampleMrn",
  msgPrcsSttsCd: "exampleMsgPrcsSttsCd",
  msn: "exampleMsn",
  ntprAddrNm: "exampleNtprAddrNm",
  ntprEml: "exampleNtprEml",
  ntprNm: "exampleNtprNm",
  ntprTlphNo: "exampleNtprTlphNo",
  ntwg: 42.42,
  pckgGcnt: 42,
  pckgUtCd: "examplePckgUtCd",
  pdlsNm: "examplePdlsNm",
  prpmDfpmCachTpCd: "examplePrpmDfpmCachTpCd",
  realArvlDttm: new Date(),
  rmrkCn: "exampleRmrkCn",
  selcTrgtYn: "exampleSelcTrgtYn",
  sendWay: "exampleSendWay",
  shipNttn: 42.42,
  shipTtn: 42.42,
  shmrCn: "exampleShmrCn",
  stvdCd: "exampleStvdCd",
  trnhRegnCd: "exampleTrnhRegnCd",
  trnpMeanCd: "exampleTrnpMeanCd",
  trnpMethIdfyNo: "exampleTrnpMethIdfyNo",
  trnpMethLoctNm: "exampleTrnpMethLoctNm",
  trnpMethNatCd: "exampleTrnpMethNatCd",
  trnpMethNm: "exampleTrnpMethNm",
  trnpMethRgsrDt: "exampleTrnpMethRgsrDt",
  trnpRferNo: "exampleTrnpRferNo",
  trsnCoCd: "exampleTrsnCoCd",
  trsnDttm: new Date(),
  ttwg: 42.42,
  undgGdCd: "exampleUndgGdCd",
  undgId: "exampleUndgId",
  updatedAt: new Date(),
  usdFxrt: 42.42,
  vhclGcnt: 42,
};
const CREATE_RESULT = {
  abrdFrwrAddrNm: "exampleAbrdFrwrAddrNm",
  abrdFrwrEml: "exampleAbrdFrwrEml",
  abrdFrwrNm: "exampleAbrdFrwrNm",
  abrdFrwrTlphNo: "exampleAbrdFrwrTlphNo",
  alBlGcnt: 42,
  alCntrGcnt: 42,
  alEcntrCnt: 42,
  alHblGcnt: 42,
  alNtwg: 42.42,
  alPckgGcnt: 42,
  alTtwg: 42.42,
  alVhclGcnt: 42,
  apreYnCd: "exampleApreYnCd",
  arvlDttm: new Date(),
  atchFileId: "exampleAtchFileId",
  audtOpinCn: "exampleAudtOpinCn",
  bfCagMgmtNo: "exampleBfCagMgmtNo",
  blMdfyTpCd: "exampleBlMdfyTpCd",
  blNo: "exampleBlNo",
  blPblsDt: "exampleBlPblsDt",
  blPtCd: "exampleBlPtCd",
  blTpCd: "exampleBlTpCd",
  cagChrcCd: "exampleCagChrcCd",
  cagDcshRgsrMgmtNo: "exampleCagDcshRgsrMgmtNo",
  cagMgmtNo: "exampleCagMgmtNo",
  cagRqstTpCd: "exampleCagRqstTpCd",
  cagTpCd: "exampleCagTpCd",
  carrAddrNm: "exampleCarrAddrNm",
  carrCd: "exampleCarrCd",
  casNo: "exampleCasNo",
  cbmVol: 42.42,
  cherAddrNm: "exampleCherAddrNm",
  cherGvnmNm: "exampleCherGvnmNm",
  cherYn: "exampleCherYn",
  cmdtAmt: 42.42,
  cmdtAmtCurrCd: "exampleCmdtAmtCurrCd",
  cmdtKndCd: "exampleCmdtKndCd",
  cnsiAddrNm: "exampleCnsiAddrNm",
  cnsiEml: "exampleCnsiEml",
  cnsiNm: "exampleCnsiNm",
  cnsiTlphNo: "exampleCnsiTlphNo",
  cnsiTxprIdfyNo: "exampleCnsiTxprIdfyNo",
  cnsiTxprIdfyNoNin: "exampleCnsiTxprIdfyNoNin",
  cntrGcnt: 42,
  coRqstNo: "exampleCoRqstNo",
  coatTrnpYn: "exampleCoatTrnpYn",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  dptrDttm: new Date(),
  dptrPortCd: "exampleDptrPortCd",
  drvrNm: "exampleDrvrNm",
  ecntrWght: 42.42,
  eurFxrt: 42.42,
  exppnAddrNm: "exampleExppnAddrNm",
  exppnEml: "exampleExppnEml",
  exppnNm: "exampleExppnNm",
  exppnTlphNo: "exampleExppnTlphNo",
  exppnTxprIdfyNo: "exampleExppnTxprIdfyNo",
  exppnTxprIdfyNoNin: "exampleExppnTxprIdfyNoNin",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  frwrCd: "exampleFrwrCd",
  hblNo: "exampleHblNo",
  hdcbTpCd: "exampleHdcbTpCd",
  hsCd: "exampleHsCd",
  hsn: "exampleHsn",
  ibobzCd: "exampleIbobzCd",
  id: "exampleId",
  imoNo: "exampleImoNo",
  jrsdOrgnCd: "exampleJrsdOrgnCd",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  lastLdunDt: "exampleLastLdunDt",
  lastThrgPortCd: "exampleLastThrgPortCd",
  ldunBlGcnt: 42,
  ldunPortCd: "exampleLdunPortCd",
  ldunRegnCd: "exampleLdunRegnCd",
  ldunYn: "exampleLdunYn",
  lirVol: 42.42,
  loadRegnCd: "exampleLoadRegnCd",
  ltspYn: "exampleLtspYn",
  mrn: "exampleMrn",
  msgPrcsSttsCd: "exampleMsgPrcsSttsCd",
  msn: "exampleMsn",
  ntprAddrNm: "exampleNtprAddrNm",
  ntprEml: "exampleNtprEml",
  ntprNm: "exampleNtprNm",
  ntprTlphNo: "exampleNtprTlphNo",
  ntwg: 42.42,
  pckgGcnt: 42,
  pckgUtCd: "examplePckgUtCd",
  pdlsNm: "examplePdlsNm",
  prpmDfpmCachTpCd: "examplePrpmDfpmCachTpCd",
  realArvlDttm: new Date(),
  rmrkCn: "exampleRmrkCn",
  selcTrgtYn: "exampleSelcTrgtYn",
  sendWay: "exampleSendWay",
  shipNttn: 42.42,
  shipTtn: 42.42,
  shmrCn: "exampleShmrCn",
  stvdCd: "exampleStvdCd",
  trnhRegnCd: "exampleTrnhRegnCd",
  trnpMeanCd: "exampleTrnpMeanCd",
  trnpMethIdfyNo: "exampleTrnpMethIdfyNo",
  trnpMethLoctNm: "exampleTrnpMethLoctNm",
  trnpMethNatCd: "exampleTrnpMethNatCd",
  trnpMethNm: "exampleTrnpMethNm",
  trnpMethRgsrDt: "exampleTrnpMethRgsrDt",
  trnpRferNo: "exampleTrnpRferNo",
  trsnCoCd: "exampleTrsnCoCd",
  trsnDttm: new Date(),
  ttwg: 42.42,
  undgGdCd: "exampleUndgGdCd",
  undgId: "exampleUndgId",
  updatedAt: new Date(),
  usdFxrt: 42.42,
  vhclGcnt: 42,
};
const FIND_MANY_RESULT = [
  {
    abrdFrwrAddrNm: "exampleAbrdFrwrAddrNm",
    abrdFrwrEml: "exampleAbrdFrwrEml",
    abrdFrwrNm: "exampleAbrdFrwrNm",
    abrdFrwrTlphNo: "exampleAbrdFrwrTlphNo",
    alBlGcnt: 42,
    alCntrGcnt: 42,
    alEcntrCnt: 42,
    alHblGcnt: 42,
    alNtwg: 42.42,
    alPckgGcnt: 42,
    alTtwg: 42.42,
    alVhclGcnt: 42,
    apreYnCd: "exampleApreYnCd",
    arvlDttm: new Date(),
    atchFileId: "exampleAtchFileId",
    audtOpinCn: "exampleAudtOpinCn",
    bfCagMgmtNo: "exampleBfCagMgmtNo",
    blMdfyTpCd: "exampleBlMdfyTpCd",
    blNo: "exampleBlNo",
    blPblsDt: "exampleBlPblsDt",
    blPtCd: "exampleBlPtCd",
    blTpCd: "exampleBlTpCd",
    cagChrcCd: "exampleCagChrcCd",
    cagDcshRgsrMgmtNo: "exampleCagDcshRgsrMgmtNo",
    cagMgmtNo: "exampleCagMgmtNo",
    cagRqstTpCd: "exampleCagRqstTpCd",
    cagTpCd: "exampleCagTpCd",
    carrAddrNm: "exampleCarrAddrNm",
    carrCd: "exampleCarrCd",
    casNo: "exampleCasNo",
    cbmVol: 42.42,
    cherAddrNm: "exampleCherAddrNm",
    cherGvnmNm: "exampleCherGvnmNm",
    cherYn: "exampleCherYn",
    cmdtAmt: 42.42,
    cmdtAmtCurrCd: "exampleCmdtAmtCurrCd",
    cmdtKndCd: "exampleCmdtKndCd",
    cnsiAddrNm: "exampleCnsiAddrNm",
    cnsiEml: "exampleCnsiEml",
    cnsiNm: "exampleCnsiNm",
    cnsiTlphNo: "exampleCnsiTlphNo",
    cnsiTxprIdfyNo: "exampleCnsiTxprIdfyNo",
    cnsiTxprIdfyNoNin: "exampleCnsiTxprIdfyNoNin",
    cntrGcnt: 42,
    coRqstNo: "exampleCoRqstNo",
    coatTrnpYn: "exampleCoatTrnpYn",
    createdAt: new Date(),
    delYn: "exampleDelYn",
    dptrDttm: new Date(),
    dptrPortCd: "exampleDptrPortCd",
    drvrNm: "exampleDrvrNm",
    ecntrWght: 42.42,
    eurFxrt: 42.42,
    exppnAddrNm: "exampleExppnAddrNm",
    exppnEml: "exampleExppnEml",
    exppnNm: "exampleExppnNm",
    exppnTlphNo: "exampleExppnTlphNo",
    exppnTxprIdfyNo: "exampleExppnTxprIdfyNo",
    exppnTxprIdfyNoNin: "exampleExppnTxprIdfyNoNin",
    frstRegstId: "exampleFrstRegstId",
    frstRgsrDttm: new Date(),
    frwrCd: "exampleFrwrCd",
    hblNo: "exampleHblNo",
    hdcbTpCd: "exampleHdcbTpCd",
    hsCd: "exampleHsCd",
    hsn: "exampleHsn",
    ibobzCd: "exampleIbobzCd",
    id: "exampleId",
    imoNo: "exampleImoNo",
    jrsdOrgnCd: "exampleJrsdOrgnCd",
    lastChgDttm: new Date(),
    lastChprId: "exampleLastChprId",
    lastLdunDt: "exampleLastLdunDt",
    lastThrgPortCd: "exampleLastThrgPortCd",
    ldunBlGcnt: 42,
    ldunPortCd: "exampleLdunPortCd",
    ldunRegnCd: "exampleLdunRegnCd",
    ldunYn: "exampleLdunYn",
    lirVol: 42.42,
    loadRegnCd: "exampleLoadRegnCd",
    ltspYn: "exampleLtspYn",
    mrn: "exampleMrn",
    msgPrcsSttsCd: "exampleMsgPrcsSttsCd",
    msn: "exampleMsn",
    ntprAddrNm: "exampleNtprAddrNm",
    ntprEml: "exampleNtprEml",
    ntprNm: "exampleNtprNm",
    ntprTlphNo: "exampleNtprTlphNo",
    ntwg: 42.42,
    pckgGcnt: 42,
    pckgUtCd: "examplePckgUtCd",
    pdlsNm: "examplePdlsNm",
    prpmDfpmCachTpCd: "examplePrpmDfpmCachTpCd",
    realArvlDttm: new Date(),
    rmrkCn: "exampleRmrkCn",
    selcTrgtYn: "exampleSelcTrgtYn",
    sendWay: "exampleSendWay",
    shipNttn: 42.42,
    shipTtn: 42.42,
    shmrCn: "exampleShmrCn",
    stvdCd: "exampleStvdCd",
    trnhRegnCd: "exampleTrnhRegnCd",
    trnpMeanCd: "exampleTrnpMeanCd",
    trnpMethIdfyNo: "exampleTrnpMethIdfyNo",
    trnpMethLoctNm: "exampleTrnpMethLoctNm",
    trnpMethNatCd: "exampleTrnpMethNatCd",
    trnpMethNm: "exampleTrnpMethNm",
    trnpMethRgsrDt: "exampleTrnpMethRgsrDt",
    trnpRferNo: "exampleTrnpRferNo",
    trsnCoCd: "exampleTrsnCoCd",
    trsnDttm: new Date(),
    ttwg: 42.42,
    undgGdCd: "exampleUndgGdCd",
    undgId: "exampleUndgId",
    updatedAt: new Date(),
    usdFxrt: 42.42,
    vhclGcnt: 42,
  },
];
const FIND_ONE_RESULT = {
  abrdFrwrAddrNm: "exampleAbrdFrwrAddrNm",
  abrdFrwrEml: "exampleAbrdFrwrEml",
  abrdFrwrNm: "exampleAbrdFrwrNm",
  abrdFrwrTlphNo: "exampleAbrdFrwrTlphNo",
  alBlGcnt: 42,
  alCntrGcnt: 42,
  alEcntrCnt: 42,
  alHblGcnt: 42,
  alNtwg: 42.42,
  alPckgGcnt: 42,
  alTtwg: 42.42,
  alVhclGcnt: 42,
  apreYnCd: "exampleApreYnCd",
  arvlDttm: new Date(),
  atchFileId: "exampleAtchFileId",
  audtOpinCn: "exampleAudtOpinCn",
  bfCagMgmtNo: "exampleBfCagMgmtNo",
  blMdfyTpCd: "exampleBlMdfyTpCd",
  blNo: "exampleBlNo",
  blPblsDt: "exampleBlPblsDt",
  blPtCd: "exampleBlPtCd",
  blTpCd: "exampleBlTpCd",
  cagChrcCd: "exampleCagChrcCd",
  cagDcshRgsrMgmtNo: "exampleCagDcshRgsrMgmtNo",
  cagMgmtNo: "exampleCagMgmtNo",
  cagRqstTpCd: "exampleCagRqstTpCd",
  cagTpCd: "exampleCagTpCd",
  carrAddrNm: "exampleCarrAddrNm",
  carrCd: "exampleCarrCd",
  casNo: "exampleCasNo",
  cbmVol: 42.42,
  cherAddrNm: "exampleCherAddrNm",
  cherGvnmNm: "exampleCherGvnmNm",
  cherYn: "exampleCherYn",
  cmdtAmt: 42.42,
  cmdtAmtCurrCd: "exampleCmdtAmtCurrCd",
  cmdtKndCd: "exampleCmdtKndCd",
  cnsiAddrNm: "exampleCnsiAddrNm",
  cnsiEml: "exampleCnsiEml",
  cnsiNm: "exampleCnsiNm",
  cnsiTlphNo: "exampleCnsiTlphNo",
  cnsiTxprIdfyNo: "exampleCnsiTxprIdfyNo",
  cnsiTxprIdfyNoNin: "exampleCnsiTxprIdfyNoNin",
  cntrGcnt: 42,
  coRqstNo: "exampleCoRqstNo",
  coatTrnpYn: "exampleCoatTrnpYn",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  dptrDttm: new Date(),
  dptrPortCd: "exampleDptrPortCd",
  drvrNm: "exampleDrvrNm",
  ecntrWght: 42.42,
  eurFxrt: 42.42,
  exppnAddrNm: "exampleExppnAddrNm",
  exppnEml: "exampleExppnEml",
  exppnNm: "exampleExppnNm",
  exppnTlphNo: "exampleExppnTlphNo",
  exppnTxprIdfyNo: "exampleExppnTxprIdfyNo",
  exppnTxprIdfyNoNin: "exampleExppnTxprIdfyNoNin",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  frwrCd: "exampleFrwrCd",
  hblNo: "exampleHblNo",
  hdcbTpCd: "exampleHdcbTpCd",
  hsCd: "exampleHsCd",
  hsn: "exampleHsn",
  ibobzCd: "exampleIbobzCd",
  id: "exampleId",
  imoNo: "exampleImoNo",
  jrsdOrgnCd: "exampleJrsdOrgnCd",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  lastLdunDt: "exampleLastLdunDt",
  lastThrgPortCd: "exampleLastThrgPortCd",
  ldunBlGcnt: 42,
  ldunPortCd: "exampleLdunPortCd",
  ldunRegnCd: "exampleLdunRegnCd",
  ldunYn: "exampleLdunYn",
  lirVol: 42.42,
  loadRegnCd: "exampleLoadRegnCd",
  ltspYn: "exampleLtspYn",
  mrn: "exampleMrn",
  msgPrcsSttsCd: "exampleMsgPrcsSttsCd",
  msn: "exampleMsn",
  ntprAddrNm: "exampleNtprAddrNm",
  ntprEml: "exampleNtprEml",
  ntprNm: "exampleNtprNm",
  ntprTlphNo: "exampleNtprTlphNo",
  ntwg: 42.42,
  pckgGcnt: 42,
  pckgUtCd: "examplePckgUtCd",
  pdlsNm: "examplePdlsNm",
  prpmDfpmCachTpCd: "examplePrpmDfpmCachTpCd",
  realArvlDttm: new Date(),
  rmrkCn: "exampleRmrkCn",
  selcTrgtYn: "exampleSelcTrgtYn",
  sendWay: "exampleSendWay",
  shipNttn: 42.42,
  shipTtn: 42.42,
  shmrCn: "exampleShmrCn",
  stvdCd: "exampleStvdCd",
  trnhRegnCd: "exampleTrnhRegnCd",
  trnpMeanCd: "exampleTrnpMeanCd",
  trnpMethIdfyNo: "exampleTrnpMethIdfyNo",
  trnpMethLoctNm: "exampleTrnpMethLoctNm",
  trnpMethNatCd: "exampleTrnpMethNatCd",
  trnpMethNm: "exampleTrnpMethNm",
  trnpMethRgsrDt: "exampleTrnpMethRgsrDt",
  trnpRferNo: "exampleTrnpRferNo",
  trsnCoCd: "exampleTrsnCoCd",
  trsnDttm: new Date(),
  ttwg: 42.42,
  undgGdCd: "exampleUndgGdCd",
  undgId: "exampleUndgId",
  updatedAt: new Date(),
  usdFxrt: 42.42,
  vhclGcnt: 42,
};

const service = {
  createCargoDeclaration() {
    return CREATE_RESULT;
  },
  cargoDeclarations: () => FIND_MANY_RESULT,
  cargoDeclaration: ({ where }: { where: { id: string } }) => {
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

describe("CargoDeclaration", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CargoDeclarationService,
          useValue: service,
        },
      ],
      controllers: [CargoDeclarationController],
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

  test("POST /cargoDeclarations", async () => {
    await request(app.getHttpServer())
      .post("/cargoDeclarations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        arvlDttm: CREATE_RESULT.arvlDttm.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dptrDttm: CREATE_RESULT.dptrDttm.toISOString(),
        frstRgsrDttm: CREATE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: CREATE_RESULT.lastChgDttm.toISOString(),
        realArvlDttm: CREATE_RESULT.realArvlDttm.toISOString(),
        trsnDttm: CREATE_RESULT.trsnDttm.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /cargoDeclarations", async () => {
    await request(app.getHttpServer())
      .get("/cargoDeclarations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          arvlDttm: FIND_MANY_RESULT[0].arvlDttm.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dptrDttm: FIND_MANY_RESULT[0].dptrDttm.toISOString(),
          frstRgsrDttm: FIND_MANY_RESULT[0].frstRgsrDttm.toISOString(),
          lastChgDttm: FIND_MANY_RESULT[0].lastChgDttm.toISOString(),
          realArvlDttm: FIND_MANY_RESULT[0].realArvlDttm.toISOString(),
          trsnDttm: FIND_MANY_RESULT[0].trsnDttm.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /cargoDeclarations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cargoDeclarations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cargoDeclarations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cargoDeclarations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        arvlDttm: FIND_ONE_RESULT.arvlDttm.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dptrDttm: FIND_ONE_RESULT.dptrDttm.toISOString(),
        frstRgsrDttm: FIND_ONE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: FIND_ONE_RESULT.lastChgDttm.toISOString(),
        realArvlDttm: FIND_ONE_RESULT.realArvlDttm.toISOString(),
        trsnDttm: FIND_ONE_RESULT.trsnDttm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /cargoDeclarations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/cargoDeclarations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        arvlDttm: CREATE_RESULT.arvlDttm.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dptrDttm: CREATE_RESULT.dptrDttm.toISOString(),
        frstRgsrDttm: CREATE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: CREATE_RESULT.lastChgDttm.toISOString(),
        realArvlDttm: CREATE_RESULT.realArvlDttm.toISOString(),
        trsnDttm: CREATE_RESULT.trsnDttm.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/cargoDeclarations")
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
