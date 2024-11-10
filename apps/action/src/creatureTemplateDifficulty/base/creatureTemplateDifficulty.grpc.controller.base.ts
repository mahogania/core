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
import { CreatureTemplateDifficultyService } from "../creatureTemplateDifficulty.service";
import { CreatureTemplateDifficultyCreateInput } from "./CreatureTemplateDifficultyCreateInput";
import { CreatureTemplateDifficultyWhereInput } from "./CreatureTemplateDifficultyWhereInput";
import { CreatureTemplateDifficultyWhereUniqueInput } from "./CreatureTemplateDifficultyWhereUniqueInput";
import { CreatureTemplateDifficultyFindManyArgs } from "./CreatureTemplateDifficultyFindManyArgs";
import { CreatureTemplateDifficultyUpdateInput } from "./CreatureTemplateDifficultyUpdateInput";
import { CreatureTemplateDifficulty } from "./CreatureTemplateDifficulty";

export class CreatureTemplateDifficultyGrpcControllerBase {
  constructor(protected readonly service: CreatureTemplateDifficultyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CreatureTemplateDifficulty })
  @GrpcMethod(
    "CreatureTemplateDifficultyService",
    "createCreatureTemplateDifficulty"
  )
  async createCreatureTemplateDifficulty(
    @common.Body() data: CreatureTemplateDifficultyCreateInput
  ): Promise<CreatureTemplateDifficulty> {
    return await this.service.createCreatureTemplateDifficulty({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CreatureTemplateDifficulty] })
  @ApiNestedQuery(CreatureTemplateDifficultyFindManyArgs)
  @GrpcMethod(
    "CreatureTemplateDifficultyService",
    "creatureTemplateDifficulties"
  )
  async creatureTemplateDifficulties(
    @common.Req() request: Request
  ): Promise<CreatureTemplateDifficulty[]> {
    const args = plainToClass(
      CreatureTemplateDifficultyFindManyArgs,
      request.query
    );
    return this.service.creatureTemplateDifficulties({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CreatureTemplateDifficulty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureTemplateDifficultyService", "creatureTemplateDifficulty")
  async creatureTemplateDifficulty(
    @common.Param() params: CreatureTemplateDifficultyWhereUniqueInput
  ): Promise<CreatureTemplateDifficulty | null> {
    const result = await this.service.creatureTemplateDifficulty({
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
  @swagger.ApiOkResponse({ type: CreatureTemplateDifficulty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "CreatureTemplateDifficultyService",
    "updateCreatureTemplateDifficulty"
  )
  async updateCreatureTemplateDifficulty(
    @common.Param() params: CreatureTemplateDifficultyWhereUniqueInput,
    @common.Body() data: CreatureTemplateDifficultyUpdateInput
  ): Promise<CreatureTemplateDifficulty | null> {
    try {
      return await this.service.updateCreatureTemplateDifficulty({
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
  @swagger.ApiOkResponse({ type: CreatureTemplateDifficulty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "CreatureTemplateDifficultyService",
    "deleteCreatureTemplateDifficulty"
  )
  async deleteCreatureTemplateDifficulty(
    @common.Param() params: CreatureTemplateDifficultyWhereUniqueInput
  ): Promise<CreatureTemplateDifficulty | null> {
    try {
      return await this.service.deleteCreatureTemplateDifficulty({
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