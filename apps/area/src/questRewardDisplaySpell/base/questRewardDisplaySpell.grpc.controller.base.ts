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
import { QuestRewardDisplaySpellService } from "../questRewardDisplaySpell.service";
import { QuestRewardDisplaySpellCreateInput } from "./QuestRewardDisplaySpellCreateInput";
import { QuestRewardDisplaySpellWhereInput } from "./QuestRewardDisplaySpellWhereInput";
import { QuestRewardDisplaySpellWhereUniqueInput } from "./QuestRewardDisplaySpellWhereUniqueInput";
import { QuestRewardDisplaySpellFindManyArgs } from "./QuestRewardDisplaySpellFindManyArgs";
import { QuestRewardDisplaySpellUpdateInput } from "./QuestRewardDisplaySpellUpdateInput";
import { QuestRewardDisplaySpell } from "./QuestRewardDisplaySpell";

export class QuestRewardDisplaySpellGrpcControllerBase {
  constructor(protected readonly service: QuestRewardDisplaySpellService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestRewardDisplaySpell })
  @GrpcMethod("QuestRewardDisplaySpellService", "createQuestRewardDisplaySpell")
  async createQuestRewardDisplaySpell(
    @common.Body() data: QuestRewardDisplaySpellCreateInput
  ): Promise<QuestRewardDisplaySpell> {
    return await this.service.createQuestRewardDisplaySpell({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestRewardDisplaySpell] })
  @ApiNestedQuery(QuestRewardDisplaySpellFindManyArgs)
  @GrpcMethod("QuestRewardDisplaySpellService", "questRewardDisplaySpells")
  async questRewardDisplaySpells(
    @common.Req() request: Request
  ): Promise<QuestRewardDisplaySpell[]> {
    const args = plainToClass(
      QuestRewardDisplaySpellFindManyArgs,
      request.query
    );
    return this.service.questRewardDisplaySpells({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestRewardDisplaySpell })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestRewardDisplaySpellService", "questRewardDisplaySpell")
  async questRewardDisplaySpell(
    @common.Param() params: QuestRewardDisplaySpellWhereUniqueInput
  ): Promise<QuestRewardDisplaySpell | null> {
    const result = await this.service.questRewardDisplaySpell({
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
  @swagger.ApiOkResponse({ type: QuestRewardDisplaySpell })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestRewardDisplaySpellService", "updateQuestRewardDisplaySpell")
  async updateQuestRewardDisplaySpell(
    @common.Param() params: QuestRewardDisplaySpellWhereUniqueInput,
    @common.Body() data: QuestRewardDisplaySpellUpdateInput
  ): Promise<QuestRewardDisplaySpell | null> {
    try {
      return await this.service.updateQuestRewardDisplaySpell({
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
  @swagger.ApiOkResponse({ type: QuestRewardDisplaySpell })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestRewardDisplaySpellService", "deleteQuestRewardDisplaySpell")
  async deleteQuestRewardDisplaySpell(
    @common.Param() params: QuestRewardDisplaySpellWhereUniqueInput
  ): Promise<QuestRewardDisplaySpell | null> {
    try {
      return await this.service.deleteQuestRewardDisplaySpell({
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
