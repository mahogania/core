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
import { GrpcMethod } from "@nestjs/microservices";
import { TbClreDedVlutComnService } from "../tbClreDedVlutComn.service";
import { TbClreDedVlutComnCreateInput } from "./TbClreDedVlutComnCreateInput";
import { TbClreDedVlutComnWhereInput } from "./TbClreDedVlutComnWhereInput";
import { TbClreDedVlutComnWhereUniqueInput } from "./TbClreDedVlutComnWhereUniqueInput";
import { TbClreDedVlutComnFindManyArgs } from "./TbClreDedVlutComnFindManyArgs";
import { TbClreDedVlutComnUpdateInput } from "./TbClreDedVlutComnUpdateInput";
import { TbClreDedVlutComn } from "./TbClreDedVlutComn";

export class TbClreDedVlutComnGrpcControllerBase {
  constructor(protected readonly service: TbClreDedVlutComnService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TbClreDedVlutComn })
  @GrpcMethod("TbClreDedVlutComnService", "createTbClreDedVlutComn")
  async createTbClreDedVlutComn(
    @common.Body() data: TbClreDedVlutComnCreateInput
  ): Promise<TbClreDedVlutComn> {
    return await this.service.createTbClreDedVlutComn({
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
        infeeAmt: true,
        infeeCurrCd: true,
        infeeFxrt: true,
        infeeNcyAmt: true,
        invcAmt: true,
        invcCurrCd: true,
        invcFxrt: true,
        invcNcyAmt: true,
        invcUsdAmt: true,
        lastChgDttm: true,
        lastChprId: true,
        mdfyDgcnt: true,
        otcstAmt: true,
        otcstCurrCd: true,
        otcstFxrt: true,
        otcstNcyAmt: true,
        reffNo: true,
        ttxbsNcyAmt: true,
        ttxbsUsdAmt: true,
        tvlutNcyAmt: true,
        tvlutUsdAmt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TbClreDedVlutComn] })
  @ApiNestedQuery(TbClreDedVlutComnFindManyArgs)
  @GrpcMethod("TbClreDedVlutComnService", "tbClreDedVlutComns")
  async tbClreDedVlutComns(
    @common.Req() request: Request
  ): Promise<TbClreDedVlutComn[]> {
    const args = plainToClass(TbClreDedVlutComnFindManyArgs, request.query);
    return this.service.tbClreDedVlutComns({
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
        infeeAmt: true,
        infeeCurrCd: true,
        infeeFxrt: true,
        infeeNcyAmt: true,
        invcAmt: true,
        invcCurrCd: true,
        invcFxrt: true,
        invcNcyAmt: true,
        invcUsdAmt: true,
        lastChgDttm: true,
        lastChprId: true,
        mdfyDgcnt: true,
        otcstAmt: true,
        otcstCurrCd: true,
        otcstFxrt: true,
        otcstNcyAmt: true,
        reffNo: true,
        ttxbsNcyAmt: true,
        ttxbsUsdAmt: true,
        tvlutNcyAmt: true,
        tvlutUsdAmt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TbClreDedVlutComn })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("TbClreDedVlutComnService", "tbClreDedVlutComn")
  async tbClreDedVlutComn(
    @common.Param() params: TbClreDedVlutComnWhereUniqueInput
  ): Promise<TbClreDedVlutComn | null> {
    const result = await this.service.tbClreDedVlutComn({
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
        infeeAmt: true,
        infeeCurrCd: true,
        infeeFxrt: true,
        infeeNcyAmt: true,
        invcAmt: true,
        invcCurrCd: true,
        invcFxrt: true,
        invcNcyAmt: true,
        invcUsdAmt: true,
        lastChgDttm: true,
        lastChprId: true,
        mdfyDgcnt: true,
        otcstAmt: true,
        otcstCurrCd: true,
        otcstFxrt: true,
        otcstNcyAmt: true,
        reffNo: true,
        ttxbsNcyAmt: true,
        ttxbsUsdAmt: true,
        tvlutNcyAmt: true,
        tvlutUsdAmt: true,
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
  @swagger.ApiOkResponse({ type: TbClreDedVlutComn })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("TbClreDedVlutComnService", "updateTbClreDedVlutComn")
  async updateTbClreDedVlutComn(
    @common.Param() params: TbClreDedVlutComnWhereUniqueInput,
    @common.Body() data: TbClreDedVlutComnUpdateInput
  ): Promise<TbClreDedVlutComn | null> {
    try {
      return await this.service.updateTbClreDedVlutComn({
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
          infeeAmt: true,
          infeeCurrCd: true,
          infeeFxrt: true,
          infeeNcyAmt: true,
          invcAmt: true,
          invcCurrCd: true,
          invcFxrt: true,
          invcNcyAmt: true,
          invcUsdAmt: true,
          lastChgDttm: true,
          lastChprId: true,
          mdfyDgcnt: true,
          otcstAmt: true,
          otcstCurrCd: true,
          otcstFxrt: true,
          otcstNcyAmt: true,
          reffNo: true,
          ttxbsNcyAmt: true,
          ttxbsUsdAmt: true,
          tvlutNcyAmt: true,
          tvlutUsdAmt: true,
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
  @swagger.ApiOkResponse({ type: TbClreDedVlutComn })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("TbClreDedVlutComnService", "deleteTbClreDedVlutComn")
  async deleteTbClreDedVlutComn(
    @common.Param() params: TbClreDedVlutComnWhereUniqueInput
  ): Promise<TbClreDedVlutComn | null> {
    try {
      return await this.service.deleteTbClreDedVlutComn({
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
          infeeAmt: true,
          infeeCurrCd: true,
          infeeFxrt: true,
          infeeNcyAmt: true,
          invcAmt: true,
          invcCurrCd: true,
          invcFxrt: true,
          invcNcyAmt: true,
          invcUsdAmt: true,
          lastChgDttm: true,
          lastChprId: true,
          mdfyDgcnt: true,
          otcstAmt: true,
          otcstCurrCd: true,
          otcstFxrt: true,
          otcstNcyAmt: true,
          reffNo: true,
          ttxbsNcyAmt: true,
          ttxbsUsdAmt: true,
          tvlutNcyAmt: true,
          tvlutUsdAmt: true,
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
