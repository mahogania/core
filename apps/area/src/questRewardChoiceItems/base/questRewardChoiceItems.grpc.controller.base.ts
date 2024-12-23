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
import { QuestRewardChoiceItemsService } from "../questRewardChoiceItems.service";
import { QuestRewardChoiceItemsCreateInput } from "./QuestRewardChoiceItemsCreateInput";
import { QuestRewardChoiceItemsWhereInput } from "./QuestRewardChoiceItemsWhereInput";
import { QuestRewardChoiceItemsWhereUniqueInput } from "./QuestRewardChoiceItemsWhereUniqueInput";
import { QuestRewardChoiceItemsFindManyArgs } from "./QuestRewardChoiceItemsFindManyArgs";
import { QuestRewardChoiceItemsUpdateInput } from "./QuestRewardChoiceItemsUpdateInput";
import { QuestRewardChoiceItems } from "./QuestRewardChoiceItems";

export class QuestRewardChoiceItemsGrpcControllerBase {
  constructor(protected readonly service: QuestRewardChoiceItemsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestRewardChoiceItems })
  @GrpcMethod("QuestRewardChoiceItemsService", "createQuestRewardChoiceItems")
  async createQuestRewardChoiceItems(
    @common.Body() data: QuestRewardChoiceItemsCreateInput
  ): Promise<QuestRewardChoiceItems> {
    return await this.service.createQuestRewardChoiceItems({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestRewardChoiceItems] })
  @ApiNestedQuery(QuestRewardChoiceItemsFindManyArgs)
  @GrpcMethod("QuestRewardChoiceItemsService", "questRewardChoiceItemsItems")
  async questRewardChoiceItemsItems(
    @common.Req() request: Request
  ): Promise<QuestRewardChoiceItems[]> {
    const args = plainToClass(
      QuestRewardChoiceItemsFindManyArgs,
      request.query
    );
    return this.service.questRewardChoiceItemsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestRewardChoiceItems })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestRewardChoiceItemsService", "questRewardChoiceItems")
  async questRewardChoiceItems(
    @common.Param() params: QuestRewardChoiceItemsWhereUniqueInput
  ): Promise<QuestRewardChoiceItems | null> {
    const result = await this.service.questRewardChoiceItems({
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
  @swagger.ApiOkResponse({ type: QuestRewardChoiceItems })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestRewardChoiceItemsService", "updateQuestRewardChoiceItems")
  async updateQuestRewardChoiceItems(
    @common.Param() params: QuestRewardChoiceItemsWhereUniqueInput,
    @common.Body() data: QuestRewardChoiceItemsUpdateInput
  ): Promise<QuestRewardChoiceItems | null> {
    try {
      return await this.service.updateQuestRewardChoiceItems({
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
  @swagger.ApiOkResponse({ type: QuestRewardChoiceItems })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestRewardChoiceItemsService", "deleteQuestRewardChoiceItems")
  async deleteQuestRewardChoiceItems(
    @common.Param() params: QuestRewardChoiceItemsWhereUniqueInput
  ): Promise<QuestRewardChoiceItems | null> {
    try {
      return await this.service.deleteQuestRewardChoiceItems({
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
