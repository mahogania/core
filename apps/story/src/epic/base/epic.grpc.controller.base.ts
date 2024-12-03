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
import { EpicService } from "../epic.service";
import { EpicCreateInput } from "./EpicCreateInput";
import { EpicWhereInput } from "./EpicWhereInput";
import { EpicWhereUniqueInput } from "./EpicWhereUniqueInput";
import { EpicFindManyArgs } from "./EpicFindManyArgs";
import { EpicUpdateInput } from "./EpicUpdateInput";
import { Epic } from "./Epic";
import { QuestFindManyArgs } from "../../quest/base/QuestFindManyArgs";
import { Quest } from "../../quest/base/Quest";
import { QuestWhereUniqueInput } from "../../quest/base/QuestWhereUniqueInput";

export class EpicGrpcControllerBase {
  constructor(protected readonly service: EpicService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Epic })
  @GrpcMethod("EpicService", "createEpic")
  async createEpic(@common.Body() data: EpicCreateInput): Promise<Epic> {
    return await this.service.createEpic({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Epic] })
  @ApiNestedQuery(EpicFindManyArgs)
  @GrpcMethod("EpicService", "epics")
  async epics(@common.Req() request: Request): Promise<Epic[]> {
    const args = plainToClass(EpicFindManyArgs, request.query);
    return this.service.epics({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Epic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("EpicService", "epic")
  async epic(
    @common.Param() params: EpicWhereUniqueInput
  ): Promise<Epic | null> {
    const result = await this.service.epic({
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
  @swagger.ApiOkResponse({ type: Epic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("EpicService", "updateEpic")
  async updateEpic(
    @common.Param() params: EpicWhereUniqueInput,
    @common.Body() data: EpicUpdateInput
  ): Promise<Epic | null> {
    try {
      return await this.service.updateEpic({
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
  @swagger.ApiOkResponse({ type: Epic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("EpicService", "deleteEpic")
  async deleteEpic(
    @common.Param() params: EpicWhereUniqueInput
  ): Promise<Epic | null> {
    try {
      return await this.service.deleteEpic({
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
  @GrpcMethod("EpicService", "findManyQuests")
  async findManyQuests(
    @common.Req() request: Request,
    @common.Param() params: EpicWhereUniqueInput
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
  @GrpcMethod("EpicService", "connectQuests")
  async connectQuests(
    @common.Param() params: EpicWhereUniqueInput,
    @common.Body() body: QuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quests: {
        connect: body,
      },
    };
    await this.service.updateEpic({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/quests")
  @GrpcMethod("EpicService", "updateQuests")
  async updateQuests(
    @common.Param() params: EpicWhereUniqueInput,
    @common.Body() body: QuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quests: {
        set: body,
      },
    };
    await this.service.updateEpic({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/quests")
  @GrpcMethod("EpicService", "disconnectQuests")
  async disconnectQuests(
    @common.Param() params: EpicWhereUniqueInput,
    @common.Body() body: QuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quests: {
        disconnect: body,
      },
    };
    await this.service.updateEpic({
      where: params,
      data,
      select: { id: true },
    });
  }
}
