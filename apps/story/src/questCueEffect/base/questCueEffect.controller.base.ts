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
import { QuestCueEffectService } from "../questCueEffect.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuestCueEffectCreateInput } from "./QuestCueEffectCreateInput";
import { QuestCueEffect } from "./QuestCueEffect";
import { QuestCueEffectFindManyArgs } from "./QuestCueEffectFindManyArgs";
import { QuestCueEffectWhereUniqueInput } from "./QuestCueEffectWhereUniqueInput";
import { QuestCueEffectUpdateInput } from "./QuestCueEffectUpdateInput";
import { QuestFindManyArgs } from "../../quest/base/QuestFindManyArgs";
import { Quest } from "../../quest/base/Quest";
import { QuestWhereUniqueInput } from "../../quest/base/QuestWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuestCueEffectControllerBase {
  constructor(
    protected readonly service: QuestCueEffectService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestCueEffect })
  @nestAccessControl.UseRoles({
    resource: "QuestCueEffect",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestCueEffectCreateInput,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestCueEffect] })
  @ApiNestedQuery(QuestCueEffectFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestCueEffect",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestCueEffect })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestCueEffect",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: QuestCueEffect })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestCueEffect",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestCueEffectUpdateInput,
  })
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
  @nestAccessControl.UseRoles({
    resource: "QuestCueEffect",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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
  @nestAccessControl.UseRoles({
    resource: "QuestCueEffect",
    action: "update",
    possession: "any",
  })
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
  @nestAccessControl.UseRoles({
    resource: "QuestCueEffect",
    action: "update",
    possession: "any",
  })
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
  @nestAccessControl.UseRoles({
    resource: "QuestCueEffect",
    action: "update",
    possession: "any",
  })
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