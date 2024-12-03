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
import { ClearanceDeclarationController } from "../clearanceDeclaration.controller";
import { ClearanceDeclarationService } from "../clearanceDeclaration.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  aditTxQty: 42.42,
  aditTxQtyUtCd: "exampleAditTxQtyUtCd",
  alNtwg: 42.42,
  alTtwg: 42.42,
  apcAtpmEndDt: "exampleApcAtpmEndDt",
  apcAtpmStrtDt: "exampleApcAtpmStrtDt",
  apcCd: "exampleApcCd",
  arvlDt: "exampleArvlDt",
  bfBnbnCmdtWrhsCd: "exampleBfBnbnCmdtWrhsCd",
  bfDtlDcshDt: "exampleBfDtlDcshDt",
  bfDtlDcshNo: "exampleBfDtlDcshNo",
  bfPdlsNo: "exampleBfPdlsNo",
  blDt: "exampleBlDt",
  blNo: "exampleBlNo",
  bnbnCmdtWrhsCd: "exampleBnbnCmdtWrhsCd",
  brndNm: "exampleBrndNm",
  cagMgmtNo: "exampleCagMgmtNo",
  cmdtClsfSpelCd: "exampleCmdtClsfSpelCd",
  cmdtStgeLoctCd: "exampleCmdtStgeLoctCd",
  cntrCagYn: "exampleCntrCagYn",
  cntrGcnt: 42,
  createdAt: new Date(),
  csclPlnCd: "exampleCsclPlnCd",
  csmCntyCd: "exampleCsmCntyCd",
  dcerCd: "exampleDcerCd",
  dcerWrteCn: "exampleDcerWrteCn",
  dclrCstmCd: "exampleDclrCstmCd",
  dclrPtCd: "exampleDclrPtCd",
  dcrdYn: "exampleDcrdYn",
  dcshFmCd: "exampleDcshFmCd",
  delYn: "exampleDelYn",
  deptCd: "exampleDeptCd",
  disprCd: "exampleDisprCd",
  divdCsclTpCd: "exampleDivdCsclTpCd",
  divdFfmnTpCd: "exampleDivdFfmnTpCd",
  dlngCond1Cd: "exampleDlngCond1Cd",
  dlngCond2Cd: "exampleDlngCond2Cd",
  dlngPdlsNm: "exampleDlngPdlsNm",
  dlngPymnMeanCd: "exampleDlngPymnMeanCd",
  dlvrCondCd: "exampleDlvrCondCd",
  dlvrPlcCd: "exampleDlvrPlcCd",
  dstnCntyCd: "exampleDstnCntyCd",
  dstnRegnCd: "exampleDstnRegnCd",
  dtlDcshNo: "exampleDtlDcshNo",
  epcCd: "exampleEpcCd",
  expCntyCd: "exampleExpCntyCd",
  exppnCmrcRegsNo: "exampleExppnCmrcRegsNo",
  exppnIdfyNo: "exampleExppnIdfyNo",
  exppnIdfyNoTpCd: "exampleExppnIdfyNoTpCd",
  frstDclrDt: "exampleFrstDclrDt",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  hsCd: "exampleHsCd",
  hsErrPvntVal: "exampleHsErrPvntVal",
  hsExcpMtrCd: "exampleHsExcpMtrCd",
  id: "exampleId",
  imppnCmrcRegsNo: "exampleImppnCmrcRegsNo",
  imppnIdfyNo: "exampleImppnIdfyNo",
  imppnIdfyNoTpCd: "exampleImppnIdfyNoTpCd",
  invcNo: "exampleInvcNo",
  invcPblsDt: "exampleInvcPblsDt",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  lastYn: "exampleLastYn",
  ldnpCd: "exampleLdnpCd",
  ldunDt: "exampleLdunDt",
  mdfyDgcnt: 42,
  mdfyRsnCd: "exampleMdfyRsnCd",
  mdfyRsnCn: "exampleMdfyRsnCn",
  mgDscnApreNo: "exampleMgDscnApreNo",
  nwprScarCmdtCd: "exampleNwprScarCmdtCd",
  oilTankNo: "exampleOilTankNo",
  orcyCntyCd: "exampleOrcyCntyCd",
  owhsPrcEvYn: "exampleOwhsPrcEvYn",
  pckgDesc: "examplePckgDesc",
  pckgShmrMarkNo: "examplePckgShmrMarkNo",
  pckgTgcnt: 42,
  pdlsClsfBfhnJdgnPn: "examplePdlsClsfBfhnJdgnPn",
  pdlsGcnt: 42,
  pdlsNm: "examplePdlsNm",
  pdlsNo: "examplePdlsNo",
  pdlsNtwg: 42.42,
  pdlsPckgGcnt: 42,
  pdlsPckgUtCd: "examplePdlsPckgUtCd",
  pdlsTtwg: 42.42,
  prcDcshWrteYn: "examplePrcDcshWrteYn",
  prcDtrmMeanCd: "examplePrcDtrmMeanCd",
  prhbCmdtCd: "examplePrhbCmdtCd",
  prmsntDt: "examplePrmsntDt",
  prmsntSttsCd: "examplePrmsntSttsCd",
  prvlCd: "examplePrvlCd",
  psmgtFfmnXpirPrid: 42,
  psnrPrcsCn: "examplePsnrPrcsCn",
  psnrReffNo: "examplePsnrReffNo",
  pymnAcNo: "examplePymnAcNo",
  pymnBnkBrnhCd: "examplePymnBnkBrnhCd",
  pymnBnkCd: "examplePymnBnkCd",
  pymnMeanCd: "examplePymnMeanCd",
  qtaApreNo: "exampleQtaApreNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  refNo: "exampleRefNo",
  reffNo: "exampleReffNo",
  regmRqstCd: "exampleRegmRqstCd",
  rethink: 42,
  rlbrCstmCd: "exampleRlbrCstmCd",
  rqstDt: "exampleRqstDt",
  shipNm: "exampleShipNm",
  sysUseSs: 42,
  trdeDlngCntyCd: "exampleTrdeDlngCntyCd",
  trifBaseVal: "exampleTrifBaseVal",
  trnpMethIdfyNo: "exampleTrnpMethIdfyNo",
  trnpMethKndCd: "exampleTrnpMethKndCd",
  trnpMethNatCd: "exampleTrnpMethNatCd",
  txprCmrcRegsNo: "exampleTxprCmrcRegsNo",
  txprIdfyNo: "exampleTxprIdfyNo",
  updatedAt: new Date(),
  uprPdlsNo: "exampleUprPdlsNo",
  vhclYn: "exampleVhclYn",
  wkngPtCd: "exampleWkngPtCd",
};
const CREATE_RESULT = {
  aditTxQty: 42.42,
  aditTxQtyUtCd: "exampleAditTxQtyUtCd",
  alNtwg: 42.42,
  alTtwg: 42.42,
  apcAtpmEndDt: "exampleApcAtpmEndDt",
  apcAtpmStrtDt: "exampleApcAtpmStrtDt",
  apcCd: "exampleApcCd",
  arvlDt: "exampleArvlDt",
  bfBnbnCmdtWrhsCd: "exampleBfBnbnCmdtWrhsCd",
  bfDtlDcshDt: "exampleBfDtlDcshDt",
  bfDtlDcshNo: "exampleBfDtlDcshNo",
  bfPdlsNo: "exampleBfPdlsNo",
  blDt: "exampleBlDt",
  blNo: "exampleBlNo",
  bnbnCmdtWrhsCd: "exampleBnbnCmdtWrhsCd",
  brndNm: "exampleBrndNm",
  cagMgmtNo: "exampleCagMgmtNo",
  cmdtClsfSpelCd: "exampleCmdtClsfSpelCd",
  cmdtStgeLoctCd: "exampleCmdtStgeLoctCd",
  cntrCagYn: "exampleCntrCagYn",
  cntrGcnt: 42,
  createdAt: new Date(),
  csclPlnCd: "exampleCsclPlnCd",
  csmCntyCd: "exampleCsmCntyCd",
  dcerCd: "exampleDcerCd",
  dcerWrteCn: "exampleDcerWrteCn",
  dclrCstmCd: "exampleDclrCstmCd",
  dclrPtCd: "exampleDclrPtCd",
  dcrdYn: "exampleDcrdYn",
  dcshFmCd: "exampleDcshFmCd",
  delYn: "exampleDelYn",
  deptCd: "exampleDeptCd",
  disprCd: "exampleDisprCd",
  divdCsclTpCd: "exampleDivdCsclTpCd",
  divdFfmnTpCd: "exampleDivdFfmnTpCd",
  dlngCond1Cd: "exampleDlngCond1Cd",
  dlngCond2Cd: "exampleDlngCond2Cd",
  dlngPdlsNm: "exampleDlngPdlsNm",
  dlngPymnMeanCd: "exampleDlngPymnMeanCd",
  dlvrCondCd: "exampleDlvrCondCd",
  dlvrPlcCd: "exampleDlvrPlcCd",
  dstnCntyCd: "exampleDstnCntyCd",
  dstnRegnCd: "exampleDstnRegnCd",
  dtlDcshNo: "exampleDtlDcshNo",
  epcCd: "exampleEpcCd",
  expCntyCd: "exampleExpCntyCd",
  exppnCmrcRegsNo: "exampleExppnCmrcRegsNo",
  exppnIdfyNo: "exampleExppnIdfyNo",
  exppnIdfyNoTpCd: "exampleExppnIdfyNoTpCd",
  frstDclrDt: "exampleFrstDclrDt",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  hsCd: "exampleHsCd",
  hsErrPvntVal: "exampleHsErrPvntVal",
  hsExcpMtrCd: "exampleHsExcpMtrCd",
  id: "exampleId",
  imppnCmrcRegsNo: "exampleImppnCmrcRegsNo",
  imppnIdfyNo: "exampleImppnIdfyNo",
  imppnIdfyNoTpCd: "exampleImppnIdfyNoTpCd",
  invcNo: "exampleInvcNo",
  invcPblsDt: "exampleInvcPblsDt",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  lastYn: "exampleLastYn",
  ldnpCd: "exampleLdnpCd",
  ldunDt: "exampleLdunDt",
  mdfyDgcnt: 42,
  mdfyRsnCd: "exampleMdfyRsnCd",
  mdfyRsnCn: "exampleMdfyRsnCn",
  mgDscnApreNo: "exampleMgDscnApreNo",
  nwprScarCmdtCd: "exampleNwprScarCmdtCd",
  oilTankNo: "exampleOilTankNo",
  orcyCntyCd: "exampleOrcyCntyCd",
  owhsPrcEvYn: "exampleOwhsPrcEvYn",
  pckgDesc: "examplePckgDesc",
  pckgShmrMarkNo: "examplePckgShmrMarkNo",
  pckgTgcnt: 42,
  pdlsClsfBfhnJdgnPn: "examplePdlsClsfBfhnJdgnPn",
  pdlsGcnt: 42,
  pdlsNm: "examplePdlsNm",
  pdlsNo: "examplePdlsNo",
  pdlsNtwg: 42.42,
  pdlsPckgGcnt: 42,
  pdlsPckgUtCd: "examplePdlsPckgUtCd",
  pdlsTtwg: 42.42,
  prcDcshWrteYn: "examplePrcDcshWrteYn",
  prcDtrmMeanCd: "examplePrcDtrmMeanCd",
  prhbCmdtCd: "examplePrhbCmdtCd",
  prmsntDt: "examplePrmsntDt",
  prmsntSttsCd: "examplePrmsntSttsCd",
  prvlCd: "examplePrvlCd",
  psmgtFfmnXpirPrid: 42,
  psnrPrcsCn: "examplePsnrPrcsCn",
  psnrReffNo: "examplePsnrReffNo",
  pymnAcNo: "examplePymnAcNo",
  pymnBnkBrnhCd: "examplePymnBnkBrnhCd",
  pymnBnkCd: "examplePymnBnkCd",
  pymnMeanCd: "examplePymnMeanCd",
  qtaApreNo: "exampleQtaApreNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  refNo: "exampleRefNo",
  reffNo: "exampleReffNo",
  regmRqstCd: "exampleRegmRqstCd",
  rethink: 42,
  rlbrCstmCd: "exampleRlbrCstmCd",
  rqstDt: "exampleRqstDt",
  shipNm: "exampleShipNm",
  sysUseSs: 42,
  trdeDlngCntyCd: "exampleTrdeDlngCntyCd",
  trifBaseVal: "exampleTrifBaseVal",
  trnpMethIdfyNo: "exampleTrnpMethIdfyNo",
  trnpMethKndCd: "exampleTrnpMethKndCd",
  trnpMethNatCd: "exampleTrnpMethNatCd",
  txprCmrcRegsNo: "exampleTxprCmrcRegsNo",
  txprIdfyNo: "exampleTxprIdfyNo",
  updatedAt: new Date(),
  uprPdlsNo: "exampleUprPdlsNo",
  vhclYn: "exampleVhclYn",
  wkngPtCd: "exampleWkngPtCd",
};
const FIND_MANY_RESULT = [
  {
    aditTxQty: 42.42,
    aditTxQtyUtCd: "exampleAditTxQtyUtCd",
    alNtwg: 42.42,
    alTtwg: 42.42,
    apcAtpmEndDt: "exampleApcAtpmEndDt",
    apcAtpmStrtDt: "exampleApcAtpmStrtDt",
    apcCd: "exampleApcCd",
    arvlDt: "exampleArvlDt",
    bfBnbnCmdtWrhsCd: "exampleBfBnbnCmdtWrhsCd",
    bfDtlDcshDt: "exampleBfDtlDcshDt",
    bfDtlDcshNo: "exampleBfDtlDcshNo",
    bfPdlsNo: "exampleBfPdlsNo",
    blDt: "exampleBlDt",
    blNo: "exampleBlNo",
    bnbnCmdtWrhsCd: "exampleBnbnCmdtWrhsCd",
    brndNm: "exampleBrndNm",
    cagMgmtNo: "exampleCagMgmtNo",
    cmdtClsfSpelCd: "exampleCmdtClsfSpelCd",
    cmdtStgeLoctCd: "exampleCmdtStgeLoctCd",
    cntrCagYn: "exampleCntrCagYn",
    cntrGcnt: 42,
    createdAt: new Date(),
    csclPlnCd: "exampleCsclPlnCd",
    csmCntyCd: "exampleCsmCntyCd",
    dcerCd: "exampleDcerCd",
    dcerWrteCn: "exampleDcerWrteCn",
    dclrCstmCd: "exampleDclrCstmCd",
    dclrPtCd: "exampleDclrPtCd",
    dcrdYn: "exampleDcrdYn",
    dcshFmCd: "exampleDcshFmCd",
    delYn: "exampleDelYn",
    deptCd: "exampleDeptCd",
    disprCd: "exampleDisprCd",
    divdCsclTpCd: "exampleDivdCsclTpCd",
    divdFfmnTpCd: "exampleDivdFfmnTpCd",
    dlngCond1Cd: "exampleDlngCond1Cd",
    dlngCond2Cd: "exampleDlngCond2Cd",
    dlngPdlsNm: "exampleDlngPdlsNm",
    dlngPymnMeanCd: "exampleDlngPymnMeanCd",
    dlvrCondCd: "exampleDlvrCondCd",
    dlvrPlcCd: "exampleDlvrPlcCd",
    dstnCntyCd: "exampleDstnCntyCd",
    dstnRegnCd: "exampleDstnRegnCd",
    dtlDcshNo: "exampleDtlDcshNo",
    epcCd: "exampleEpcCd",
    expCntyCd: "exampleExpCntyCd",
    exppnCmrcRegsNo: "exampleExppnCmrcRegsNo",
    exppnIdfyNo: "exampleExppnIdfyNo",
    exppnIdfyNoTpCd: "exampleExppnIdfyNoTpCd",
    frstDclrDt: "exampleFrstDclrDt",
    frstRegstId: "exampleFrstRegstId",
    frstRgsrDttm: new Date(),
    hsCd: "exampleHsCd",
    hsErrPvntVal: "exampleHsErrPvntVal",
    hsExcpMtrCd: "exampleHsExcpMtrCd",
    id: "exampleId",
    imppnCmrcRegsNo: "exampleImppnCmrcRegsNo",
    imppnIdfyNo: "exampleImppnIdfyNo",
    imppnIdfyNoTpCd: "exampleImppnIdfyNoTpCd",
    invcNo: "exampleInvcNo",
    invcPblsDt: "exampleInvcPblsDt",
    lastChgDttm: new Date(),
    lastChprId: "exampleLastChprId",
    lastYn: "exampleLastYn",
    ldnpCd: "exampleLdnpCd",
    ldunDt: "exampleLdunDt",
    mdfyDgcnt: 42,
    mdfyRsnCd: "exampleMdfyRsnCd",
    mdfyRsnCn: "exampleMdfyRsnCn",
    mgDscnApreNo: "exampleMgDscnApreNo",
    nwprScarCmdtCd: "exampleNwprScarCmdtCd",
    oilTankNo: "exampleOilTankNo",
    orcyCntyCd: "exampleOrcyCntyCd",
    owhsPrcEvYn: "exampleOwhsPrcEvYn",
    pckgDesc: "examplePckgDesc",
    pckgShmrMarkNo: "examplePckgShmrMarkNo",
    pckgTgcnt: 42,
    pdlsClsfBfhnJdgnPn: "examplePdlsClsfBfhnJdgnPn",
    pdlsGcnt: 42,
    pdlsNm: "examplePdlsNm",
    pdlsNo: "examplePdlsNo",
    pdlsNtwg: 42.42,
    pdlsPckgGcnt: 42,
    pdlsPckgUtCd: "examplePdlsPckgUtCd",
    pdlsTtwg: 42.42,
    prcDcshWrteYn: "examplePrcDcshWrteYn",
    prcDtrmMeanCd: "examplePrcDtrmMeanCd",
    prhbCmdtCd: "examplePrhbCmdtCd",
    prmsntDt: "examplePrmsntDt",
    prmsntSttsCd: "examplePrmsntSttsCd",
    prvlCd: "examplePrvlCd",
    psmgtFfmnXpirPrid: 42,
    psnrPrcsCn: "examplePsnrPrcsCn",
    psnrReffNo: "examplePsnrReffNo",
    pymnAcNo: "examplePymnAcNo",
    pymnBnkBrnhCd: "examplePymnBnkBrnhCd",
    pymnBnkCd: "examplePymnBnkCd",
    pymnMeanCd: "examplePymnMeanCd",
    qtaApreNo: "exampleQtaApreNo",
    qty: 42.42,
    qtyUtCd: "exampleQtyUtCd",
    refNo: "exampleRefNo",
    reffNo: "exampleReffNo",
    regmRqstCd: "exampleRegmRqstCd",
    rethink: 42,
    rlbrCstmCd: "exampleRlbrCstmCd",
    rqstDt: "exampleRqstDt",
    shipNm: "exampleShipNm",
    sysUseSs: 42,
    trdeDlngCntyCd: "exampleTrdeDlngCntyCd",
    trifBaseVal: "exampleTrifBaseVal",
    trnpMethIdfyNo: "exampleTrnpMethIdfyNo",
    trnpMethKndCd: "exampleTrnpMethKndCd",
    trnpMethNatCd: "exampleTrnpMethNatCd",
    txprCmrcRegsNo: "exampleTxprCmrcRegsNo",
    txprIdfyNo: "exampleTxprIdfyNo",
    updatedAt: new Date(),
    uprPdlsNo: "exampleUprPdlsNo",
    vhclYn: "exampleVhclYn",
    wkngPtCd: "exampleWkngPtCd",
  },
];
const FIND_ONE_RESULT = {
  aditTxQty: 42.42,
  aditTxQtyUtCd: "exampleAditTxQtyUtCd",
  alNtwg: 42.42,
  alTtwg: 42.42,
  apcAtpmEndDt: "exampleApcAtpmEndDt",
  apcAtpmStrtDt: "exampleApcAtpmStrtDt",
  apcCd: "exampleApcCd",
  arvlDt: "exampleArvlDt",
  bfBnbnCmdtWrhsCd: "exampleBfBnbnCmdtWrhsCd",
  bfDtlDcshDt: "exampleBfDtlDcshDt",
  bfDtlDcshNo: "exampleBfDtlDcshNo",
  bfPdlsNo: "exampleBfPdlsNo",
  blDt: "exampleBlDt",
  blNo: "exampleBlNo",
  bnbnCmdtWrhsCd: "exampleBnbnCmdtWrhsCd",
  brndNm: "exampleBrndNm",
  cagMgmtNo: "exampleCagMgmtNo",
  cmdtClsfSpelCd: "exampleCmdtClsfSpelCd",
  cmdtStgeLoctCd: "exampleCmdtStgeLoctCd",
  cntrCagYn: "exampleCntrCagYn",
  cntrGcnt: 42,
  createdAt: new Date(),
  csclPlnCd: "exampleCsclPlnCd",
  csmCntyCd: "exampleCsmCntyCd",
  dcerCd: "exampleDcerCd",
  dcerWrteCn: "exampleDcerWrteCn",
  dclrCstmCd: "exampleDclrCstmCd",
  dclrPtCd: "exampleDclrPtCd",
  dcrdYn: "exampleDcrdYn",
  dcshFmCd: "exampleDcshFmCd",
  delYn: "exampleDelYn",
  deptCd: "exampleDeptCd",
  disprCd: "exampleDisprCd",
  divdCsclTpCd: "exampleDivdCsclTpCd",
  divdFfmnTpCd: "exampleDivdFfmnTpCd",
  dlngCond1Cd: "exampleDlngCond1Cd",
  dlngCond2Cd: "exampleDlngCond2Cd",
  dlngPdlsNm: "exampleDlngPdlsNm",
  dlngPymnMeanCd: "exampleDlngPymnMeanCd",
  dlvrCondCd: "exampleDlvrCondCd",
  dlvrPlcCd: "exampleDlvrPlcCd",
  dstnCntyCd: "exampleDstnCntyCd",
  dstnRegnCd: "exampleDstnRegnCd",
  dtlDcshNo: "exampleDtlDcshNo",
  epcCd: "exampleEpcCd",
  expCntyCd: "exampleExpCntyCd",
  exppnCmrcRegsNo: "exampleExppnCmrcRegsNo",
  exppnIdfyNo: "exampleExppnIdfyNo",
  exppnIdfyNoTpCd: "exampleExppnIdfyNoTpCd",
  frstDclrDt: "exampleFrstDclrDt",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  hsCd: "exampleHsCd",
  hsErrPvntVal: "exampleHsErrPvntVal",
  hsExcpMtrCd: "exampleHsExcpMtrCd",
  id: "exampleId",
  imppnCmrcRegsNo: "exampleImppnCmrcRegsNo",
  imppnIdfyNo: "exampleImppnIdfyNo",
  imppnIdfyNoTpCd: "exampleImppnIdfyNoTpCd",
  invcNo: "exampleInvcNo",
  invcPblsDt: "exampleInvcPblsDt",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  lastYn: "exampleLastYn",
  ldnpCd: "exampleLdnpCd",
  ldunDt: "exampleLdunDt",
  mdfyDgcnt: 42,
  mdfyRsnCd: "exampleMdfyRsnCd",
  mdfyRsnCn: "exampleMdfyRsnCn",
  mgDscnApreNo: "exampleMgDscnApreNo",
  nwprScarCmdtCd: "exampleNwprScarCmdtCd",
  oilTankNo: "exampleOilTankNo",
  orcyCntyCd: "exampleOrcyCntyCd",
  owhsPrcEvYn: "exampleOwhsPrcEvYn",
  pckgDesc: "examplePckgDesc",
  pckgShmrMarkNo: "examplePckgShmrMarkNo",
  pckgTgcnt: 42,
  pdlsClsfBfhnJdgnPn: "examplePdlsClsfBfhnJdgnPn",
  pdlsGcnt: 42,
  pdlsNm: "examplePdlsNm",
  pdlsNo: "examplePdlsNo",
  pdlsNtwg: 42.42,
  pdlsPckgGcnt: 42,
  pdlsPckgUtCd: "examplePdlsPckgUtCd",
  pdlsTtwg: 42.42,
  prcDcshWrteYn: "examplePrcDcshWrteYn",
  prcDtrmMeanCd: "examplePrcDtrmMeanCd",
  prhbCmdtCd: "examplePrhbCmdtCd",
  prmsntDt: "examplePrmsntDt",
  prmsntSttsCd: "examplePrmsntSttsCd",
  prvlCd: "examplePrvlCd",
  psmgtFfmnXpirPrid: 42,
  psnrPrcsCn: "examplePsnrPrcsCn",
  psnrReffNo: "examplePsnrReffNo",
  pymnAcNo: "examplePymnAcNo",
  pymnBnkBrnhCd: "examplePymnBnkBrnhCd",
  pymnBnkCd: "examplePymnBnkCd",
  pymnMeanCd: "examplePymnMeanCd",
  qtaApreNo: "exampleQtaApreNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  refNo: "exampleRefNo",
  reffNo: "exampleReffNo",
  regmRqstCd: "exampleRegmRqstCd",
  rethink: 42,
  rlbrCstmCd: "exampleRlbrCstmCd",
  rqstDt: "exampleRqstDt",
  shipNm: "exampleShipNm",
  sysUseSs: 42,
  trdeDlngCntyCd: "exampleTrdeDlngCntyCd",
  trifBaseVal: "exampleTrifBaseVal",
  trnpMethIdfyNo: "exampleTrnpMethIdfyNo",
  trnpMethKndCd: "exampleTrnpMethKndCd",
  trnpMethNatCd: "exampleTrnpMethNatCd",
  txprCmrcRegsNo: "exampleTxprCmrcRegsNo",
  txprIdfyNo: "exampleTxprIdfyNo",
  updatedAt: new Date(),
  uprPdlsNo: "exampleUprPdlsNo",
  vhclYn: "exampleVhclYn",
  wkngPtCd: "exampleWkngPtCd",
};

const service = {
  createClearanceDeclaration() {
    return CREATE_RESULT;
  },
  clearanceDeclarations: () => FIND_MANY_RESULT,
  clearanceDeclaration: ({ where }: { where: { id: string } }) => {
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

describe("ClearanceDeclaration", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ClearanceDeclarationService,
          useValue: service,
        },
      ],
      controllers: [ClearanceDeclarationController],
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

  test("POST /clearanceDeclarations", async () => {
    await request(app.getHttpServer())
      .post("/clearanceDeclarations")
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

  test("GET /clearanceDeclarations", async () => {
    await request(app.getHttpServer())
      .get("/clearanceDeclarations")
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

  test("GET /clearanceDeclarations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/clearanceDeclarations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /clearanceDeclarations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/clearanceDeclarations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: FIND_ONE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: FIND_ONE_RESULT.lastChgDttm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /clearanceDeclarations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/clearanceDeclarations")
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
          .post("/clearanceDeclarations")
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
