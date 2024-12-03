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
import { QuestCueEffectService } from "../questCueEffect.service";
import { QuestCueEffectCreateInput } from "./QuestCueEffectCreateInput";
import { QuestCueEffectWhereInput } from "./QuestCueEffectWhereInput";
import { QuestCueEffectWhereUniqueInput } from "./QuestCueEffectWhereUniqueInput";
import { QuestCueEffectFindManyArgs } from "./QuestCueEffectFindManyArgs";
import { QuestCueEffectUpdateInput } from "./QuestCueEffectUpdateInput";
import { QuestCueEffect } from "./QuestCueEffect";
import { QuestFindManyArgs } from "../../quest/base/QuestFindManyArgs";
import { Quest } from "../../quest/base/Quest";
import { QuestWhereUniqueInput } from "../../quest/base/QuestWhereUniqueInput";

export class QuestCueEffectGrpcControllerBase {
  constructor(protected readonly service: QuestCueEffectService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestCueEffect })
  @GrpcMethod("QuestCueEffectService", "createQuestCueEffect")
  async createQuestCueEffect(
    @common.Body() data: QuestCueEffectCreateInput
  ): Promise<QuestCueEffect> {
    return await this.service.createQuestCueEffect({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestCueEffect] })
  @ApiNestedQuery(QuestCueEffectFindManyArgs)
  @GrpcMethod("QuestCueEffectService", "questCueEffects")
  async questCueEffects(
    @common.Req() request: Request
  ): Promise<QuestCueEffect[]> {
    const args = plainToClass(QuestCueEffectFindManyArgs, request.query);
    return this.service.questCueEffects({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestCueEffect })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestCueEffectService", "questCueEffect")
  async questCueEffect(
    @common.Param() params: QuestCueEffectWhereUniqueInput
  ): Promise<QuestCueEffect | null> {
    const result = await this.service.questCueEffect({
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
  @swagger.ApiOkResponse({ type: QuestCueEffect })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestCueEffectService", "updateQuestCueEffect")
  async updateQuestCueEffect(
    @common.Param() params: QuestCueEffectWhereUniqueInput,
    @common.Body() data: QuestCueEffectUpdateInput
  ): Promise<QuestCueEffect | null> {
    try {
      return await this.service.updateQuestCueEffect({
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
  @swagger.ApiOkResponse({ type: QuestCueEffect })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestCueEffectService", "deleteQuestCueEffect")
  async deleteQuestCueEffect(
    @common.Param() params: QuestCueEffectWhereUniqueInput
  ): Promise<QuestCueEffect | null> {
    try {
      return await this.service.deleteQuestCueEffect({
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

  @common.Get("/:id/quests")
  @ApiNestedQuery(QuestFindManyArgs)
  @GrpcMethod("QuestCueEffectService", "findManyQuests")
  async findManyQuests(
    @common.Req() request: Request,
    @common.Param() params: QuestCueEffectWhereUniqueInput
  ): Promise<Quest[]> {
    const query = plainToClass(QuestFindManyArgs, request.query);
    const results = await this.service.findQuests(params.id, {
      ...query,
      select: {
        createdAt: true,

        epic: {
          select: {
            id: true,
          },
        },

        id: true,

        questCueEffects: {
          select: {
            id: true,
          },
        },

        questDetails: {
          select: {
            id: true,
          },
        },

        questGreeting: {
          select: {
            id: true,
          },
        },

        questTemplate: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/quests")
  @GrpcMethod("QuestCueEffectService", "connectQuests")
  async connectQuests(
    @common.Param() params: QuestCueEffectWhereUniqueInput,
    @common.Body() body: QuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quests: {
        connect: body,
      },
    };
    await this.service.updateQuestCueEffect({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/quests")
  @GrpcMethod("QuestCueEffectService", "updateQuests")
  async updateQuests(
    @common.Param() params: QuestCueEffectWhereUniqueInput,
    @common.Body() body: QuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quests: {
        set: body,
      },
    };
    await this.service.updateQuestCueEffect({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/quests")
  @GrpcMethod("QuestCueEffectService", "disconnectQuests")
  async disconnectQuests(
    @common.Param() params: QuestCueEffectWhereUniqueInput,
    @common.Body() body: QuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quests: {
        disconnect: body,
      },
    };
    await this.service.updateQuestCueEffect({
      where: params,
      data,
      select: { id: true },
    });
  }
}
