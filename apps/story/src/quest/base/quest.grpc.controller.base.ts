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
import { QuestService } from "../quest.service";
import { QuestCreateInput } from "./QuestCreateInput";
import { QuestWhereInput } from "./QuestWhereInput";
import { QuestWhereUniqueInput } from "./QuestWhereUniqueInput";
import { QuestFindManyArgs } from "./QuestFindManyArgs";
import { QuestUpdateInput } from "./QuestUpdateInput";
import { Quest } from "./Quest";
import { AreaQuestTriggerFindManyArgs } from "../../areaQuestTrigger/base/AreaQuestTriggerFindManyArgs";
import { AreaQuestTrigger } from "../../areaQuestTrigger/base/AreaQuestTrigger";
import { AreaQuestTriggerWhereUniqueInput } from "../../areaQuestTrigger/base/AreaQuestTriggerWhereUniqueInput";
import { QuestCompletionConditionalFindManyArgs } from "../../questCompletionConditional/base/QuestCompletionConditionalFindManyArgs";
import { QuestCompletionConditional } from "../../questCompletionConditional/base/QuestCompletionConditional";
import { QuestCompletionConditionalWhereUniqueInput } from "../../questCompletionConditional/base/QuestCompletionConditionalWhereUniqueInput";
import { QuestDescriptionConditionalFindManyArgs } from "../../questDescriptionConditional/base/QuestDescriptionConditionalFindManyArgs";
import { QuestDescriptionConditional } from "../../questDescriptionConditional/base/QuestDescriptionConditional";
import { QuestDescriptionConditionalWhereUniqueInput } from "../../questDescriptionConditional/base/QuestDescriptionConditionalWhereUniqueInput";

export class QuestGrpcControllerBase {
  constructor(protected readonly service: QuestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Quest })
  @GrpcMethod("QuestService", "createQuest")
  async createQuest(@common.Body() data: QuestCreateInput): Promise<Quest> {
    return await this.service.createQuest({
      data: {
        ...data,

        epic: data.epic
          ? {
              connect: data.epic,
            }
          : undefined,

        questCueEffects: data.questCueEffects
          ? {
              connect: data.questCueEffects,
            }
          : undefined,

        questDetails: data.questDetails
          ? {
              connect: data.questDetails,
            }
          : undefined,

        questGreeting: data.questGreeting
          ? {
              connect: data.questGreeting,
            }
          : undefined,

        questTemplate: data.questTemplate
          ? {
              connect: data.questTemplate,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Quest] })
  @ApiNestedQuery(QuestFindManyArgs)
  @GrpcMethod("QuestService", "quests")
  async quests(@common.Req() request: Request): Promise<Quest[]> {
    const args = plainToClass(QuestFindManyArgs, request.query);
    return this.service.quests({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Quest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestService", "quest")
  async quest(
    @common.Param() params: QuestWhereUniqueInput
  ): Promise<Quest | null> {
    const result = await this.service.quest({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Quest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestService", "updateQuest")
  async updateQuest(
    @common.Param() params: QuestWhereUniqueInput,
    @common.Body() data: QuestUpdateInput
  ): Promise<Quest | null> {
    try {
      return await this.service.updateQuest({
        where: params,
        data: {
          ...data,

          epic: data.epic
            ? {
                connect: data.epic,
              }
            : undefined,

          questCueEffects: data.questCueEffects
            ? {
                connect: data.questCueEffects,
              }
            : undefined,

          questDetails: data.questDetails
            ? {
                connect: data.questDetails,
              }
            : undefined,

          questGreeting: data.questGreeting
            ? {
                connect: data.questGreeting,
              }
            : undefined,

          questTemplate: data.questTemplate
            ? {
                connect: data.questTemplate,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Quest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestService", "deleteQuest")
  async deleteQuest(
    @common.Param() params: QuestWhereUniqueInput
  ): Promise<Quest | null> {
    try {
      return await this.service.deleteQuest({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/areaQuestTriggers")
  @ApiNestedQuery(AreaQuestTriggerFindManyArgs)
  @GrpcMethod("QuestService", "findManyAreaQuestTriggers")
  async findManyAreaQuestTriggers(
    @common.Req() request: Request,
    @common.Param() params: QuestWhereUniqueInput
  ): Promise<AreaQuestTrigger[]> {
    const query = plainToClass(AreaQuestTriggerFindManyArgs, request.query);
    const results = await this.service.findAreaQuestTriggers(params.id, {
      ...query,
      select: {
        area: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        quest: {
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

  @common.Post("/:id/areaQuestTriggers")
  @GrpcMethod("QuestService", "connectAreaQuestTriggers")
  async connectAreaQuestTriggers(
    @common.Param() params: QuestWhereUniqueInput,
    @common.Body() body: AreaQuestTriggerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      areaQuestTriggers: {
        connect: body,
      },
    };
    await this.service.updateQuest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/areaQuestTriggers")
  @GrpcMethod("QuestService", "updateAreaQuestTriggers")
  async updateAreaQuestTriggers(
    @common.Param() params: QuestWhereUniqueInput,
    @common.Body() body: AreaQuestTriggerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      areaQuestTriggers: {
        set: body,
      },
    };
    await this.service.updateQuest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/areaQuestTriggers")
  @GrpcMethod("QuestService", "disconnectAreaQuestTriggers")
  async disconnectAreaQuestTriggers(
    @common.Param() params: QuestWhereUniqueInput,
    @common.Body() body: AreaQuestTriggerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      areaQuestTriggers: {
        disconnect: body,
      },
    };
    await this.service.updateQuest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/questCompletionConditionals")
  @ApiNestedQuery(QuestCompletionConditionalFindManyArgs)
  @GrpcMethod("QuestService", "findManyQuestCompletionConditionals")
  async findManyQuestCompletionConditionals(
    @common.Req() request: Request,
    @common.Param() params: QuestWhereUniqueInput
  ): Promise<QuestCompletionConditional[]> {
    const query = plainToClass(
      QuestCompletionConditionalFindManyArgs,
      request.query
    );
    const results = await this.service.findQuestCompletionConditionals(
      params.id,
      {
        ...query,
        select: {
          createdAt: true,
          id: true,

          quest: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/questCompletionConditionals")
  @GrpcMethod("QuestService", "connectQuestCompletionConditionals")
  async connectQuestCompletionConditionals(
    @common.Param() params: QuestWhereUniqueInput,
    @common.Body() body: QuestCompletionConditionalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questCompletionConditionals: {
        connect: body,
      },
    };
    await this.service.updateQuest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questCompletionConditionals")
  @GrpcMethod("QuestService", "updateQuestCompletionConditionals")
  async updateQuestCompletionConditionals(
    @common.Param() params: QuestWhereUniqueInput,
    @common.Body() body: QuestCompletionConditionalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questCompletionConditionals: {
        set: body,
      },
    };
    await this.service.updateQuest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questCompletionConditionals")
  @GrpcMethod("QuestService", "disconnectQuestCompletionConditionals")
  async disconnectQuestCompletionConditionals(
    @common.Param() params: QuestWhereUniqueInput,
    @common.Body() body: QuestCompletionConditionalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questCompletionConditionals: {
        disconnect: body,
      },
    };
    await this.service.updateQuest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/questDescriptionConditionals")
  @ApiNestedQuery(QuestDescriptionConditionalFindManyArgs)
  @GrpcMethod("QuestService", "findManyQuestDescriptionConditionals")
  async findManyQuestDescriptionConditionals(
    @common.Req() request: Request,
    @common.Param() params: QuestWhereUniqueInput
  ): Promise<QuestDescriptionConditional[]> {
    const query = plainToClass(
      QuestDescriptionConditionalFindManyArgs,
      request.query
    );
    const results = await this.service.findQuestDescriptionConditionals(
      params.id,
      {
        ...query,
        select: {
          createdAt: true,
          id: true,

          quests: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/questDescriptionConditionals")
  @GrpcMethod("QuestService", "connectQuestDescriptionConditionals")
  async connectQuestDescriptionConditionals(
    @common.Param() params: QuestWhereUniqueInput,
    @common.Body() body: QuestDescriptionConditionalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questDescriptionConditionals: {
        connect: body,
      },
    };
    await this.service.updateQuest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questDescriptionConditionals")
  @GrpcMethod("QuestService", "updateQuestDescriptionConditionals")
  async updateQuestDescriptionConditionals(
    @common.Param() params: QuestWhereUniqueInput,
    @common.Body() body: QuestDescriptionConditionalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questDescriptionConditionals: {
        set: body,
      },
    };
    await this.service.updateQuest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questDescriptionConditionals")
  @GrpcMethod("QuestService", "disconnectQuestDescriptionConditionals")
  async disconnectQuestDescriptionConditionals(
    @common.Param() params: QuestWhereUniqueInput,
    @common.Body() body: QuestDescriptionConditionalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questDescriptionConditionals: {
        disconnect: body,
      },
    };
    await this.service.updateQuest({
      where: params,
      data,
      select: { id: true },
    });
  }
}
