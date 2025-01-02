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
import { MountDefinitionsService } from "../mountDefinitions.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MountDefinitionsCreateInput } from "./MountDefinitionsCreateInput";
import { MountDefinitions } from "./MountDefinitions";
import { MountDefinitionsFindManyArgs } from "./MountDefinitionsFindManyArgs";
import { MountDefinitionsWhereUniqueInput } from "./MountDefinitionsWhereUniqueInput";
import { MountDefinitionsUpdateInput } from "./MountDefinitionsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MountDefinitionsControllerBase {
  constructor(
    protected readonly service: MountDefinitionsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MountDefinitions })
  @nestAccessControl.UseRoles({
    resource: "MountDefinitions",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: MountDefinitionsCreateInput,
  })
  async createMountDefinitions(
    @common.Body() data: MountDefinitionsCreateInput
  ): Promise<MountDefinitions> {
    return await this.service.createMountDefinitions({
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
  @swagger.ApiOkResponse({ type: [MountDefinitions] })
  @ApiNestedQuery(MountDefinitionsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MountDefinitions",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async mountDefinitionsItems(
    @common.Req() request: Request
  ): Promise<MountDefinitions[]> {
    const args = plainToClass(MountDefinitionsFindManyArgs, request.query);
    return this.service.mountDefinitionsItems({
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
  @swagger.ApiOkResponse({ type: MountDefinitions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MountDefinitions",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async mountDefinitions(
    @common.Param() params: MountDefinitionsWhereUniqueInput
  ): Promise<MountDefinitions | null> {
    const result = await this.service.mountDefinitions({
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
  @swagger.ApiOkResponse({ type: MountDefinitions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MountDefinitions",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: MountDefinitionsUpdateInput,
  })
  async updateMountDefinitions(
    @common.Param() params: MountDefinitionsWhereUniqueInput,
    @common.Body() data: MountDefinitionsUpdateInput
  ): Promise<MountDefinitions | null> {
    try {
      return await this.service.updateMountDefinitions({
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
  @swagger.ApiOkResponse({ type: MountDefinitions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MountDefinitions",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMountDefinitions(
    @common.Param() params: MountDefinitionsWhereUniqueInput
  ): Promise<MountDefinitions | null> {
    try {
      return await this.service.deleteMountDefinitions({
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