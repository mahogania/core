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
import { QuestDescriptionConditionalService } from "../questDescriptionConditional.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuestDescriptionConditionalCreateInput } from "./QuestDescriptionConditionalCreateInput";
import { QuestDescriptionConditional } from "./QuestDescriptionConditional";
import { QuestDescriptionConditionalFindManyArgs } from "./QuestDescriptionConditionalFindManyArgs";
import { QuestDescriptionConditionalWhereUniqueInput } from "./QuestDescriptionConditionalWhereUniqueInput";
import { QuestDescriptionConditionalUpdateInput } from "./QuestDescriptionConditionalUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuestDescriptionConditionalControllerBase {
  constructor(
    protected readonly service: QuestDescriptionConditionalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestDescriptionConditional })
  @nestAccessControl.UseRoles({
    resource: "QuestDescriptionConditional",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestDescriptionConditionalCreateInput,
  })
  async createQuestDescriptionConditional(
    @common.Body() data: QuestDescriptionConditionalCreateInput
  ): Promise<QuestDescriptionConditional> {
    return await this.service.createQuestDescriptionConditional({
      data: {
        ...data,

        quests: data.quests
          ? {
              connect: data.quests,
            }
          : undefined,
      },
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
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestDescriptionConditional] })
  @ApiNestedQuery(QuestDescriptionConditionalFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestDescriptionConditional",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questDescriptionConditionals(
    @common.Req() request: Request
  ): Promise<QuestDescriptionConditional[]> {
    const args = plainToClass(
      QuestDescriptionConditionalFindManyArgs,
      request.query
    );
    return this.service.questDescriptionConditionals({
      ...args,
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
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestDescriptionConditional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestDescriptionConditional",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questDescriptionConditional(
    @common.Param() params: QuestDescriptionConditionalWhereUniqueInput
  ): Promise<QuestDescriptionConditional | null> {
    const result = await this.service.questDescriptionConditional({
      where: params,
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
  @swagger.ApiOkResponse({ type: QuestDescriptionConditional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestDescriptionConditional",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestDescriptionConditionalUpdateInput,
  })
  async updateQuestDescriptionConditional(
    @common.Param() params: QuestDescriptionConditionalWhereUniqueInput,
    @common.Body() data: QuestDescriptionConditionalUpdateInput
  ): Promise<QuestDescriptionConditional | null> {
    try {
      return await this.service.updateQuestDescriptionConditional({
        where: params,
        data: {
          ...data,

          quests: data.quests
            ? {
                connect: data.quests,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: QuestDescriptionConditional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestDescriptionConditional",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQuestDescriptionConditional(
    @common.Param() params: QuestDescriptionConditionalWhereUniqueInput
  ): Promise<QuestDescriptionConditional | null> {
    try {
      return await this.service.deleteQuestDescriptionConditional({
        where: params,
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