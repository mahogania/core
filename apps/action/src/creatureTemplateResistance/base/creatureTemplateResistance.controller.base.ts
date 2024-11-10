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
import { CreatureTemplateResistanceService } from "../creatureTemplateResistance.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreatureTemplateResistanceCreateInput } from "./CreatureTemplateResistanceCreateInput";
import { CreatureTemplateResistance } from "./CreatureTemplateResistance";
import { CreatureTemplateResistanceFindManyArgs } from "./CreatureTemplateResistanceFindManyArgs";
import { CreatureTemplateResistanceWhereUniqueInput } from "./CreatureTemplateResistanceWhereUniqueInput";
import { CreatureTemplateResistanceUpdateInput } from "./CreatureTemplateResistanceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CreatureTemplateResistanceControllerBase {
  constructor(
    protected readonly service: CreatureTemplateResistanceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CreatureTemplateResistance })
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplateResistance",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CreatureTemplateResistanceCreateInput,
  })
  async createCreatureTemplateResistance(
    @common.Body() data: CreatureTemplateResistanceCreateInput
  ): Promise<CreatureTemplateResistance> {
    return await this.service.createCreatureTemplateResistance({
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
  @swagger.ApiOkResponse({ type: [CreatureTemplateResistance] })
  @ApiNestedQuery(CreatureTemplateResistanceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplateResistance",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async creatureTemplateResistances(
    @common.Req() request: Request
  ): Promise<CreatureTemplateResistance[]> {
    const args = plainToClass(
      CreatureTemplateResistanceFindManyArgs,
      request.query
    );
    return this.service.creatureTemplateResistances({
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
  @swagger.ApiOkResponse({ type: CreatureTemplateResistance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplateResistance",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async creatureTemplateResistance(
    @common.Param() params: CreatureTemplateResistanceWhereUniqueInput
  ): Promise<CreatureTemplateResistance | null> {
    const result = await this.service.creatureTemplateResistance({
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
  @swagger.ApiOkResponse({ type: CreatureTemplateResistance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplateResistance",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CreatureTemplateResistanceUpdateInput,
  })
  async updateCreatureTemplateResistance(
    @common.Param() params: CreatureTemplateResistanceWhereUniqueInput,
    @common.Body() data: CreatureTemplateResistanceUpdateInput
  ): Promise<CreatureTemplateResistance | null> {
    try {
      return await this.service.updateCreatureTemplateResistance({
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
  @swagger.ApiOkResponse({ type: CreatureTemplateResistance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplateResistance",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCreatureTemplateResistance(
    @common.Param() params: CreatureTemplateResistanceWhereUniqueInput
  ): Promise<CreatureTemplateResistance | null> {
    try {
      return await this.service.deleteCreatureTemplateResistance({
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