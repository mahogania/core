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
import { TbClreDedCntrService } from "../tbClreDedCntr.service";
import { TbClreDedCntrCreateInput } from "./TbClreDedCntrCreateInput";
import { TbClreDedCntrWhereInput } from "./TbClreDedCntrWhereInput";
import { TbClreDedCntrWhereUniqueInput } from "./TbClreDedCntrWhereUniqueInput";
import { TbClreDedCntrFindManyArgs } from "./TbClreDedCntrFindManyArgs";
import { TbClreDedCntrUpdateInput } from "./TbClreDedCntrUpdateInput";
import { TbClreDedCntr } from "./TbClreDedCntr";

export class TbClreDedCntrGrpcControllerBase {
  constructor(protected readonly service: TbClreDedCntrService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TbClreDedCntr })
  @GrpcMethod("TbClreDedCntrService", "createTbClreDedCntr")
  async createTbClreDedCntr(
    @common.Body() data: TbClreDedCntrCreateInput
  ): Promise<TbClreDedCntr> {
    return await this.service.createTbClreDedCntr({
      data: data,
      select: {
        cntrNo: true,
        cntrSrno: true,
        cntrStfnSttsCd: true,
        cntrTpCd: true,
        createdAt: true,
        delYn: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        inscTrgtYn: true,
        lastChgDttm: true,
        lastChprId: true,
        mdfyDgcnt: true,
        reffNo: true,
        sealChpn1: true,
        sealChpn2: true,
        sealChpn3: true,
        sealChpnCd: true,
        sealNo1: true,
        sealNo2: true,
        sealNo3: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TbClreDedCntr] })
  @ApiNestedQuery(TbClreDedCntrFindManyArgs)
  @GrpcMethod("TbClreDedCntrService", "tbClreDedCntrs")
  async tbClreDedCntrs(
    @common.Req() request: Request
  ): Promise<TbClreDedCntr[]> {
    const args = plainToClass(TbClreDedCntrFindManyArgs, request.query);
    return this.service.tbClreDedCntrs({
      ...args,
      select: {
        cntrNo: true,
        cntrSrno: true,
        cntrStfnSttsCd: true,
        cntrTpCd: true,
        createdAt: true,
        delYn: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        inscTrgtYn: true,
        lastChgDttm: true,
        lastChprId: true,
        mdfyDgcnt: true,
        reffNo: true,
        sealChpn1: true,
        sealChpn2: true,
        sealChpn3: true,
        sealChpnCd: true,
        sealNo1: true,
        sealNo2: true,
        sealNo3: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TbClreDedCntr })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("TbClreDedCntrService", "tbClreDedCntr")
  async tbClreDedCntr(
    @common.Param() params: TbClreDedCntrWhereUniqueInput
  ): Promise<TbClreDedCntr | null> {
    const result = await this.service.tbClreDedCntr({
      where: params,
      select: {
        cntrNo: true,
        cntrSrno: true,
        cntrStfnSttsCd: true,
        cntrTpCd: true,
        createdAt: true,
        delYn: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        inscTrgtYn: true,
        lastChgDttm: true,
        lastChprId: true,
        mdfyDgcnt: true,
        reffNo: true,
        sealChpn1: true,
        sealChpn2: true,
        sealChpn3: true,
        sealChpnCd: true,
        sealNo1: true,
        sealNo2: true,
        sealNo3: true,
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
  @swagger.ApiOkResponse({ type: TbClreDedCntr })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("TbClreDedCntrService", "updateTbClreDedCntr")
  async updateTbClreDedCntr(
    @common.Param() params: TbClreDedCntrWhereUniqueInput,
    @common.Body() data: TbClreDedCntrUpdateInput
  ): Promise<TbClreDedCntr | null> {
    try {
      return await this.service.updateTbClreDedCntr({
        where: params,
        data: data,
        select: {
          cntrNo: true,
          cntrSrno: true,
          cntrStfnSttsCd: true,
          cntrTpCd: true,
          createdAt: true,
          delYn: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          id: true,
          inscTrgtYn: true,
          lastChgDttm: true,
          lastChprId: true,
          mdfyDgcnt: true,
          reffNo: true,
          sealChpn1: true,
          sealChpn2: true,
          sealChpn3: true,
          sealChpnCd: true,
          sealNo1: true,
          sealNo2: true,
          sealNo3: true,
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
  @swagger.ApiOkResponse({ type: TbClreDedCntr })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("TbClreDedCntrService", "deleteTbClreDedCntr")
  async deleteTbClreDedCntr(
    @common.Param() params: TbClreDedCntrWhereUniqueInput
  ): Promise<TbClreDedCntr | null> {
    try {
      return await this.service.deleteTbClreDedCntr({
        where: params,
        select: {
          cntrNo: true,
          cntrSrno: true,
          cntrStfnSttsCd: true,
          cntrTpCd: true,
          createdAt: true,
          delYn: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          id: true,
          inscTrgtYn: true,
          lastChgDttm: true,
          lastChprId: true,
          mdfyDgcnt: true,
          reffNo: true,
          sealChpn1: true,
          sealChpn2: true,
          sealChpn3: true,
          sealChpnCd: true,
          sealNo1: true,
          sealNo2: true,
          sealNo3: true,
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