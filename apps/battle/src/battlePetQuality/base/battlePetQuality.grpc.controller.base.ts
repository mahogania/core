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
import { BattlePetQualityService } from "../battlePetQuality.service";
import { BattlePetQualityCreateInput } from "./BattlePetQualityCreateInput";
import { BattlePetQualityWhereInput } from "./BattlePetQualityWhereInput";
import { BattlePetQualityWhereUniqueInput } from "./BattlePetQualityWhereUniqueInput";
import { BattlePetQualityFindManyArgs } from "./BattlePetQualityFindManyArgs";
import { BattlePetQualityUpdateInput } from "./BattlePetQualityUpdateInput";
import { BattlePetQuality } from "./BattlePetQuality";

export class BattlePetQualityGrpcControllerBase {
  constructor(protected readonly service: BattlePetQualityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BattlePetQuality })
  @GrpcMethod("BattlePetQualityService", "createBattlePetQuality")
  async createBattlePetQuality(
    @common.Body() data: BattlePetQualityCreateInput
  ): Promise<BattlePetQuality> {
    return await this.service.createBattlePetQuality({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BattlePetQuality] })
  @ApiNestedQuery(BattlePetQualityFindManyArgs)
  @GrpcMethod("BattlePetQualityService", "battlePetQualities")
  async battlePetQualities(
    @common.Req() request: Request
  ): Promise<BattlePetQuality[]> {
    const args = plainToClass(BattlePetQualityFindManyArgs, request.query);
    return this.service.battlePetQualities({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BattlePetQuality })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("BattlePetQualityService", "battlePetQuality")
  async battlePetQuality(
    @common.Param() params: BattlePetQualityWhereUniqueInput
  ): Promise<BattlePetQuality | null> {
    const result = await this.service.battlePetQuality({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: BattlePetQuality })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("BattlePetQualityService", "updateBattlePetQuality")
  async updateBattlePetQuality(
    @common.Param() params: BattlePetQualityWhereUniqueInput,
    @common.Body() data: BattlePetQualityUpdateInput
  ): Promise<BattlePetQuality | null> {
    try {
      return await this.service.updateBattlePetQuality({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: BattlePetQuality })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("BattlePetQualityService", "deleteBattlePetQuality")
  async deleteBattlePetQuality(
    @common.Param() params: BattlePetQualityWhereUniqueInput
  ): Promise<BattlePetQuality | null> {
    try {
      return await this.service.deleteBattlePetQuality({
        where: params,
        select: {
          createdAt: true,
          id: true,
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
