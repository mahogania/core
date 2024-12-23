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
import { QuestObjectiveLocaleService } from "../questObjectiveLocale.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuestObjectiveLocaleCreateInput } from "./QuestObjectiveLocaleCreateInput";
import { QuestObjectiveLocale } from "./QuestObjectiveLocale";
import { QuestObjectiveLocaleFindManyArgs } from "./QuestObjectiveLocaleFindManyArgs";
import { QuestObjectiveLocaleWhereUniqueInput } from "./QuestObjectiveLocaleWhereUniqueInput";
import { QuestObjectiveLocaleUpdateInput } from "./QuestObjectiveLocaleUpdateInput";
import { QuestObjectiveFindManyArgs } from "../../questObjective/base/QuestObjectiveFindManyArgs";
import { QuestObjective } from "../../questObjective/base/QuestObjective";
import { QuestObjectiveWhereUniqueInput } from "../../questObjective/base/QuestObjectiveWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuestObjectiveLocaleControllerBase {
  constructor(
    protected readonly service: QuestObjectiveLocaleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestObjectiveLocale })
  @nestAccessControl.UseRoles({
    resource: "QuestObjectiveLocale",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestObjectiveLocaleCreateInput,
  })
  async createQuestObjectiveLocale(
    @common.Body() data: QuestObjectiveLocaleCreateInput
  ): Promise<QuestObjectiveLocale> {
    return await this.service.createQuestObjectiveLocale({
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
  @swagger.ApiOkResponse({ type: [QuestObjectiveLocale] })
  @ApiNestedQuery(QuestObjectiveLocaleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestObjectiveLocale",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questObjectiveLocales(
    @common.Req() request: Request
  ): Promise<QuestObjectiveLocale[]> {
    const args = plainToClass(QuestObjectiveLocaleFindManyArgs, request.query);
    return this.service.questObjectiveLocales({
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
  @swagger.ApiOkResponse({ type: QuestObjectiveLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestObjectiveLocale",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questObjectiveLocale(
    @common.Param() params: QuestObjectiveLocaleWhereUniqueInput
  ): Promise<QuestObjectiveLocale | null> {
    const result = await this.service.questObjectiveLocale({
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
  @swagger.ApiOkResponse({ type: QuestObjectiveLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestObjectiveLocale",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestObjectiveLocaleUpdateInput,
  })
  async updateQuestObjectiveLocale(
    @common.Param() params: QuestObjectiveLocaleWhereUniqueInput,
    @common.Body() data: QuestObjectiveLocaleUpdateInput
  ): Promise<QuestObjectiveLocale | null> {
    try {
      return await this.service.updateQuestObjectiveLocale({
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
  @swagger.ApiOkResponse({ type: QuestObjectiveLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestObjectiveLocale",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQuestObjectiveLocale(
    @common.Param() params: QuestObjectiveLocaleWhereUniqueInput
  ): Promise<QuestObjectiveLocale | null> {
    try {
      return await this.service.deleteQuestObjectiveLocale({
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
  @common.Get("/:id/questObjectives")
  @ApiNestedQuery(QuestObjectiveFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestObjective",
    action: "read",
    possession: "any",
  })
  async findQuestObjectives(
    @common.Req() request: Request,
    @common.Param() params: QuestObjectiveLocaleWhereUniqueInput
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
  @nestAccessControl.UseRoles({
    resource: "QuestObjectiveLocale",
    action: "update",
    possession: "any",
  })
  async connectQuestObjectives(
    @common.Param() params: QuestObjectiveLocaleWhereUniqueInput,
    @common.Body() body: QuestObjectiveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questObjectives: {
        connect: body,
      },
    };
    await this.service.updateQuestObjectiveLocale({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questObjectives")
  @nestAccessControl.UseRoles({
    resource: "QuestObjectiveLocale",
    action: "update",
    possession: "any",
  })
  async updateQuestObjectives(
    @common.Param() params: QuestObjectiveLocaleWhereUniqueInput,
    @common.Body() body: QuestObjectiveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questObjectives: {
        set: body,
      },
    };
    await this.service.updateQuestObjectiveLocale({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questObjectives")
  @nestAccessControl.UseRoles({
    resource: "QuestObjectiveLocale",
    action: "update",
    possession: "any",
  })
  async disconnectQuestObjectives(
    @common.Param() params: QuestObjectiveLocaleWhereUniqueInput,
    @common.Body() body: QuestObjectiveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questObjectives: {
        disconnect: body,
      },
    };
    await this.service.updateQuestObjectiveLocale({
      where: params,
      data,
      select: { id: true },
    });
  }
}
