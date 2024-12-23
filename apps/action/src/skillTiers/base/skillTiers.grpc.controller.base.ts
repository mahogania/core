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
import { SkillTiersService } from "../skillTiers.service";
import { SkillTiersCreateInput } from "./SkillTiersCreateInput";
import { SkillTiersWhereInput } from "./SkillTiersWhereInput";
import { SkillTiersWhereUniqueInput } from "./SkillTiersWhereUniqueInput";
import { SkillTiersFindManyArgs } from "./SkillTiersFindManyArgs";
import { SkillTiersUpdateInput } from "./SkillTiersUpdateInput";
import { SkillTiers } from "./SkillTiers";

export class SkillTiersGrpcControllerBase {
  constructor(protected readonly service: SkillTiersService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SkillTiers })
  @GrpcMethod("SkillTiersService", "createSkillTiers")
  async createSkillTiers(
    @common.Body() data: SkillTiersCreateInput
  ): Promise<SkillTiers> {
    return await this.service.createSkillTiers({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SkillTiers] })
  @ApiNestedQuery(SkillTiersFindManyArgs)
  @GrpcMethod("SkillTiersService", "skillTiersItems")
  async skillTiersItems(@common.Req() request: Request): Promise<SkillTiers[]> {
    const args = plainToClass(SkillTiersFindManyArgs, request.query);
    return this.service.skillTiersItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SkillTiers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SkillTiersService", "skillTiers")
  async skillTiers(
    @common.Param() params: SkillTiersWhereUniqueInput
  ): Promise<SkillTiers | null> {
    const result = await this.service.skillTiers({
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
  @swagger.ApiOkResponse({ type: SkillTiers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SkillTiersService", "updateSkillTiers")
  async updateSkillTiers(
    @common.Param() params: SkillTiersWhereUniqueInput,
    @common.Body() data: SkillTiersUpdateInput
  ): Promise<SkillTiers | null> {
    try {
      return await this.service.updateSkillTiers({
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
  @swagger.ApiOkResponse({ type: SkillTiers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SkillTiersService", "deleteSkillTiers")
  async deleteSkillTiers(
    @common.Param() params: SkillTiersWhereUniqueInput
  ): Promise<SkillTiers | null> {
    try {
      return await this.service.deleteSkillTiers({
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
