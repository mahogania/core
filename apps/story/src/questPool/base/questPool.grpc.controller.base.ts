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
import { QuestPoolService } from "../questPool.service";
import { QuestPoolCreateInput } from "./QuestPoolCreateInput";
import { QuestPoolWhereInput } from "./QuestPoolWhereInput";
import { QuestPoolWhereUniqueInput } from "./QuestPoolWhereUniqueInput";
import { QuestPoolFindManyArgs } from "./QuestPoolFindManyArgs";
import { QuestPoolUpdateInput } from "./QuestPoolUpdateInput";
import { QuestPool } from "./QuestPool";
import { QuestTemplateFindManyArgs } from "../../questTemplate/base/QuestTemplateFindManyArgs";
import { QuestTemplate } from "../../questTemplate/base/QuestTemplate";
import { QuestTemplateWhereUniqueInput } from "../../questTemplate/base/QuestTemplateWhereUniqueInput";

export class QuestPoolGrpcControllerBase {
  constructor(protected readonly service: QuestPoolService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestPool })
  @GrpcMethod("QuestPoolService", "createQuestPool")
  async createQuestPool(
    @common.Body() data: QuestPoolCreateInput
  ): Promise<QuestPool> {
    return await this.service.createQuestPool({
      data: {
        ...data,

        pool: {
          connect: data.pool,
        },

        questPoolMembers: data.questPoolMembers
          ? {
              connect: data.questPoolMembers,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        pool: {
          select: {
            id: true,
          },
        },

        questPoolMembers: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestPool] })
  @ApiNestedQuery(QuestPoolFindManyArgs)
  @GrpcMethod("QuestPoolService", "questPools")
  async questPools(@common.Req() request: Request): Promise<QuestPool[]> {
    const args = plainToClass(QuestPoolFindManyArgs, request.query);
    return this.service.questPools({
      ...args,
      select: {
        createdAt: true,
        id: true,

        pool: {
          select: {
            id: true,
          },
        },

        questPoolMembers: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestPool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestPoolService", "questPool")
  async questPool(
    @common.Param() params: QuestPoolWhereUniqueInput
  ): Promise<QuestPool | null> {
    const result = await this.service.questPool({
      where: params,
      select: {
        createdAt: true,
        id: true,

        pool: {
          select: {
            id: true,
          },
        },

        questPoolMembers: {
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
  @swagger.ApiOkResponse({ type: QuestPool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestPoolService", "updateQuestPool")
  async updateQuestPool(
    @common.Param() params: QuestPoolWhereUniqueInput,
    @common.Body() data: QuestPoolUpdateInput
  ): Promise<QuestPool | null> {
    try {
      return await this.service.updateQuestPool({
        where: params,
        data: {
          ...data,

          pool: {
            connect: data.pool,
          },

          questPoolMembers: data.questPoolMembers
            ? {
                connect: data.questPoolMembers,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          pool: {
            select: {
              id: true,
            },
          },

          questPoolMembers: {
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
  @swagger.ApiOkResponse({ type: QuestPool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestPoolService", "deleteQuestPool")
  async deleteQuestPool(
    @common.Param() params: QuestPoolWhereUniqueInput
  ): Promise<QuestPool | null> {
    try {
      return await this.service.deleteQuestPool({
        where: params,
        select: {
          createdAt: true,
          id: true,

          pool: {
            select: {
              id: true,
            },
          },

          questPoolMembers: {
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

  @common.Get("/:id/questTemplates")
  @ApiNestedQuery(QuestTemplateFindManyArgs)
  @GrpcMethod("QuestPoolService", "findManyQuestTemplates")
  async findManyQuestTemplates(
    @common.Req() request: Request,
    @common.Param() params: QuestPoolWhereUniqueInput
  ): Promise<QuestTemplate[]> {
    const query = plainToClass(QuestTemplateFindManyArgs, request.query);
    const results = await this.service.findQuestTemplates(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        questMails: {
          select: {
            id: true,
          },
        },

        questObjectives: {
          select: {
            id: true,
          },
        },

        questOfferRewards: {
          select: {
            id: true,
          },
        },

        questPools: {
          select: {
            id: true,
          },
        },

        questRequestItems: {
          select: {
            id: true,
          },
        },

        questTemplateLocale: {
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

  @common.Post("/:id/questTemplates")
  @GrpcMethod("QuestPoolService", "connectQuestTemplates")
  async connectQuestTemplates(
    @common.Param() params: QuestPoolWhereUniqueInput,
    @common.Body() body: QuestTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questTemplates: {
        connect: body,
      },
    };
    await this.service.updateQuestPool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questTemplates")
  @GrpcMethod("QuestPoolService", "updateQuestTemplates")
  async updateQuestTemplates(
    @common.Param() params: QuestPoolWhereUniqueInput,
    @common.Body() body: QuestTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questTemplates: {
        set: body,
      },
    };
    await this.service.updateQuestPool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questTemplates")
  @GrpcMethod("QuestPoolService", "disconnectQuestTemplates")
  async disconnectQuestTemplates(
    @common.Param() params: QuestPoolWhereUniqueInput,
    @common.Body() body: QuestTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questTemplates: {
        disconnect: body,
      },
    };
    await this.service.updateQuestPool({
      where: params,
      data,
      select: { id: true },
    });
  }
}