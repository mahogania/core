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
import { QuestRewardItemService } from "../questRewardItem.service";
import { QuestRewardItemCreateInput } from "./QuestRewardItemCreateInput";
import { QuestRewardItemWhereInput } from "./QuestRewardItemWhereInput";
import { QuestRewardItemWhereUniqueInput } from "./QuestRewardItemWhereUniqueInput";
import { QuestRewardItemFindManyArgs } from "./QuestRewardItemFindManyArgs";
import { QuestRewardItemUpdateInput } from "./QuestRewardItemUpdateInput";
import { QuestRewardItem } from "./QuestRewardItem";
import { QuestOfferRewardFindManyArgs } from "../../questOfferReward/base/QuestOfferRewardFindManyArgs";
import { QuestOfferReward } from "../../questOfferReward/base/QuestOfferReward";
import { QuestOfferRewardWhereUniqueInput } from "../../questOfferReward/base/QuestOfferRewardWhereUniqueInput";

export class QuestRewardItemGrpcControllerBase {
  constructor(protected readonly service: QuestRewardItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestRewardItem })
  @GrpcMethod("QuestRewardItemService", "createQuestRewardItem")
  async createQuestRewardItem(
    @common.Body() data: QuestRewardItemCreateInput
  ): Promise<QuestRewardItem> {
    return await this.service.createQuestRewardItem({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestRewardItem] })
  @ApiNestedQuery(QuestRewardItemFindManyArgs)
  @GrpcMethod("QuestRewardItemService", "questRewardItems")
  async questRewardItems(
    @common.Req() request: Request
  ): Promise<QuestRewardItem[]> {
    const args = plainToClass(QuestRewardItemFindManyArgs, request.query);
    return this.service.questRewardItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestRewardItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestRewardItemService", "questRewardItem")
  async questRewardItem(
    @common.Param() params: QuestRewardItemWhereUniqueInput
  ): Promise<QuestRewardItem | null> {
    const result = await this.service.questRewardItem({
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
  @swagger.ApiOkResponse({ type: QuestRewardItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestRewardItemService", "updateQuestRewardItem")
  async updateQuestRewardItem(
    @common.Param() params: QuestRewardItemWhereUniqueInput,
    @common.Body() data: QuestRewardItemUpdateInput
  ): Promise<QuestRewardItem | null> {
    try {
      return await this.service.updateQuestRewardItem({
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
  @swagger.ApiOkResponse({ type: QuestRewardItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestRewardItemService", "deleteQuestRewardItem")
  async deleteQuestRewardItem(
    @common.Param() params: QuestRewardItemWhereUniqueInput
  ): Promise<QuestRewardItem | null> {
    try {
      return await this.service.deleteQuestRewardItem({
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

  @common.Get("/:id/questOfferRewards")
  @ApiNestedQuery(QuestOfferRewardFindManyArgs)
  @GrpcMethod("QuestRewardItemService", "findManyQuestOfferRewards")
  async findManyQuestOfferRewards(
    @common.Req() request: Request,
    @common.Param() params: QuestRewardItemWhereUniqueInput
  ): Promise<QuestOfferReward[]> {
    const query = plainToClass(QuestOfferRewardFindManyArgs, request.query);
    const results = await this.service.findQuestOfferRewards(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        questRewardItem: {
          select: {
            id: true,
          },
        },

        questRewardSpell: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/questOfferRewards")
  @GrpcMethod("QuestRewardItemService", "connectQuestOfferRewards")
  async connectQuestOfferRewards(
    @common.Param() params: QuestRewardItemWhereUniqueInput,
    @common.Body() body: QuestOfferRewardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questOfferRewards: {
        connect: body,
      },
    };
    await this.service.updateQuestRewardItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questOfferRewards")
  @GrpcMethod("QuestRewardItemService", "updateQuestOfferRewards")
  async updateQuestOfferRewards(
    @common.Param() params: QuestRewardItemWhereUniqueInput,
    @common.Body() body: QuestOfferRewardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questOfferRewards: {
        set: body,
      },
    };
    await this.service.updateQuestRewardItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questOfferRewards")
  @GrpcMethod("QuestRewardItemService", "disconnectQuestOfferRewards")
  async disconnectQuestOfferRewards(
    @common.Param() params: QuestRewardItemWhereUniqueInput,
    @common.Body() body: QuestOfferRewardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questOfferRewards: {
        disconnect: body,
      },
    };
    await this.service.updateQuestRewardItem({
      where: params,
      data,
      select: { id: true },
    });
  }
}
