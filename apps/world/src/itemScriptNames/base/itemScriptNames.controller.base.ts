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
import { ItemScriptNamesService } from "../itemScriptNames.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ItemScriptNamesCreateInput } from "./ItemScriptNamesCreateInput";
import { ItemScriptNames } from "./ItemScriptNames";
import { ItemScriptNamesFindManyArgs } from "./ItemScriptNamesFindManyArgs";
import { ItemScriptNamesWhereUniqueInput } from "./ItemScriptNamesWhereUniqueInput";
import { ItemScriptNamesUpdateInput } from "./ItemScriptNamesUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ItemScriptNamesControllerBase {
  constructor(
    protected readonly service: ItemScriptNamesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ItemScriptNames })
  @nestAccessControl.UseRoles({
    resource: "ItemScriptNames",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ItemScriptNamesCreateInput,
  })
  async createItemScriptNames(
    @common.Body() data: ItemScriptNamesCreateInput
  ): Promise<ItemScriptNames> {
    return await this.service.createItemScriptNames({
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
  @swagger.ApiOkResponse({ type: [ItemScriptNames] })
  @ApiNestedQuery(ItemScriptNamesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ItemScriptNames",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async itemScriptNamesItems(
    @common.Req() request: Request
  ): Promise<ItemScriptNames[]> {
    const args = plainToClass(ItemScriptNamesFindManyArgs, request.query);
    return this.service.itemScriptNamesItems({
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
  @swagger.ApiOkResponse({ type: ItemScriptNames })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ItemScriptNames",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async itemScriptNames(
    @common.Param() params: ItemScriptNamesWhereUniqueInput
  ): Promise<ItemScriptNames | null> {
    const result = await this.service.itemScriptNames({
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
  @swagger.ApiOkResponse({ type: ItemScriptNames })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ItemScriptNames",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ItemScriptNamesUpdateInput,
  })
  async updateItemScriptNames(
    @common.Param() params: ItemScriptNamesWhereUniqueInput,
    @common.Body() data: ItemScriptNamesUpdateInput
  ): Promise<ItemScriptNames | null> {
    try {
      return await this.service.updateItemScriptNames({
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
  @swagger.ApiOkResponse({ type: ItemScriptNames })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ItemScriptNames",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteItemScriptNames(
    @common.Param() params: ItemScriptNamesWhereUniqueInput
  ): Promise<ItemScriptNames | null> {
    try {
      return await this.service.deleteItemScriptNames({
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
