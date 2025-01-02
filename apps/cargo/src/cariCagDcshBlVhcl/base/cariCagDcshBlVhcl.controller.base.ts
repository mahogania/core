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
import { CariCagDcshBlVhclService } from "../cariCagDcshBlVhcl.service";
import { CariCagDcshBlVhclCreateInput } from "./CariCagDcshBlVhclCreateInput";
import { CariCagDcshBlVhcl } from "./CariCagDcshBlVhcl";
import { CariCagDcshBlVhclFindManyArgs } from "./CariCagDcshBlVhclFindManyArgs";
import { CariCagDcshBlVhclWhereUniqueInput } from "./CariCagDcshBlVhclWhereUniqueInput";
import { CariCagDcshBlVhclUpdateInput } from "./CariCagDcshBlVhclUpdateInput";

export class CariCagDcshBlVhclControllerBase {
  constructor(protected readonly service: CariCagDcshBlVhclService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CariCagDcshBlVhcl })
  @swagger.ApiBody({
    type: CariCagDcshBlVhclCreateInput,
  })
  async createCariCagDcshBlVhcl(
    @common.Body() data: CariCagDcshBlVhclCreateInput
  ): Promise<CariCagDcshBlVhcl> {
    return await this.service.createCariCagDcshBlVhcl({
      data: data,
      select: {
        cagMgmtNo: true,
        chssNo: true,
        createdAt: true,
        delYn: true,
        engnClndGcnt: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        lastChgDttm: true,
        lastChprId: true,
        mrn: true,
        updatedAt: true,
        vhclKndNm: true,
        vhclMdlCd: true,
        vhclMnfcYy: true,
        vhclMnurCd: true,
        vhclRgsrNo: true,
        vhclSrno: true,
        vhclTotlWght: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CariCagDcshBlVhcl] })
  @ApiNestedQuery(CariCagDcshBlVhclFindManyArgs)
  async cariCagDcshBlVhcls(
    @common.Req() request: Request
  ): Promise<CariCagDcshBlVhcl[]> {
    const args = plainToClass(CariCagDcshBlVhclFindManyArgs, request.query);
    return this.service.cariCagDcshBlVhcls({
      ...args,
      select: {
        cagMgmtNo: true,
        chssNo: true,
        createdAt: true,
        delYn: true,
        engnClndGcnt: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        lastChgDttm: true,
        lastChprId: true,
        mrn: true,
        updatedAt: true,
        vhclKndNm: true,
        vhclMdlCd: true,
        vhclMnfcYy: true,
        vhclMnurCd: true,
        vhclRgsrNo: true,
        vhclSrno: true,
        vhclTotlWght: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CariCagDcshBlVhcl })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async cariCagDcshBlVhcl(
    @common.Param() params: CariCagDcshBlVhclWhereUniqueInput
  ): Promise<CariCagDcshBlVhcl | null> {
    const result = await this.service.cariCagDcshBlVhcl({
      where: params,
      select: {
        cagMgmtNo: true,
        chssNo: true,
        createdAt: true,
        delYn: true,
        engnClndGcnt: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        lastChgDttm: true,
        lastChprId: true,
        mrn: true,
        updatedAt: true,
        vhclKndNm: true,
        vhclMdlCd: true,
        vhclMnfcYy: true,
        vhclMnurCd: true,
        vhclRgsrNo: true,
        vhclSrno: true,
        vhclTotlWght: true,
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
  @swagger.ApiOkResponse({ type: CariCagDcshBlVhcl })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: CariCagDcshBlVhclUpdateInput,
  })
  async updateCariCagDcshBlVhcl(
    @common.Param() params: CariCagDcshBlVhclWhereUniqueInput,
    @common.Body() data: CariCagDcshBlVhclUpdateInput
  ): Promise<CariCagDcshBlVhcl | null> {
    try {
      return await this.service.updateCariCagDcshBlVhcl({
        where: params,
        data: data,
        select: {
          cagMgmtNo: true,
          chssNo: true,
          createdAt: true,
          delYn: true,
          engnClndGcnt: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          id: true,
          lastChgDttm: true,
          lastChprId: true,
          mrn: true,
          updatedAt: true,
          vhclKndNm: true,
          vhclMdlCd: true,
          vhclMnfcYy: true,
          vhclMnurCd: true,
          vhclRgsrNo: true,
          vhclSrno: true,
          vhclTotlWght: true,
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
  @swagger.ApiOkResponse({ type: CariCagDcshBlVhcl })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCariCagDcshBlVhcl(
    @common.Param() params: CariCagDcshBlVhclWhereUniqueInput
  ): Promise<CariCagDcshBlVhcl | null> {
    try {
      return await this.service.deleteCariCagDcshBlVhcl({
        where: params,
        select: {
          cagMgmtNo: true,
          chssNo: true,
          createdAt: true,
          delYn: true,
          engnClndGcnt: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          id: true,
          lastChgDttm: true,
          lastChprId: true,
          mrn: true,
          updatedAt: true,
          vhclKndNm: true,
          vhclMdlCd: true,
          vhclMnfcYy: true,
          vhclMnurCd: true,
          vhclRgsrNo: true,
          vhclSrno: true,
          vhclTotlWght: true,
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
