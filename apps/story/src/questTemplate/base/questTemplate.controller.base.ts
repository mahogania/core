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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { QuestTemplateService } from "../questTemplate.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuestTemplateCreateInput } from "./QuestTemplateCreateInput";
import { QuestTemplate } from "./QuestTemplate";
import { QuestTemplateFindManyArgs } from "./QuestTemplateFindManyArgs";
import { QuestTemplateWhereUniqueInput } from "./QuestTemplateWhereUniqueInput";
import { QuestTemplateUpdateInput } from "./QuestTemplateUpdateInput";
import { QuestFindManyArgs } from "../../quest/base/QuestFindManyArgs";
import { Quest } from "../../quest/base/Quest";
import { QuestWhereUniqueInput } from "../../quest/base/QuestWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuestTemplateControllerBase {
  constructor(
    protected readonly service: QuestTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestTemplate })
  @nestAccessControl.UseRoles({
    resource: "QuestTemplate",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestTemplateCreateInput,
  })
  async createQuestTemplate(
    @common.Body() data: QuestTemplateCreateInput
  ): Promise<QuestTemplate> {
    return await this.service.createQuestTemplate({
      data: {
        ...data,

        questMails: data.questMails
          ? {
              connect: data.questMails,
            }
          : undefined,

        questObjectives: {
          connect: data.questObjectives,
        },

        questOfferRewards: data.questOfferRewards
          ? {
              connect: data.questOfferRewards,
            }
          : undefined,

        questPools: data.questPools
          ? {
              connect: data.questPools,
            }
          : undefined,

        questRequestItems: data.questRequestItems
          ? {
              connect: data.questRequestItems,
            }
          : undefined,

        questTemplateLocale: data.questTemplateLocale
          ? {
              connect: data.questTemplateLocale,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestTemplate] })
  @ApiNestedQuery(QuestTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestTemplate",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questTemplates(
    @common.Req() request: Request
  ): Promise<QuestTemplate[]> {
    const args = plainToClass(QuestTemplateFindManyArgs, request.query);
    return this.service.questTemplates({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestTemplate",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questTemplate(
    @common.Param() params: QuestTemplateWhereUniqueInput
  ): Promise<QuestTemplate | null> {
    const result = await this.service.questTemplate({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: QuestTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestTemplate",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestTemplateUpdateInput,
  })
  async updateQuestTemplate(
    @common.Param() params: QuestTemplateWhereUniqueInput,
    @common.Body() data: QuestTemplateUpdateInput
  ): Promise<QuestTemplate | null> {
    try {
      return await this.service.updateQuestTemplate({
        where: params,
        data: {
          ...data,

          questMails: data.questMails
            ? {
                connect: data.questMails,
              }
            : undefined,

          questObjectives: {
            connect: data.questObjectives,
          },

          questOfferRewards: data.questOfferRewards
            ? {
                connect: data.questOfferRewards,
              }
            : undefined,

          questPools: data.questPools
            ? {
                connect: data.questPools,
              }
            : undefined,

          questRequestItems: data.questRequestItems
            ? {
                connect: data.questRequestItems,
              }
            : undefined,

          questTemplateLocale: data.questTemplateLocale
            ? {
                connect: data.questTemplateLocale,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: QuestTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestTemplate",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQuestTemplate(
    @common.Param() params: QuestTemplateWhereUniqueInput
  ): Promise<QuestTemplate | null> {
    try {
      return await this.service.deleteQuestTemplate({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/quests")
  @ApiNestedQuery(QuestFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Quest",
    action: "read",
    possession: "any",
  })
  async findQuests(
    @common.Req() request: Request,
    @common.Param() params: QuestTemplateWhereUniqueInput
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
  @nestAccessControl.UseRoles({
    resource: "QuestTemplate",
    action: "update",
    possession: "any",
  })
  async connectQuests(
    @common.Param() params: QuestTemplateWhereUniqueInput,
    @common.Body() body: QuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quests: {
        connect: body,
      },
    };
    await this.service.updateQuestTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/quests")
  @nestAccessControl.UseRoles({
    resource: "QuestTemplate",
    action: "update",
    possession: "any",
  })
  async updateQuests(
    @common.Param() params: QuestTemplateWhereUniqueInput,
    @common.Body() body: QuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quests: {
        set: body,
      },
    };
    await this.service.updateQuestTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/quests")
  @nestAccessControl.UseRoles({
    resource: "QuestTemplate",
    action: "update",
    possession: "any",
  })
  async disconnectQuests(
    @common.Param() params: QuestTemplateWhereUniqueInput,
    @common.Body() body: QuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quests: {
        disconnect: body,
      },
    };
    await this.service.updateQuestTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }
}