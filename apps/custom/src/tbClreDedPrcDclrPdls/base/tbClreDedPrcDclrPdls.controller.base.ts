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
import { TbClreDedPrcDclrPdlsService } from "../tbClreDedPrcDclrPdls.service";
import { TbClreDedPrcDclrPdlsCreateInput } from "./TbClreDedPrcDclrPdlsCreateInput";
import { TbClreDedPrcDclrPdls } from "./TbClreDedPrcDclrPdls";
import { TbClreDedPrcDclrPdlsFindManyArgs } from "./TbClreDedPrcDclrPdlsFindManyArgs";
import { TbClreDedPrcDclrPdlsWhereUniqueInput } from "./TbClreDedPrcDclrPdlsWhereUniqueInput";
import { TbClreDedPrcDclrPdlsUpdateInput } from "./TbClreDedPrcDclrPdlsUpdateInput";

export class TbClreDedPrcDclrPdlsControllerBase {
  constructor(protected readonly service: TbClreDedPrcDclrPdlsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TbClreDedPrcDclrPdls })
  @swagger.ApiBody({
    type: TbClreDedPrcDclrPdlsCreateInput,
  })
  async createTbClreDedPrcDclrPdls(
    @common.Body() data: TbClreDedPrcDclrPdlsCreateInput
  ): Promise<TbClreDedPrcDclrPdls> {
    return await this.service.createTbClreDedPrcDclrPdls({
      data: data,
      select: {
        brngTrnpCst: true,
        byerPymnCst: true,
        createdAt: true,
        delYn: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        indrPymnTamt: true,
        infeeAmt: true,
        lastChgDttm: true,
        lastChprId: true,
        loadCstAmt: true,
        mdfyDgcnt: true,
        mdlStszNo: true,
        mdtnPcfeAmt: true,
        mnfuSrvc_1Amt: true,
        mnfuSrvc_2Amt: true,
        mnfuSrvc_3Amt: true,
        mnfuSrvc_4Amt: true,
        otcstAmt: true,
        pcfeAmt: true,
        pcfeLcneAmt: true,
        pckgAmt: true,
        pdlsNo: true,
        pyrTrifAmt: true,
        reffNo: true,
        resaleErnAmt: true,
        techSpptCst: true,
        trnpCstAmt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TbClreDedPrcDclrPdls] })
  @ApiNestedQuery(TbClreDedPrcDclrPdlsFindManyArgs)
  async tbClreDedPrcDclrPdlsItems(
    @common.Req() request: Request
  ): Promise<TbClreDedPrcDclrPdls[]> {
    const args = plainToClass(TbClreDedPrcDclrPdlsFindManyArgs, request.query);
    return this.service.tbClreDedPrcDclrPdlsItems({
      ...args,
      select: {
        brngTrnpCst: true,
        byerPymnCst: true,
        createdAt: true,
        delYn: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        indrPymnTamt: true,
        infeeAmt: true,
        lastChgDttm: true,
        lastChprId: true,
        loadCstAmt: true,
        mdfyDgcnt: true,
        mdlStszNo: true,
        mdtnPcfeAmt: true,
        mnfuSrvc_1Amt: true,
        mnfuSrvc_2Amt: true,
        mnfuSrvc_3Amt: true,
        mnfuSrvc_4Amt: true,
        otcstAmt: true,
        pcfeAmt: true,
        pcfeLcneAmt: true,
        pckgAmt: true,
        pdlsNo: true,
        pyrTrifAmt: true,
        reffNo: true,
        resaleErnAmt: true,
        techSpptCst: true,
        trnpCstAmt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TbClreDedPrcDclrPdls })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async tbClreDedPrcDclrPdls(
    @common.Param() params: TbClreDedPrcDclrPdlsWhereUniqueInput
  ): Promise<TbClreDedPrcDclrPdls | null> {
    const result = await this.service.tbClreDedPrcDclrPdls({
      where: params,
      select: {
        brngTrnpCst: true,
        byerPymnCst: true,
        createdAt: true,
        delYn: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        indrPymnTamt: true,
        infeeAmt: true,
        lastChgDttm: true,
        lastChprId: true,
        loadCstAmt: true,
        mdfyDgcnt: true,
        mdlStszNo: true,
        mdtnPcfeAmt: true,
        mnfuSrvc_1Amt: true,
        mnfuSrvc_2Amt: true,
        mnfuSrvc_3Amt: true,
        mnfuSrvc_4Amt: true,
        otcstAmt: true,
        pcfeAmt: true,
        pcfeLcneAmt: true,
        pckgAmt: true,
        pdlsNo: true,
        pyrTrifAmt: true,
        reffNo: true,
        resaleErnAmt: true,
        techSpptCst: true,
        trnpCstAmt: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: TbClreDedPrcDclrPdls })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: TbClreDedPrcDclrPdlsUpdateInput,
  })
  async updateTbClreDedPrcDclrPdls(
    @common.Param() params: TbClreDedPrcDclrPdlsWhereUniqueInput,
    @common.Body() data: TbClreDedPrcDclrPdlsUpdateInput
  ): Promise<TbClreDedPrcDclrPdls | null> {
    try {
      return await this.service.updateTbClreDedPrcDclrPdls({
        where: params,
        data: data,
        select: {
          brngTrnpCst: true,
          byerPymnCst: true,
          createdAt: true,
          delYn: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          id: true,
          indrPymnTamt: true,
          infeeAmt: true,
          lastChgDttm: true,
          lastChprId: true,
          loadCstAmt: true,
          mdfyDgcnt: true,
          mdlStszNo: true,
          mdtnPcfeAmt: true,
          mnfuSrvc_1Amt: true,
          mnfuSrvc_2Amt: true,
          mnfuSrvc_3Amt: true,
          mnfuSrvc_4Amt: true,
          otcstAmt: true,
          pcfeAmt: true,
          pcfeLcneAmt: true,
          pckgAmt: true,
          pdlsNo: true,
          pyrTrifAmt: true,
          reffNo: true,
          resaleErnAmt: true,
          techSpptCst: true,
          trnpCstAmt: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: TbClreDedPrcDclrPdls })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTbClreDedPrcDclrPdls(
    @common.Param() params: TbClreDedPrcDclrPdlsWhereUniqueInput
  ): Promise<TbClreDedPrcDclrPdls | null> {
    try {
      return await this.service.deleteTbClreDedPrcDclrPdls({
        where: params,
        select: {
          brngTrnpCst: true,
          byerPymnCst: true,
          createdAt: true,
          delYn: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          id: true,
          indrPymnTamt: true,
          infeeAmt: true,
          lastChgDttm: true,
          lastChprId: true,
          loadCstAmt: true,
          mdfyDgcnt: true,
          mdlStszNo: true,
          mdtnPcfeAmt: true,
          mnfuSrvc_1Amt: true,
          mnfuSrvc_2Amt: true,
          mnfuSrvc_3Amt: true,
          mnfuSrvc_4Amt: true,
          otcstAmt: true,
          pcfeAmt: true,
          pcfeLcneAmt: true,
          pckgAmt: true,
          pdlsNo: true,
          pyrTrifAmt: true,
          reffNo: true,
          resaleErnAmt: true,
          techSpptCst: true,
          trnpCstAmt: true,
          updatedAt: true,
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
