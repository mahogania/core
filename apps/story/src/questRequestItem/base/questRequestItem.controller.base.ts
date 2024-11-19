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
import { QuestRequestItemService } from "../questRequestItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuestRequestItemCreateInput } from "./QuestRequestItemCreateInput";
import { QuestRequestItem } from "./QuestRequestItem";
import { QuestRequestItemFindManyArgs } from "./QuestRequestItemFindManyArgs";
import { QuestRequestItemWhereUniqueInput } from "./QuestRequestItemWhereUniqueInput";
import { QuestRequestItemUpdateInput } from "./QuestRequestItemUpdateInput";
import { QuestRequestItemConditionalFindManyArgs } from "../../questRequestItemConditional/base/QuestRequestItemConditionalFindManyArgs";
import { QuestRequestItemConditional } from "../../questRequestItemConditional/base/QuestRequestItemConditional";
import { QuestRequestItemConditionalWhereUniqueInput } from "../../questRequestItemConditional/base/QuestRequestItemConditionalWhereUniqueInput";
import { QuestRequestItemsLocaleFindManyArgs } from "../../questRequestItemsLocale/base/QuestRequestItemsLocaleFindManyArgs";
import { QuestRequestItemsLocale } from "../../questRequestItemsLocale/base/QuestRequestItemsLocale";
import { QuestRequestItemsLocaleWhereUniqueInput } from "../../questRequestItemsLocale/base/QuestRequestItemsLocaleWhereUniqueInput";
import { QuestTemplateFindManyArgs } from "../../questTemplate/base/QuestTemplateFindManyArgs";
import { QuestTemplate } from "../../questTemplate/base/QuestTemplate";
import { QuestTemplateWhereUniqueInput } from "../../questTemplate/base/QuestTemplateWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuestRequestItemControllerBase {
  constructor(
    protected readonly service: QuestRequestItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestRequestItem })
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestRequestItemCreateInput,
  })
  async createQuestRequestItem(
    @common.Body() data: QuestRequestItemCreateInput
  ): Promise<QuestRequestItem> {
    return await this.service.createQuestRequestItem({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestRequestItem] })
  @ApiNestedQuery(QuestRequestItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questRequestItems(
    @common.Req() request: Request
  ): Promise<QuestRequestItem[]> {
    const args = plainToClass(QuestRequestItemFindManyArgs, request.query);
    return this.service.questRequestItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestRequestItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questRequestItem(
    @common.Param() params: QuestRequestItemWhereUniqueInput
  ): Promise<QuestRequestItem | null> {
    const result = await this.service.questRequestItem({
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: QuestRequestItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestRequestItemUpdateInput,
  })
  async updateQuestRequestItem(
    @common.Param() params: QuestRequestItemWhereUniqueInput,
    @common.Body() data: QuestRequestItemUpdateInput
  ): Promise<QuestRequestItem | null> {
    try {
      return await this.service.updateQuestRequestItem({
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
  @swagger.ApiOkResponse({ type: QuestRequestItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQuestRequestItem(
    @common.Param() params: QuestRequestItemWhereUniqueInput
  ): Promise<QuestRequestItem | null> {
    try {
      return await this.service.deleteQuestRequestItem({
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/questRequestItemConditionals")
  @ApiNestedQuery(QuestRequestItemConditionalFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItemConditional",
    action: "read",
    possession: "any",
  })
  async findQuestRequestItemConditionals(
    @common.Req() request: Request,
    @common.Param() params: QuestRequestItemWhereUniqueInput
  ): Promise<QuestRequestItemConditional[]> {
    const query = plainToClass(
      QuestRequestItemConditionalFindManyArgs,
      request.query
    );
    const results = await this.service.findQuestRequestItemConditionals(
      params.id,
      {
        ...query,
        select: {
          createdAt: true,
          id: true,

          questRequestItem: {
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

  @common.Post("/:id/questRequestItemConditionals")
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "update",
    possession: "any",
  })
  async connectQuestRequestItemConditionals(
    @common.Param() params: QuestRequestItemWhereUniqueInput,
    @common.Body() body: QuestRequestItemConditionalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questRequestItemConditionals: {
        connect: body,
      },
    };
    await this.service.updateQuestRequestItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questRequestItemConditionals")
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "update",
    possession: "any",
  })
  async updateQuestRequestItemConditionals(
    @common.Param() params: QuestRequestItemWhereUniqueInput,
    @common.Body() body: QuestRequestItemConditionalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questRequestItemConditionals: {
        set: body,
      },
    };
    await this.service.updateQuestRequestItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questRequestItemConditionals")
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "update",
    possession: "any",
  })
  async disconnectQuestRequestItemConditionals(
    @common.Param() params: QuestRequestItemWhereUniqueInput,
    @common.Body() body: QuestRequestItemConditionalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questRequestItemConditionals: {
        disconnect: body,
      },
    };
    await this.service.updateQuestRequestItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/questRequestItemsLocales")
  @ApiNestedQuery(QuestRequestItemsLocaleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItemsLocale",
    action: "read",
    possession: "any",
  })
  async findQuestRequestItemsLocales(
    @common.Req() request: Request,
    @common.Param() params: QuestRequestItemWhereUniqueInput
  ): Promise<QuestRequestItemsLocale[]> {
    const query = plainToClass(
      QuestRequestItemsLocaleFindManyArgs,
      request.query
    );
    const results = await this.service.findQuestRequestItemsLocales(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        questRequestItem: {
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

  @common.Post("/:id/questRequestItemsLocales")
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "update",
    possession: "any",
  })
  async connectQuestRequestItemsLocales(
    @common.Param() params: QuestRequestItemWhereUniqueInput,
    @common.Body() body: QuestRequestItemsLocaleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questRequestItemsLocales: {
        connect: body,
      },
    };
    await this.service.updateQuestRequestItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questRequestItemsLocales")
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "update",
    possession: "any",
  })
  async updateQuestRequestItemsLocales(
    @common.Param() params: QuestRequestItemWhereUniqueInput,
    @common.Body() body: QuestRequestItemsLocaleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questRequestItemsLocales: {
        set: body,
      },
    };
    await this.service.updateQuestRequestItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questRequestItemsLocales")
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "update",
    possession: "any",
  })
  async disconnectQuestRequestItemsLocales(
    @common.Param() params: QuestRequestItemWhereUniqueInput,
    @common.Body() body: QuestRequestItemsLocaleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questRequestItemsLocales: {
        disconnect: body,
      },
    };
    await this.service.updateQuestRequestItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/questTemplates")
  @ApiNestedQuery(QuestTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestTemplate",
    action: "read",
    possession: "any",
  })
  async findQuestTemplates(
    @common.Req() request: Request,
    @common.Param() params: QuestRequestItemWhereUniqueInput
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
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "update",
    possession: "any",
  })
  async connectQuestTemplates(
    @common.Param() params: QuestRequestItemWhereUniqueInput,
    @common.Body() body: QuestTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questTemplates: {
        connect: body,
      },
    };
    await this.service.updateQuestRequestItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questTemplates")
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "update",
    possession: "any",
  })
  async updateQuestTemplates(
    @common.Param() params: QuestRequestItemWhereUniqueInput,
    @common.Body() body: QuestTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questTemplates: {
        set: body,
      },
    };
    await this.service.updateQuestRequestItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questTemplates")
  @nestAccessControl.UseRoles({
    resource: "QuestRequestItem",
    action: "update",
    possession: "any",
  })
  async disconnectQuestTemplates(
    @common.Param() params: QuestRequestItemWhereUniqueInput,
    @common.Body() body: QuestTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questTemplates: {
        disconnect: body,
      },
    };
    await this.service.updateQuestRequestItem({
      where: params,
      data,
      select: { id: true },
    });
  }
}