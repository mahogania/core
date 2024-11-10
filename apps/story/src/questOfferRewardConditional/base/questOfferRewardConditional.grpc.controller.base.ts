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
import { QuestOfferRewardConditionalService } from "../questOfferRewardConditional.service";
import { QuestOfferRewardConditionalCreateInput } from "./QuestOfferRewardConditionalCreateInput";
import { QuestOfferRewardConditionalWhereInput } from "./QuestOfferRewardConditionalWhereInput";
import { QuestOfferRewardConditionalWhereUniqueInput } from "./QuestOfferRewardConditionalWhereUniqueInput";
import { QuestOfferRewardConditionalFindManyArgs } from "./QuestOfferRewardConditionalFindManyArgs";
import { QuestOfferRewardConditionalUpdateInput } from "./QuestOfferRewardConditionalUpdateInput";
import { QuestOfferRewardConditional } from "./QuestOfferRewardConditional";

export class QuestOfferRewardConditionalGrpcControllerBase {
  constructor(protected readonly service: QuestOfferRewardConditionalService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestOfferRewardConditional })
  @GrpcMethod(
    "QuestOfferRewardConditionalService",
    "createQuestOfferRewardConditional"
  )
  async createQuestOfferRewardConditional(
    @common.Body() data: QuestOfferRewardConditionalCreateInput
  ): Promise<QuestOfferRewardConditional> {
    return await this.service.createQuestOfferRewardConditional({
      data: {
        ...data,

        questOfferReward: data.questOfferReward
          ? {
              connect: data.questOfferReward,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        questOfferReward: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestOfferRewardConditional] })
  @ApiNestedQuery(QuestOfferRewardConditionalFindManyArgs)
  @GrpcMethod(
    "QuestOfferRewardConditionalService",
    "questOfferRewardConditionals"
  )
  async questOfferRewardConditionals(
    @common.Req() request: Request
  ): Promise<QuestOfferRewardConditional[]> {
    const args = plainToClass(
      QuestOfferRewardConditionalFindManyArgs,
      request.query
    );
    return this.service.questOfferRewardConditionals({
      ...args,
      select: {
        createdAt: true,
        id: true,

        questOfferReward: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestOfferRewardConditional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "QuestOfferRewardConditionalService",
    "questOfferRewardConditional"
  )
  async questOfferRewardConditional(
    @common.Param() params: QuestOfferRewardConditionalWhereUniqueInput
  ): Promise<QuestOfferRewardConditional | null> {
    const result = await this.service.questOfferRewardConditional({
      where: params,
      select: {
        createdAt: true,
        id: true,

        questOfferReward: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: QuestOfferRewardConditional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "QuestOfferRewardConditionalService",
    "updateQuestOfferRewardConditional"
  )
  async updateQuestOfferRewardConditional(
    @common.Param() params: QuestOfferRewardConditionalWhereUniqueInput,
    @common.Body() data: QuestOfferRewardConditionalUpdateInput
  ): Promise<QuestOfferRewardConditional | null> {
    try {
      return await this.service.updateQuestOfferRewardConditional({
        where: params,
        data: {
          ...data,

          questOfferReward: data.questOfferReward
            ? {
                connect: data.questOfferReward,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          questOfferReward: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: QuestOfferRewardConditional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "QuestOfferRewardConditionalService",
    "deleteQuestOfferRewardConditional"
  )
  async deleteQuestOfferRewardConditional(
    @common.Param() params: QuestOfferRewardConditionalWhereUniqueInput
  ): Promise<QuestOfferRewardConditional | null> {
    try {
      return await this.service.deleteQuestOfferRewardConditional({
        where: params,
        select: {
          createdAt: true,
          id: true,

          questOfferReward: {
            select: {
              id: true,
            },
          },

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
