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
import { AreaTeleportTriggerService } from "../areaTeleportTrigger.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AreaTeleportTriggerCreateInput } from "./AreaTeleportTriggerCreateInput";
import { AreaTeleportTrigger } from "./AreaTeleportTrigger";
import { AreaTeleportTriggerFindManyArgs } from "./AreaTeleportTriggerFindManyArgs";
import { AreaTeleportTriggerWhereUniqueInput } from "./AreaTeleportTriggerWhereUniqueInput";
import { AreaTeleportTriggerUpdateInput } from "./AreaTeleportTriggerUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AreaTeleportTriggerControllerBase {
  constructor(
    protected readonly service: AreaTeleportTriggerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AreaTeleportTrigger })
  @nestAccessControl.UseRoles({
    resource: "AreaTeleportTrigger",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AreaTeleportTriggerCreateInput,
  })
  async createAreaTeleportTrigger(
    @common.Body() data: AreaTeleportTriggerCreateInput
  ): Promise<AreaTeleportTrigger> {
    return await this.service.createAreaTeleportTrigger({
      data: {
        ...data,

        area: {
          connect: data.area,
        },

        portal: {
          connect: data.portal,
        },
      },
      select: {
        area: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        portal: {
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
  @swagger.ApiOkResponse({ type: [AreaTeleportTrigger] })
  @ApiNestedQuery(AreaTeleportTriggerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AreaTeleportTrigger",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async areaTeleportTriggers(
    @common.Req() request: Request
  ): Promise<AreaTeleportTrigger[]> {
    const args = plainToClass(AreaTeleportTriggerFindManyArgs, request.query);
    return this.service.areaTeleportTriggers({
      ...args,
      select: {
        area: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        portal: {
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
  @swagger.ApiOkResponse({ type: AreaTeleportTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AreaTeleportTrigger",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async areaTeleportTrigger(
    @common.Param() params: AreaTeleportTriggerWhereUniqueInput
  ): Promise<AreaTeleportTrigger | null> {
    const result = await this.service.areaTeleportTrigger({
      where: params,
      select: {
        area: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        portal: {
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
  @swagger.ApiOkResponse({ type: AreaTeleportTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AreaTeleportTrigger",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AreaTeleportTriggerUpdateInput,
  })
  async updateAreaTeleportTrigger(
    @common.Param() params: AreaTeleportTriggerWhereUniqueInput,
    @common.Body() data: AreaTeleportTriggerUpdateInput
  ): Promise<AreaTeleportTrigger | null> {
    try {
      return await this.service.updateAreaTeleportTrigger({
        where: params,
        data: {
          ...data,

          area: {
            connect: data.area,
          },

          portal: {
            connect: data.portal,
          },
        },
        select: {
          area: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          name: true,

          portal: {
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
  @swagger.ApiOkResponse({ type: AreaTeleportTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AreaTeleportTrigger",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAreaTeleportTrigger(
    @common.Param() params: AreaTeleportTriggerWhereUniqueInput
  ): Promise<AreaTeleportTrigger | null> {
    try {
      return await this.service.deleteAreaTeleportTrigger({
        where: params,
        select: {
          area: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          name: true,

          portal: {
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