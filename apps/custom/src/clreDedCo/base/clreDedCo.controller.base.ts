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
import { ClreDedCoService } from "../clreDedCo.service";
import { ClreDedCoCreateInput } from "./ClreDedCoCreateInput";
import { ClreDedCo } from "./ClreDedCo";
import { ClreDedCoFindManyArgs } from "./ClreDedCoFindManyArgs";
import { ClreDedCoWhereUniqueInput } from "./ClreDedCoWhereUniqueInput";
import { ClreDedCoUpdateInput } from "./ClreDedCoUpdateInput";

export class ClreDedCoControllerBase {
  constructor(protected readonly service: ClreDedCoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ClreDedCo })
  @swagger.ApiBody({
    type: ClreDedCoCreateInput,
  })
  async createClreDedCo(
    @common.Body() data: ClreDedCoCreateInput
  ): Promise<ClreDedCo> {
    return await this.service.createClreDedCo({
      data: data,
      select: {
        createdAt: true,
        dcerAddr: true,
        dcerCoNm: true,
        delYn: true,
        exppnAddr: true,
        exppnCoNm: true,
        exppnEml: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        imppnAddr: true,
        imppnCoNm: true,
        lastChgDttm: true,
        lastChprId: true,
        mdfyDgcnt: true,
        reffNo: true,
        txprAddr: true,
        txprCoNm: true,
        txprEml: true,
        txprTlphNo: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ClreDedCo] })
  @ApiNestedQuery(ClreDedCoFindManyArgs)
  async clreDedCos(@common.Req() request: Request): Promise<ClreDedCo[]> {
    const args = plainToClass(ClreDedCoFindManyArgs, request.query);
    return this.service.clreDedCos({
      ...args,
      select: {
        createdAt: true,
        dcerAddr: true,
        dcerCoNm: true,
        delYn: true,
        exppnAddr: true,
        exppnCoNm: true,
        exppnEml: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        imppnAddr: true,
        imppnCoNm: true,
        lastChgDttm: true,
        lastChprId: true,
        mdfyDgcnt: true,
        reffNo: true,
        txprAddr: true,
        txprCoNm: true,
        txprEml: true,
        txprTlphNo: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ClreDedCo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async clreDedCo(
    @common.Param() params: ClreDedCoWhereUniqueInput
  ): Promise<ClreDedCo | null> {
    const result = await this.service.clreDedCo({
      where: params,
      select: {
        createdAt: true,
        dcerAddr: true,
        dcerCoNm: true,
        delYn: true,
        exppnAddr: true,
        exppnCoNm: true,
        exppnEml: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        imppnAddr: true,
        imppnCoNm: true,
        lastChgDttm: true,
        lastChprId: true,
        mdfyDgcnt: true,
        reffNo: true,
        txprAddr: true,
        txprCoNm: true,
        txprEml: true,
        txprTlphNo: true,
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
  @swagger.ApiOkResponse({ type: ClreDedCo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ClreDedCoUpdateInput,
  })
  async updateClreDedCo(
    @common.Param() params: ClreDedCoWhereUniqueInput,
    @common.Body() data: ClreDedCoUpdateInput
  ): Promise<ClreDedCo | null> {
    try {
      return await this.service.updateClreDedCo({
        where: params,
        data: data,
        select: {
          createdAt: true,
          dcerAddr: true,
          dcerCoNm: true,
          delYn: true,
          exppnAddr: true,
          exppnCoNm: true,
          exppnEml: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          id: true,
          imppnAddr: true,
          imppnCoNm: true,
          lastChgDttm: true,
          lastChprId: true,
          mdfyDgcnt: true,
          reffNo: true,
          txprAddr: true,
          txprCoNm: true,
          txprEml: true,
          txprTlphNo: true,
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
  @swagger.ApiOkResponse({ type: ClreDedCo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteClreDedCo(
    @common.Param() params: ClreDedCoWhereUniqueInput
  ): Promise<ClreDedCo | null> {
    try {
      return await this.service.deleteClreDedCo({
        where: params,
        select: {
          createdAt: true,
          dcerAddr: true,
          dcerCoNm: true,
          delYn: true,
          exppnAddr: true,
          exppnCoNm: true,
          exppnEml: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          id: true,
          imppnAddr: true,
          imppnCoNm: true,
          lastChgDttm: true,
          lastChprId: true,
          mdfyDgcnt: true,
          reffNo: true,
          txprAddr: true,
          txprCoNm: true,
          txprEml: true,
          txprTlphNo: true,
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
