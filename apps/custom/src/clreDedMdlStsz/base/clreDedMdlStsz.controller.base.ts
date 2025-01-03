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
import { ClreDedMdlStszService } from "../clreDedMdlStsz.service";
import { ClreDedMdlStszCreateInput } from "./ClreDedMdlStszCreateInput";
import { ClreDedMdlStsz } from "./ClreDedMdlStsz";
import { ClreDedMdlStszFindManyArgs } from "./ClreDedMdlStszFindManyArgs";
import { ClreDedMdlStszWhereUniqueInput } from "./ClreDedMdlStszWhereUniqueInput";
import { ClreDedMdlStszUpdateInput } from "./ClreDedMdlStszUpdateInput";

export class ClreDedMdlStszControllerBase {
  constructor(protected readonly service: ClreDedMdlStszService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ClreDedMdlStsz })
  @swagger.ApiBody({
    type: ClreDedMdlStszCreateInput,
  })
  async createClreDedMdlStsz(
    @common.Body() data: ClreDedMdlStszCreateInput
  ): Promise<ClreDedMdlStsz> {
    return await this.service.createClreDedMdlStsz({
      data: data,
      select: {
        cachAmt: true,
        cachCurrCd: true,
        cachFxrt: true,
        cachNcyAmt: true,
        createdAt: true,
        ddctAmt: true,
        ddctCurrCd: true,
        ddctFxrt: true,
        ddctNcyAmt: true,
        ddctRt: true,
        delYn: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        indrPymnTamt: true,
        infeeAmt: true,
        infeeCurrCd: true,
        infeeFxrt: true,
        infeeNcyAmt: true,
        ingrNm: true,
        invcAmt: true,
        invcCurrCd: true,
        invcFxrt: true,
        invcNcyAmt: true,
        invcUsdAmt: true,
        lastChgDttm: true,
        lastChprId: true,
        mdfyDgcnt: true,
        mdlStszNm: true,
        mdlStszNo: true,
        otcstAmt: true,
        otcstCurrCd: true,
        otcstFxrt: true,
        otcstNcyAmt: true,
        pdlsNo: true,
        qty: true,
        qtyUtCd: true,
        reffNo: true,
        ttxbsNcyAmt: true,
        ttxbsUsdAmt: true,
        tvlutNcyAmt: true,
        tvlutUsdAmt: true,
        updatedAt: true,
        utPrc: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ClreDedMdlStsz] })
  @ApiNestedQuery(ClreDedMdlStszFindManyArgs)
  async clreDedMdlStszs(
    @common.Req() request: Request
  ): Promise<ClreDedMdlStsz[]> {
    const args = plainToClass(ClreDedMdlStszFindManyArgs, request.query);
    return this.service.clreDedMdlStszs({
      ...args,
      select: {
        cachAmt: true,
        cachCurrCd: true,
        cachFxrt: true,
        cachNcyAmt: true,
        createdAt: true,
        ddctAmt: true,
        ddctCurrCd: true,
        ddctFxrt: true,
        ddctNcyAmt: true,
        ddctRt: true,
        delYn: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        indrPymnTamt: true,
        infeeAmt: true,
        infeeCurrCd: true,
        infeeFxrt: true,
        infeeNcyAmt: true,
        ingrNm: true,
        invcAmt: true,
        invcCurrCd: true,
        invcFxrt: true,
        invcNcyAmt: true,
        invcUsdAmt: true,
        lastChgDttm: true,
        lastChprId: true,
        mdfyDgcnt: true,
        mdlStszNm: true,
        mdlStszNo: true,
        otcstAmt: true,
        otcstCurrCd: true,
        otcstFxrt: true,
        otcstNcyAmt: true,
        pdlsNo: true,
        qty: true,
        qtyUtCd: true,
        reffNo: true,
        ttxbsNcyAmt: true,
        ttxbsUsdAmt: true,
        tvlutNcyAmt: true,
        tvlutUsdAmt: true,
        updatedAt: true,
        utPrc: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ClreDedMdlStsz })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async clreDedMdlStsz(
    @common.Param() params: ClreDedMdlStszWhereUniqueInput
  ): Promise<ClreDedMdlStsz | null> {
    const result = await this.service.clreDedMdlStsz({
      where: params,
      select: {
        cachAmt: true,
        cachCurrCd: true,
        cachFxrt: true,
        cachNcyAmt: true,
        createdAt: true,
        ddctAmt: true,
        ddctCurrCd: true,
        ddctFxrt: true,
        ddctNcyAmt: true,
        ddctRt: true,
        delYn: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        indrPymnTamt: true,
        infeeAmt: true,
        infeeCurrCd: true,
        infeeFxrt: true,
        infeeNcyAmt: true,
        ingrNm: true,
        invcAmt: true,
        invcCurrCd: true,
        invcFxrt: true,
        invcNcyAmt: true,
        invcUsdAmt: true,
        lastChgDttm: true,
        lastChprId: true,
        mdfyDgcnt: true,
        mdlStszNm: true,
        mdlStszNo: true,
        otcstAmt: true,
        otcstCurrCd: true,
        otcstFxrt: true,
        otcstNcyAmt: true,
        pdlsNo: true,
        qty: true,
        qtyUtCd: true,
        reffNo: true,
        ttxbsNcyAmt: true,
        ttxbsUsdAmt: true,
        tvlutNcyAmt: true,
        tvlutUsdAmt: true,
        updatedAt: true,
        utPrc: true,
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
  @swagger.ApiOkResponse({ type: ClreDedMdlStsz })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ClreDedMdlStszUpdateInput,
  })
  async updateClreDedMdlStsz(
    @common.Param() params: ClreDedMdlStszWhereUniqueInput,
    @common.Body() data: ClreDedMdlStszUpdateInput
  ): Promise<ClreDedMdlStsz | null> {
    try {
      return await this.service.updateClreDedMdlStsz({
        where: params,
        data: data,
        select: {
          cachAmt: true,
          cachCurrCd: true,
          cachFxrt: true,
          cachNcyAmt: true,
          createdAt: true,
          ddctAmt: true,
          ddctCurrCd: true,
          ddctFxrt: true,
          ddctNcyAmt: true,
          ddctRt: true,
          delYn: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          id: true,
          indrPymnTamt: true,
          infeeAmt: true,
          infeeCurrCd: true,
          infeeFxrt: true,
          infeeNcyAmt: true,
          ingrNm: true,
          invcAmt: true,
          invcCurrCd: true,
          invcFxrt: true,
          invcNcyAmt: true,
          invcUsdAmt: true,
          lastChgDttm: true,
          lastChprId: true,
          mdfyDgcnt: true,
          mdlStszNm: true,
          mdlStszNo: true,
          otcstAmt: true,
          otcstCurrCd: true,
          otcstFxrt: true,
          otcstNcyAmt: true,
          pdlsNo: true,
          qty: true,
          qtyUtCd: true,
          reffNo: true,
          ttxbsNcyAmt: true,
          ttxbsUsdAmt: true,
          tvlutNcyAmt: true,
          tvlutUsdAmt: true,
          updatedAt: true,
          utPrc: true,
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
  @swagger.ApiOkResponse({ type: ClreDedMdlStsz })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteClreDedMdlStsz(
    @common.Param() params: ClreDedMdlStszWhereUniqueInput
  ): Promise<ClreDedMdlStsz | null> {
    try {
      return await this.service.deleteClreDedMdlStsz({
        where: params,
        select: {
          cachAmt: true,
          cachCurrCd: true,
          cachFxrt: true,
          cachNcyAmt: true,
          createdAt: true,
          ddctAmt: true,
          ddctCurrCd: true,
          ddctFxrt: true,
          ddctNcyAmt: true,
          ddctRt: true,
          delYn: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          id: true,
          indrPymnTamt: true,
          infeeAmt: true,
          infeeCurrCd: true,
          infeeFxrt: true,
          infeeNcyAmt: true,
          ingrNm: true,
          invcAmt: true,
          invcCurrCd: true,
          invcFxrt: true,
          invcNcyAmt: true,
          invcUsdAmt: true,
          lastChgDttm: true,
          lastChprId: true,
          mdfyDgcnt: true,
          mdlStszNm: true,
          mdlStszNo: true,
          otcstAmt: true,
          otcstCurrCd: true,
          otcstFxrt: true,
          otcstNcyAmt: true,
          pdlsNo: true,
          qty: true,
          qtyUtCd: true,
          reffNo: true,
          ttxbsNcyAmt: true,
          ttxbsUsdAmt: true,
          tvlutNcyAmt: true,
          tvlutUsdAmt: true,
          updatedAt: true,
          utPrc: true,
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
