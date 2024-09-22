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
import { AchievementScriptsService } from "../achievementScripts.service";
import { AchievementScriptsCreateInput } from "./AchievementScriptsCreateInput";
import { AchievementScriptsWhereInput } from "./AchievementScriptsWhereInput";
import { AchievementScriptsWhereUniqueInput } from "./AchievementScriptsWhereUniqueInput";
import { AchievementScriptsFindManyArgs } from "./AchievementScriptsFindManyArgs";
import { AchievementScriptsUpdateInput } from "./AchievementScriptsUpdateInput";
import { AchievementScripts } from "./AchievementScripts";

export class AchievementScriptsGrpcControllerBase {
  constructor(protected readonly service: AchievementScriptsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AchievementScripts })
  @GrpcMethod("AchievementScriptsService", "createAchievementScripts")
  async createAchievementScripts(
    @common.Body() data: AchievementScriptsCreateInput
  ): Promise<AchievementScripts> {
    return await this.service.createAchievementScripts({
      data: data,
      select: {
        achievementId: true,
        createdAt: true,
        id: true,
        scriptName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AchievementScripts] })
  @ApiNestedQuery(AchievementScriptsFindManyArgs)
  @GrpcMethod("AchievementScriptsService", "achievementScriptsItems")
  async achievementScriptsItems(
    @common.Req() request: Request
  ): Promise<AchievementScripts[]> {
    const args = plainToClass(AchievementScriptsFindManyArgs, request.query);
    return this.service.achievementScriptsItems({
      ...args,
      select: {
        achievementId: true,
        createdAt: true,
        id: true,
        scriptName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AchievementScripts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AchievementScriptsService", "achievementScripts")
  async achievementScripts(
    @common.Param() params: AchievementScriptsWhereUniqueInput
  ): Promise<AchievementScripts | null> {
    const result = await this.service.achievementScripts({
      where: params,
      select: {
        achievementId: true,
        createdAt: true,
        id: true,
        scriptName: true,
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
  @swagger.ApiOkResponse({ type: AchievementScripts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AchievementScriptsService", "updateAchievementScripts")
  async updateAchievementScripts(
    @common.Param() params: AchievementScriptsWhereUniqueInput,
    @common.Body() data: AchievementScriptsUpdateInput
  ): Promise<AchievementScripts | null> {
    try {
      return await this.service.updateAchievementScripts({
        where: params,
        data: data,
        select: {
          achievementId: true,
          createdAt: true,
          id: true,
          scriptName: true,
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
  @swagger.ApiOkResponse({ type: AchievementScripts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AchievementScriptsService", "deleteAchievementScripts")
  async deleteAchievementScripts(
    @common.Param() params: AchievementScriptsWhereUniqueInput
  ): Promise<AchievementScripts | null> {
    try {
      return await this.service.deleteAchievementScripts({
        where: params,
        select: {
          achievementId: true,
          createdAt: true,
          id: true,
          scriptName: true,
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
