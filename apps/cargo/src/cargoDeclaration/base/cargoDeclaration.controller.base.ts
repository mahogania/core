/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CargoDeclarationService } from "../cargoDeclaration.service";
import { CargoDeclarationCreateInput } from "./CargoDeclarationCreateInput";
import { CargoDeclaration } from "./CargoDeclaration";
import { CargoDeclarationFindManyArgs } from "./CargoDeclarationFindManyArgs";
import { CargoDeclarationWhereUniqueInput } from "./CargoDeclarationWhereUniqueInput";
import { CargoDeclarationUpdateInput } from "./CargoDeclarationUpdateInput";

export class CargoDeclarationControllerBase {
  constructor(protected readonly service: CargoDeclarationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CargoDeclaration })
  @swagger.ApiBody({
    type: CargoDeclarationCreateInput,
  })
  async createCargoDeclaration(
    @common.Body() data: CargoDeclarationCreateInput
  ): Promise<CargoDeclaration> {
    return await this.service.createCargoDeclaration({
      data: data,
      select: {
        abrdFrwrAddrNm: true,
        abrdFrwrEml: true,
        abrdFrwrNm: true,
        abrdFrwrTlphNo: true,
        alBlGcnt: true,
        alCntrGcnt: true,
        alEcntrCnt: true,
        alHblGcnt: true,
        alNtwg: true,
        alPckgGcnt: true,
        alTtwg: true,
        alVhclGcnt: true,
        apreYnCd: true,
        arvlDttm: true,
        atchFileId: true,
        audtOpinCn: true,
        bfCagMgmtNo: true,
        blMdfyTpCd: true,
        blNo: true,
        blPblsDt: true,
        blPtCd: true,
        blTpCd: true,
        cagChrcCd: true,
        cagDcshRgsrMgmtNo: true,
        cagMgmtNo: true,
        cagRqstTpCd: true,
        cagTpCd: true,
        carrAddrNm: true,
        carrCd: true,
        casNo: true,
        cbmVol: true,
        cherAddrNm: true,
        cherGvnmNm: true,
        cherYn: true,
        cmdtAmt: true,
        cmdtAmtCurrCd: true,
        cmdtKndCd: true,
        cnsiAddrNm: true,
        cnsiEml: true,
        cnsiNm: true,
        cnsiTlphNo: true,
        cnsiTxprIdfyNo: true,
        cnsiTxprIdfyNoNin: true,
        cntrGcnt: true,
        coRqstNo: true,
        coatTrnpYn: true,
        createdAt: true,
        delYn: true,
        dptrDttm: true,
        dptrPortCd: true,
        drvrNm: true,
        ecntrWght: true,
        eurFxrt: true,
        exppnAddrNm: true,
        exppnEml: true,
        exppnNm: true,
        exppnTlphNo: true,
        exppnTxprIdfyNo: true,
        exppnTxprIdfyNoNin: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        frwrCd: true,
        hblNo: true,
        hdcbTpCd: true,
        hsCd: true,
        hsn: true,
        ibobzCd: true,
        id: true,
        imoNo: true,
        jrsdOrgnCd: true,
        lastChgDttm: true,
        lastChprId: true,
        lastLdunDt: true,
        lastThrgPortCd: true,
        ldunBlGcnt: true,
        ldunPortCd: true,
        ldunRegnCd: true,
        ldunYn: true,
        lirVol: true,
        loadRegnCd: true,
        ltspYn: true,
        mrn: true,
        msgPrcsSttsCd: true,
        msn: true,
        ntprAddrNm: true,
        ntprEml: true,
        ntprNm: true,
        ntprTlphNo: true,
        ntwg: true,
        pckgGcnt: true,
        pckgUtCd: true,
        pdlsNm: true,
        prpmDfpmCachTpCd: true,
        realArvlDttm: true,
        rmrkCn: true,
        selcTrgtYn: true,
        sendWay: true,
        shipNttn: true,
        shipTtn: true,
        shmrCn: true,
        stvdCd: true,
        trnhRegnCd: true,
        trnpMeanCd: true,
        trnpMethIdfyNo: true,
        trnpMethLoctNm: true,
        trnpMethNatCd: true,
        trnpMethNm: true,
        trnpMethRgsrDt: true,
        trnpRferNo: true,
        trsnCoCd: true,
        trsnDttm: true,
        ttwg: true,
        undgGdCd: true,
        undgId: true,
        updatedAt: true,
        usdFxrt: true,
        vhclGcnt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CargoDeclaration] })
  @ApiNestedQuery(CargoDeclarationFindManyArgs)
  async cargoDeclarations(
    @common.Req() request: Request
  ): Promise<CargoDeclaration[]> {
    const args = plainToClass(CargoDeclarationFindManyArgs, request.query);
    return this.service.cargoDeclarations({
      ...args,
      select: {
        abrdFrwrAddrNm: true,
        abrdFrwrEml: true,
        abrdFrwrNm: true,
        abrdFrwrTlphNo: true,
        alBlGcnt: true,
        alCntrGcnt: true,
        alEcntrCnt: true,
        alHblGcnt: true,
        alNtwg: true,
        alPckgGcnt: true,
        alTtwg: true,
        alVhclGcnt: true,
        apreYnCd: true,
        arvlDttm: true,
        atchFileId: true,
        audtOpinCn: true,
        bfCagMgmtNo: true,
        blMdfyTpCd: true,
        blNo: true,
        blPblsDt: true,
        blPtCd: true,
        blTpCd: true,
        cagChrcCd: true,
        cagDcshRgsrMgmtNo: true,
        cagMgmtNo: true,
        cagRqstTpCd: true,
        cagTpCd: true,
        carrAddrNm: true,
        carrCd: true,
        casNo: true,
        cbmVol: true,
        cherAddrNm: true,
        cherGvnmNm: true,
        cherYn: true,
        cmdtAmt: true,
        cmdtAmtCurrCd: true,
        cmdtKndCd: true,
        cnsiAddrNm: true,
        cnsiEml: true,
        cnsiNm: true,
        cnsiTlphNo: true,
        cnsiTxprIdfyNo: true,
        cnsiTxprIdfyNoNin: true,
        cntrGcnt: true,
        coRqstNo: true,
        coatTrnpYn: true,
        createdAt: true,
        delYn: true,
        dptrDttm: true,
        dptrPortCd: true,
        drvrNm: true,
        ecntrWght: true,
        eurFxrt: true,
        exppnAddrNm: true,
        exppnEml: true,
        exppnNm: true,
        exppnTlphNo: true,
        exppnTxprIdfyNo: true,
        exppnTxprIdfyNoNin: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        frwrCd: true,
        hblNo: true,
        hdcbTpCd: true,
        hsCd: true,
        hsn: true,
        ibobzCd: true,
        id: true,
        imoNo: true,
        jrsdOrgnCd: true,
        lastChgDttm: true,
        lastChprId: true,
        lastLdunDt: true,
        lastThrgPortCd: true,
        ldunBlGcnt: true,
        ldunPortCd: true,
        ldunRegnCd: true,
        ldunYn: true,
        lirVol: true,
        loadRegnCd: true,
        ltspYn: true,
        mrn: true,
        msgPrcsSttsCd: true,
        msn: true,
        ntprAddrNm: true,
        ntprEml: true,
        ntprNm: true,
        ntprTlphNo: true,
        ntwg: true,
        pckgGcnt: true,
        pckgUtCd: true,
        pdlsNm: true,
        prpmDfpmCachTpCd: true,
        realArvlDttm: true,
        rmrkCn: true,
        selcTrgtYn: true,
        sendWay: true,
        shipNttn: true,
        shipTtn: true,
        shmrCn: true,
        stvdCd: true,
        trnhRegnCd: true,
        trnpMeanCd: true,
        trnpMethIdfyNo: true,
        trnpMethLoctNm: true,
        trnpMethNatCd: true,
        trnpMethNm: true,
        trnpMethRgsrDt: true,
        trnpRferNo: true,
        trsnCoCd: true,
        trsnDttm: true,
        ttwg: true,
        undgGdCd: true,
        undgId: true,
        updatedAt: true,
        usdFxrt: true,
        vhclGcnt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CargoDeclaration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async cargoDeclaration(
    @common.Param() params: CargoDeclarationWhereUniqueInput
  ): Promise<CargoDeclaration | null> {
    const result = await this.service.cargoDeclaration({
      where: params,
      select: {
        abrdFrwrAddrNm: true,
        abrdFrwrEml: true,
        abrdFrwrNm: true,
        abrdFrwrTlphNo: true,
        alBlGcnt: true,
        alCntrGcnt: true,
        alEcntrCnt: true,
        alHblGcnt: true,
        alNtwg: true,
        alPckgGcnt: true,
        alTtwg: true,
        alVhclGcnt: true,
        apreYnCd: true,
        arvlDttm: true,
        atchFileId: true,
        audtOpinCn: true,
        bfCagMgmtNo: true,
        blMdfyTpCd: true,
        blNo: true,
        blPblsDt: true,
        blPtCd: true,
        blTpCd: true,
        cagChrcCd: true,
        cagDcshRgsrMgmtNo: true,
        cagMgmtNo: true,
        cagRqstTpCd: true,
        cagTpCd: true,
        carrAddrNm: true,
        carrCd: true,
        casNo: true,
        cbmVol: true,
        cherAddrNm: true,
        cherGvnmNm: true,
        cherYn: true,
        cmdtAmt: true,
        cmdtAmtCurrCd: true,
        cmdtKndCd: true,
        cnsiAddrNm: true,
        cnsiEml: true,
        cnsiNm: true,
        cnsiTlphNo: true,
        cnsiTxprIdfyNo: true,
        cnsiTxprIdfyNoNin: true,
        cntrGcnt: true,
        coRqstNo: true,
        coatTrnpYn: true,
        createdAt: true,
        delYn: true,
        dptrDttm: true,
        dptrPortCd: true,
        drvrNm: true,
        ecntrWght: true,
        eurFxrt: true,
        exppnAddrNm: true,
        exppnEml: true,
        exppnNm: true,
        exppnTlphNo: true,
        exppnTxprIdfyNo: true,
        exppnTxprIdfyNoNin: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        frwrCd: true,
        hblNo: true,
        hdcbTpCd: true,
        hsCd: true,
        hsn: true,
        ibobzCd: true,
        id: true,
        imoNo: true,
        jrsdOrgnCd: true,
        lastChgDttm: true,
        lastChprId: true,
        lastLdunDt: true,
        lastThrgPortCd: true,
        ldunBlGcnt: true,
        ldunPortCd: true,
        ldunRegnCd: true,
        ldunYn: true,
        lirVol: true,
        loadRegnCd: true,
        ltspYn: true,
        mrn: true,
        msgPrcsSttsCd: true,
        msn: true,
        ntprAddrNm: true,
        ntprEml: true,
        ntprNm: true,
        ntprTlphNo: true,
        ntwg: true,
        pckgGcnt: true,
        pckgUtCd: true,
        pdlsNm: true,
        prpmDfpmCachTpCd: true,
        realArvlDttm: true,
        rmrkCn: true,
        selcTrgtYn: true,
        sendWay: true,
        shipNttn: true,
        shipTtn: true,
        shmrCn: true,
        stvdCd: true,
        trnhRegnCd: true,
        trnpMeanCd: true,
        trnpMethIdfyNo: true,
        trnpMethLoctNm: true,
        trnpMethNatCd: true,
        trnpMethNm: true,
        trnpMethRgsrDt: true,
        trnpRferNo: true,
        trsnCoCd: true,
        trsnDttm: true,
        ttwg: true,
        undgGdCd: true,
        undgId: true,
        updatedAt: true,
        usdFxrt: true,
        vhclGcnt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CargoDeclaration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: CargoDeclarationUpdateInput,
  })
  async updateCargoDeclaration(
    @common.Param() params: CargoDeclarationWhereUniqueInput,
    @common.Body() data: CargoDeclarationUpdateInput
  ): Promise<CargoDeclaration | null> {
    try {
      return await this.service.updateCargoDeclaration({
        where: params,
        data: data,
        select: {
          abrdFrwrAddrNm: true,
          abrdFrwrEml: true,
          abrdFrwrNm: true,
          abrdFrwrTlphNo: true,
          alBlGcnt: true,
          alCntrGcnt: true,
          alEcntrCnt: true,
          alHblGcnt: true,
          alNtwg: true,
          alPckgGcnt: true,
          alTtwg: true,
          alVhclGcnt: true,
          apreYnCd: true,
          arvlDttm: true,
          atchFileId: true,
          audtOpinCn: true,
          bfCagMgmtNo: true,
          blMdfyTpCd: true,
          blNo: true,
          blPblsDt: true,
          blPtCd: true,
          blTpCd: true,
          cagChrcCd: true,
          cagDcshRgsrMgmtNo: true,
          cagMgmtNo: true,
          cagRqstTpCd: true,
          cagTpCd: true,
          carrAddrNm: true,
          carrCd: true,
          casNo: true,
          cbmVol: true,
          cherAddrNm: true,
          cherGvnmNm: true,
          cherYn: true,
          cmdtAmt: true,
          cmdtAmtCurrCd: true,
          cmdtKndCd: true,
          cnsiAddrNm: true,
          cnsiEml: true,
          cnsiNm: true,
          cnsiTlphNo: true,
          cnsiTxprIdfyNo: true,
          cnsiTxprIdfyNoNin: true,
          cntrGcnt: true,
          coRqstNo: true,
          coatTrnpYn: true,
          createdAt: true,
          delYn: true,
          dptrDttm: true,
          dptrPortCd: true,
          drvrNm: true,
          ecntrWght: true,
          eurFxrt: true,
          exppnAddrNm: true,
          exppnEml: true,
          exppnNm: true,
          exppnTlphNo: true,
          exppnTxprIdfyNo: true,
          exppnTxprIdfyNoNin: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          frwrCd: true,
          hblNo: true,
          hdcbTpCd: true,
          hsCd: true,
          hsn: true,
          ibobzCd: true,
          id: true,
          imoNo: true,
          jrsdOrgnCd: true,
          lastChgDttm: true,
          lastChprId: true,
          lastLdunDt: true,
          lastThrgPortCd: true,
          ldunBlGcnt: true,
          ldunPortCd: true,
          ldunRegnCd: true,
          ldunYn: true,
          lirVol: true,
          loadRegnCd: true,
          ltspYn: true,
          mrn: true,
          msgPrcsSttsCd: true,
          msn: true,
          ntprAddrNm: true,
          ntprEml: true,
          ntprNm: true,
          ntprTlphNo: true,
          ntwg: true,
          pckgGcnt: true,
          pckgUtCd: true,
          pdlsNm: true,
          prpmDfpmCachTpCd: true,
          realArvlDttm: true,
          rmrkCn: true,
          selcTrgtYn: true,
          sendWay: true,
          shipNttn: true,
          shipTtn: true,
          shmrCn: true,
          stvdCd: true,
          trnhRegnCd: true,
          trnpMeanCd: true,
          trnpMethIdfyNo: true,
          trnpMethLoctNm: true,
          trnpMethNatCd: true,
          trnpMethNm: true,
          trnpMethRgsrDt: true,
          trnpRferNo: true,
          trsnCoCd: true,
          trsnDttm: true,
          ttwg: true,
          undgGdCd: true,
          undgId: true,
          updatedAt: true,
          usdFxrt: true,
          vhclGcnt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CargoDeclaration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCargoDeclaration(
    @common.Param() params: CargoDeclarationWhereUniqueInput
  ): Promise<CargoDeclaration | null> {
    try {
      return await this.service.deleteCargoDeclaration({
        where: params,
        select: {
          abrdFrwrAddrNm: true,
          abrdFrwrEml: true,
          abrdFrwrNm: true,
          abrdFrwrTlphNo: true,
          alBlGcnt: true,
          alCntrGcnt: true,
          alEcntrCnt: true,
          alHblGcnt: true,
          alNtwg: true,
          alPckgGcnt: true,
          alTtwg: true,
          alVhclGcnt: true,
          apreYnCd: true,
          arvlDttm: true,
          atchFileId: true,
          audtOpinCn: true,
          bfCagMgmtNo: true,
          blMdfyTpCd: true,
          blNo: true,
          blPblsDt: true,
          blPtCd: true,
          blTpCd: true,
          cagChrcCd: true,
          cagDcshRgsrMgmtNo: true,
          cagMgmtNo: true,
          cagRqstTpCd: true,
          cagTpCd: true,
          carrAddrNm: true,
          carrCd: true,
          casNo: true,
          cbmVol: true,
          cherAddrNm: true,
          cherGvnmNm: true,
          cherYn: true,
          cmdtAmt: true,
          cmdtAmtCurrCd: true,
          cmdtKndCd: true,
          cnsiAddrNm: true,
          cnsiEml: true,
          cnsiNm: true,
          cnsiTlphNo: true,
          cnsiTxprIdfyNo: true,
          cnsiTxprIdfyNoNin: true,
          cntrGcnt: true,
          coRqstNo: true,
          coatTrnpYn: true,
          createdAt: true,
          delYn: true,
          dptrDttm: true,
          dptrPortCd: true,
          drvrNm: true,
          ecntrWght: true,
          eurFxrt: true,
          exppnAddrNm: true,
          exppnEml: true,
          exppnNm: true,
          exppnTlphNo: true,
          exppnTxprIdfyNo: true,
          exppnTxprIdfyNoNin: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          frwrCd: true,
          hblNo: true,
          hdcbTpCd: true,
          hsCd: true,
          hsn: true,
          ibobzCd: true,
          id: true,
          imoNo: true,
          jrsdOrgnCd: true,
          lastChgDttm: true,
          lastChprId: true,
          lastLdunDt: true,
          lastThrgPortCd: true,
          ldunBlGcnt: true,
          ldunPortCd: true,
          ldunRegnCd: true,
          ldunYn: true,
          lirVol: true,
          loadRegnCd: true,
          ltspYn: true,
          mrn: true,
          msgPrcsSttsCd: true,
          msn: true,
          ntprAddrNm: true,
          ntprEml: true,
          ntprNm: true,
          ntprTlphNo: true,
          ntwg: true,
          pckgGcnt: true,
          pckgUtCd: true,
          pdlsNm: true,
          prpmDfpmCachTpCd: true,
          realArvlDttm: true,
          rmrkCn: true,
          selcTrgtYn: true,
          sendWay: true,
          shipNttn: true,
          shipTtn: true,
          shmrCn: true,
          stvdCd: true,
          trnhRegnCd: true,
          trnpMeanCd: true,
          trnpMethIdfyNo: true,
          trnpMethLoctNm: true,
          trnpMethNatCd: true,
          trnpMethNm: true,
          trnpMethRgsrDt: true,
          trnpRferNo: true,
          trsnCoCd: true,
          trsnDttm: true,
          ttwg: true,
          undgGdCd: true,
          undgId: true,
          updatedAt: true,
          usdFxrt: true,
          vhclGcnt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
