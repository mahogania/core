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
import { CariCagDcshBlTrnpService } from "../cariCagDcshBlTrnp.service";
import { CariCagDcshBlTrnpCreateInput } from "./CariCagDcshBlTrnpCreateInput";
import { CariCagDcshBlTrnpWhereInput } from "./CariCagDcshBlTrnpWhereInput";
import { CariCagDcshBlTrnpWhereUniqueInput } from "./CariCagDcshBlTrnpWhereUniqueInput";
import { CariCagDcshBlTrnpFindManyArgs } from "./CariCagDcshBlTrnpFindManyArgs";
import { CariCagDcshBlTrnpUpdateInput } from "./CariCagDcshBlTrnpUpdateInput";
import { CariCagDcshBlTrnp } from "./CariCagDcshBlTrnp";

export class CariCagDcshBlTrnpGrpcControllerBase {
  constructor(protected readonly service: CariCagDcshBlTrnpService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CariCagDcshBlTrnp })
  @GrpcMethod("CariCagDcshBlTrnpService", "createCariCagDcshBlTrnp")
  async createCariCagDcshBlTrnp(
    @common.Body() data: CariCagDcshBlTrnpCreateInput
  ): Promise<CariCagDcshBlTrnp> {
    return await this.service.createCariCagDcshBlTrnp({
      data: data,
      select: {
        chssNo: true,
        createdAt: true,
        delYn: true,
        drvrNm: true,
        drvrPsprNo: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        lastChgDttm: true,
        lastChprId: true,
        mrn: true,
        trnpMethNatCd: true,
        updatedAt: true,
        vhclMnurCd: true,
        vhclNttn: true,
        vhclPtCd: true,
        vhclRgsrNo: true,
        vhclSrno: true,
        vhclTtn: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CariCagDcshBlTrnp] })
  @ApiNestedQuery(CariCagDcshBlTrnpFindManyArgs)
  @GrpcMethod("CariCagDcshBlTrnpService", "cariCagDcshBlTrnps")
  async cariCagDcshBlTrnps(
    @common.Req() request: Request
  ): Promise<CariCagDcshBlTrnp[]> {
    const args = plainToClass(CariCagDcshBlTrnpFindManyArgs, request.query);
    return this.service.cariCagDcshBlTrnps({
      ...args,
      select: {
        chssNo: true,
        createdAt: true,
        delYn: true,
        drvrNm: true,
        drvrPsprNo: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        lastChgDttm: true,
        lastChprId: true,
        mrn: true,
        trnpMethNatCd: true,
        updatedAt: true,
        vhclMnurCd: true,
        vhclNttn: true,
        vhclPtCd: true,
        vhclRgsrNo: true,
        vhclSrno: true,
        vhclTtn: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CariCagDcshBlTrnp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CariCagDcshBlTrnpService", "cariCagDcshBlTrnp")
  async cariCagDcshBlTrnp(
    @common.Param() params: CariCagDcshBlTrnpWhereUniqueInput
  ): Promise<CariCagDcshBlTrnp | null> {
    const result = await this.service.cariCagDcshBlTrnp({
      where: params,
      select: {
        chssNo: true,
        createdAt: true,
        delYn: true,
        drvrNm: true,
        drvrPsprNo: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        lastChgDttm: true,
        lastChprId: true,
        mrn: true,
        trnpMethNatCd: true,
        updatedAt: true,
        vhclMnurCd: true,
        vhclNttn: true,
        vhclPtCd: true,
        vhclRgsrNo: true,
        vhclSrno: true,
        vhclTtn: true,
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
  @swagger.ApiOkResponse({ type: CariCagDcshBlTrnp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CariCagDcshBlTrnpService", "updateCariCagDcshBlTrnp")
  async updateCariCagDcshBlTrnp(
    @common.Param() params: CariCagDcshBlTrnpWhereUniqueInput,
    @common.Body() data: CariCagDcshBlTrnpUpdateInput
  ): Promise<CariCagDcshBlTrnp | null> {
    try {
      return await this.service.updateCariCagDcshBlTrnp({
        where: params,
        data: data,
        select: {
          chssNo: true,
          createdAt: true,
          delYn: true,
          drvrNm: true,
          drvrPsprNo: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          id: true,
          lastChgDttm: true,
          lastChprId: true,
          mrn: true,
          trnpMethNatCd: true,
          updatedAt: true,
          vhclMnurCd: true,
          vhclNttn: true,
          vhclPtCd: true,
          vhclRgsrNo: true,
          vhclSrno: true,
          vhclTtn: true,
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
  @swagger.ApiOkResponse({ type: CariCagDcshBlTrnp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CariCagDcshBlTrnpService", "deleteCariCagDcshBlTrnp")
  async deleteCariCagDcshBlTrnp(
    @common.Param() params: CariCagDcshBlTrnpWhereUniqueInput
  ): Promise<CariCagDcshBlTrnp | null> {
    try {
      return await this.service.deleteCariCagDcshBlTrnp({
        where: params,
        select: {
          chssNo: true,
          createdAt: true,
          delYn: true,
          drvrNm: true,
          drvrPsprNo: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          id: true,
          lastChgDttm: true,
          lastChprId: true,
          mrn: true,
          trnpMethNatCd: true,
          updatedAt: true,
          vhclMnurCd: true,
          vhclNttn: true,
          vhclPtCd: true,
          vhclRgsrNo: true,
          vhclSrno: true,
          vhclTtn: true,
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
