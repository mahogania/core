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
import { GrpcMethod } from "@nestjs/microservices";
import { ItemTemplateAddonService } from "../itemTemplateAddon.service";
import { ItemTemplateAddonCreateInput } from "./ItemTemplateAddonCreateInput";
import { ItemTemplateAddonWhereInput } from "./ItemTemplateAddonWhereInput";
import { ItemTemplateAddonWhereUniqueInput } from "./ItemTemplateAddonWhereUniqueInput";
import { ItemTemplateAddonFindManyArgs } from "./ItemTemplateAddonFindManyArgs";
import { ItemTemplateAddonUpdateInput } from "./ItemTemplateAddonUpdateInput";
import { ItemTemplateAddon } from "./ItemTemplateAddon";

export class ItemTemplateAddonGrpcControllerBase {
  constructor(protected readonly service: ItemTemplateAddonService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ItemTemplateAddon })
  @GrpcMethod("ItemTemplateAddonService", "createItemTemplateAddon")
  async createItemTemplateAddon(
    @common.Body() data: ItemTemplateAddonCreateInput
  ): Promise<ItemTemplateAddon> {
    return await this.service.createItemTemplateAddon({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ItemTemplateAddon] })
  @ApiNestedQuery(ItemTemplateAddonFindManyArgs)
  @GrpcMethod("ItemTemplateAddonService", "itemTemplateAddons")
  async itemTemplateAddons(
    @common.Req() request: Request
  ): Promise<ItemTemplateAddon[]> {
    const args = plainToClass(ItemTemplateAddonFindManyArgs, request.query);
    return this.service.itemTemplateAddons({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ItemTemplateAddon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ItemTemplateAddonService", "itemTemplateAddon")
  async itemTemplateAddon(
    @common.Param() params: ItemTemplateAddonWhereUniqueInput
  ): Promise<ItemTemplateAddon | null> {
    const result = await this.service.itemTemplateAddon({
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ItemTemplateAddon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ItemTemplateAddonService", "updateItemTemplateAddon")
  async updateItemTemplateAddon(
    @common.Param() params: ItemTemplateAddonWhereUniqueInput,
    @common.Body() data: ItemTemplateAddonUpdateInput
  ): Promise<ItemTemplateAddon | null> {
    try {
      return await this.service.updateItemTemplateAddon({
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
  @swagger.ApiOkResponse({ type: ItemTemplateAddon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ItemTemplateAddonService", "deleteItemTemplateAddon")
  async deleteItemTemplateAddon(
    @common.Param() params: ItemTemplateAddonWhereUniqueInput
  ): Promise<ItemTemplateAddon | null> {
    try {
      return await this.service.deleteItemTemplateAddon({
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
