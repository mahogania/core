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
import { QuestObjectiveCompletionEffectService } from "../questObjectiveCompletionEffect.service";
import { QuestObjectiveCompletionEffectCreateInput } from "./QuestObjectiveCompletionEffectCreateInput";
import { QuestObjectiveCompletionEffectWhereInput } from "./QuestObjectiveCompletionEffectWhereInput";
import { QuestObjectiveCompletionEffectWhereUniqueInput } from "./QuestObjectiveCompletionEffectWhereUniqueInput";
import { QuestObjectiveCompletionEffectFindManyArgs } from "./QuestObjectiveCompletionEffectFindManyArgs";
import { QuestObjectiveCompletionEffectUpdateInput } from "./QuestObjectiveCompletionEffectUpdateInput";
import { QuestObjectiveCompletionEffect } from "./QuestObjectiveCompletionEffect";
import { QuestObjectiveFindManyArgs } from "../../questObjective/base/QuestObjectiveFindManyArgs";
import { QuestObjective } from "../../questObjective/base/QuestObjective";
import { QuestObjectiveWhereUniqueInput } from "../../questObjective/base/QuestObjectiveWhereUniqueInput";

export class QuestObjectiveCompletionEffectGrpcControllerBase {
  constructor(
    protected readonly service: QuestObjectiveCompletionEffectService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestObjectiveCompletionEffect })
  @GrpcMethod(
    "QuestObjectiveCompletionEffectService",
    "createQuestObjectiveCompletionEffect"
  )
  async createQuestObjectiveCompletionEffect(
    @common.Body() data: QuestObjectiveCompletionEffectCreateInput
  ): Promise<QuestObjectiveCompletionEffect> {
    return await this.service.createQuestObjectiveCompletionEffect({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestObjectiveCompletionEffect] })
  @ApiNestedQuery(QuestObjectiveCompletionEffectFindManyArgs)
  @GrpcMethod(
    "QuestObjectiveCompletionEffectService",
    "questObjectiveCompletionEffects"
  )
  async questObjectiveCompletionEffects(
    @common.Req() request: Request
  ): Promise<QuestObjectiveCompletionEffect[]> {
    const args = plainToClass(
      QuestObjectiveCompletionEffectFindManyArgs,
      request.query
    );
    return this.service.questObjectiveCompletionEffects({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestObjectiveCompletionEffect })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "QuestObjectiveCompletionEffectService",
    "questObjectiveCompletionEffect"
  )
  async questObjectiveCompletionEffect(
    @common.Param() params: QuestObjectiveCompletionEffectWhereUniqueInput
  ): Promise<QuestObjectiveCompletionEffect | null> {
    const result = await this.service.questObjectiveCompletionEffect({
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
  @swagger.ApiOkResponse({ type: QuestObjectiveCompletionEffect })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "QuestObjectiveCompletionEffectService",
    "updateQuestObjectiveCompletionEffect"
  )
  async updateQuestObjectiveCompletionEffect(
    @common.Param() params: QuestObjectiveCompletionEffectWhereUniqueInput,
    @common.Body() data: QuestObjectiveCompletionEffectUpdateInput
  ): Promise<QuestObjectiveCompletionEffect | null> {
    try {
      return await this.service.updateQuestObjectiveCompletionEffect({
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
  @swagger.ApiOkResponse({ type: QuestObjectiveCompletionEffect })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "QuestObjectiveCompletionEffectService",
    "deleteQuestObjectiveCompletionEffect"
  )
  async deleteQuestObjectiveCompletionEffect(
    @common.Param() params: QuestObjectiveCompletionEffectWhereUniqueInput
  ): Promise<QuestObjectiveCompletionEffect | null> {
    try {
      return await this.service.deleteQuestObjectiveCompletionEffect({
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

  @common.Get("/:id/questObjectives")
  @ApiNestedQuery(QuestObjectiveFindManyArgs)
  @GrpcMethod(
    "QuestObjectiveCompletionEffectService",
    "findManyQuestObjectives"
  )
  async findManyQuestObjectives(
    @common.Req() request: Request,
    @common.Param() params: QuestObjectiveCompletionEffectWhereUniqueInput
  ): Promise<QuestObjective[]> {
    const query = plainToClass(QuestObjectiveFindManyArgs, request.query);
    const results = await this.service.findQuestObjectives(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        questObjectiveCompletionEffects: {
          select: {
            id: true,
          },
        },

        questObjectiveLocales: {
          select: {
            id: true,
          },
        },

        questPois: {
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

  @common.Post("/:id/questObjectives")
  @GrpcMethod("QuestObjectiveCompletionEffectService", "connectQuestObjectives")
  async connectQuestObjectives(
    @common.Param() params: QuestObjectiveCompletionEffectWhereUniqueInput,
    @common.Body() body: QuestObjectiveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questObjectives: {
        connect: body,
      },
    };
    await this.service.updateQuestObjectiveCompletionEffect({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questObjectives")
  @GrpcMethod("QuestObjectiveCompletionEffectService", "updateQuestObjectives")
  async updateQuestObjectives(
    @common.Param() params: QuestObjectiveCompletionEffectWhereUniqueInput,
    @common.Body() body: QuestObjectiveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questObjectives: {
        set: body,
      },
    };
    await this.service.updateQuestObjectiveCompletionEffect({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questObjectives")
  @GrpcMethod(
    "QuestObjectiveCompletionEffectService",
    "disconnectQuestObjectives"
  )
  async disconnectQuestObjectives(
    @common.Param() params: QuestObjectiveCompletionEffectWhereUniqueInput,
    @common.Body() body: QuestObjectiveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questObjectives: {
        disconnect: body,
      },
    };
    await this.service.updateQuestObjectiveCompletionEffect({
      where: params,
      data,
      select: { id: true },
    });
  }
}