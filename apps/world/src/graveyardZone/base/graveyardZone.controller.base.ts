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
import { GraveyardZoneService } from "../graveyardZone.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GraveyardZoneCreateInput } from "./GraveyardZoneCreateInput";
import { GraveyardZone } from "./GraveyardZone";
import { GraveyardZoneFindManyArgs } from "./GraveyardZoneFindManyArgs";
import { GraveyardZoneWhereUniqueInput } from "./GraveyardZoneWhereUniqueInput";
import { GraveyardZoneUpdateInput } from "./GraveyardZoneUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GraveyardZoneControllerBase {
  constructor(
    protected readonly service: GraveyardZoneService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GraveyardZone })
  @nestAccessControl.UseRoles({
    resource: "GraveyardZone",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GraveyardZoneCreateInput,
  })
  async createGraveyardZone(
    @common.Body() data: GraveyardZoneCreateInput
  ): Promise<GraveyardZone> {
    return await this.service.createGraveyardZone({
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
  @swagger.ApiOkResponse({ type: [GraveyardZone] })
  @ApiNestedQuery(GraveyardZoneFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GraveyardZone",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async graveyardZones(
    @common.Req() request: Request
  ): Promise<GraveyardZone[]> {
    const args = plainToClass(GraveyardZoneFindManyArgs, request.query);
    return this.service.graveyardZones({
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
  @swagger.ApiOkResponse({ type: GraveyardZone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GraveyardZone",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async graveyardZone(
    @common.Param() params: GraveyardZoneWhereUniqueInput
  ): Promise<GraveyardZone | null> {
    const result = await this.service.graveyardZone({
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
  @swagger.ApiOkResponse({ type: GraveyardZone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GraveyardZone",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GraveyardZoneUpdateInput,
  })
  async updateGraveyardZone(
    @common.Param() params: GraveyardZoneWhereUniqueInput,
    @common.Body() data: GraveyardZoneUpdateInput
  ): Promise<GraveyardZone | null> {
    try {
      return await this.service.updateGraveyardZone({
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
  @swagger.ApiOkResponse({ type: GraveyardZone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GraveyardZone",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGraveyardZone(
    @common.Param() params: GraveyardZoneWhereUniqueInput
  ): Promise<GraveyardZone | null> {
    try {
      return await this.service.deleteGraveyardZone({
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
}
