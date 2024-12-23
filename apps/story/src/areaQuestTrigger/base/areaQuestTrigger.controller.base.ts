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
import { AreaQuestTriggerService } from "../areaQuestTrigger.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AreaQuestTriggerCreateInput } from "./AreaQuestTriggerCreateInput";
import { AreaQuestTrigger } from "./AreaQuestTrigger";
import { AreaQuestTriggerFindManyArgs } from "./AreaQuestTriggerFindManyArgs";
import { AreaQuestTriggerWhereUniqueInput } from "./AreaQuestTriggerWhereUniqueInput";
import { AreaQuestTriggerUpdateInput } from "./AreaQuestTriggerUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AreaQuestTriggerControllerBase {
  constructor(
    protected readonly service: AreaQuestTriggerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AreaQuestTrigger })
  @nestAccessControl.UseRoles({
    resource: "AreaQuestTrigger",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AreaQuestTriggerCreateInput,
  })
  async createAreaQuestTrigger(
    @common.Body() data: AreaQuestTriggerCreateInput
  ): Promise<AreaQuestTrigger> {
    return await this.service.createAreaQuestTrigger({
      data: {
        ...data,

        area: data.area
          ? {
              connect: data.area,
            }
          : undefined,

        quest: data.quest
          ? {
              connect: data.quest,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AreaQuestTrigger] })
  @ApiNestedQuery(AreaQuestTriggerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AreaQuestTrigger",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async areaQuestTriggers(
    @common.Req() request: Request
  ): Promise<AreaQuestTrigger[]> {
    const args = plainToClass(AreaQuestTriggerFindManyArgs, request.query);
    return this.service.areaQuestTriggers({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AreaQuestTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AreaQuestTrigger",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async areaQuestTrigger(
    @common.Param() params: AreaQuestTriggerWhereUniqueInput
  ): Promise<AreaQuestTrigger | null> {
    const result = await this.service.areaQuestTrigger({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AreaQuestTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AreaQuestTrigger",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AreaQuestTriggerUpdateInput,
  })
  async updateAreaQuestTrigger(
    @common.Param() params: AreaQuestTriggerWhereUniqueInput,
    @common.Body() data: AreaQuestTriggerUpdateInput
  ): Promise<AreaQuestTrigger | null> {
    try {
      return await this.service.updateAreaQuestTrigger({
        where: params,
        data: {
          ...data,

          area: data.area
            ? {
                connect: data.area,
              }
            : undefined,

          quest: data.quest
            ? {
                connect: data.quest,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: AreaQuestTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AreaQuestTrigger",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAreaQuestTrigger(
    @common.Param() params: AreaQuestTriggerWhereUniqueInput
  ): Promise<AreaQuestTrigger | null> {
    try {
      return await this.service.deleteAreaQuestTrigger({
        where: params,
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
