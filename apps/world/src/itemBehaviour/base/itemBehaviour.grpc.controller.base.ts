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
import { ItemBehaviourService } from "../itemBehaviour.service";
import { ItemBehaviourCreateInput } from "./ItemBehaviourCreateInput";
import { ItemBehaviourWhereInput } from "./ItemBehaviourWhereInput";
import { ItemBehaviourWhereUniqueInput } from "./ItemBehaviourWhereUniqueInput";
import { ItemBehaviourFindManyArgs } from "./ItemBehaviourFindManyArgs";
import { ItemBehaviourUpdateInput } from "./ItemBehaviourUpdateInput";
import { ItemBehaviour } from "./ItemBehaviour";
import { ItemTemplateFindManyArgs } from "../../itemTemplate/base/ItemTemplateFindManyArgs";
import { ItemTemplate } from "../../itemTemplate/base/ItemTemplate";
import { ItemTemplateWhereUniqueInput } from "../../itemTemplate/base/ItemTemplateWhereUniqueInput";

export class ItemBehaviourGrpcControllerBase {
  constructor(protected readonly service: ItemBehaviourService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ItemBehaviour })
  @GrpcMethod("ItemBehaviourService", "createItemBehaviour")
  async createItemBehaviour(
    @common.Body() data: ItemBehaviourCreateInput
  ): Promise<ItemBehaviour> {
    return await this.service.createItemBehaviour({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ItemBehaviour] })
  @ApiNestedQuery(ItemBehaviourFindManyArgs)
  @GrpcMethod("ItemBehaviourService", "itemBehaviours")
  async itemBehaviours(
    @common.Req() request: Request
  ): Promise<ItemBehaviour[]> {
    const args = plainToClass(ItemBehaviourFindManyArgs, request.query);
    return this.service.itemBehaviours({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ItemBehaviour })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ItemBehaviourService", "itemBehaviour")
  async itemBehaviour(
    @common.Param() params: ItemBehaviourWhereUniqueInput
  ): Promise<ItemBehaviour | null> {
    const result = await this.service.itemBehaviour({
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
  @swagger.ApiOkResponse({ type: ItemBehaviour })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ItemBehaviourService", "updateItemBehaviour")
  async updateItemBehaviour(
    @common.Param() params: ItemBehaviourWhereUniqueInput,
    @common.Body() data: ItemBehaviourUpdateInput
  ): Promise<ItemBehaviour | null> {
    try {
      return await this.service.updateItemBehaviour({
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
  @swagger.ApiOkResponse({ type: ItemBehaviour })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ItemBehaviourService", "deleteItemBehaviour")
  async deleteItemBehaviour(
    @common.Param() params: ItemBehaviourWhereUniqueInput
  ): Promise<ItemBehaviour | null> {
    try {
      return await this.service.deleteItemBehaviour({
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

  @common.Get("/:id/itemTemplates")
  @ApiNestedQuery(ItemTemplateFindManyArgs)
  @GrpcMethod("ItemBehaviourService", "findManyItemTemplates")
  async findManyItemTemplates(
    @common.Req() request: Request,
    @common.Param() params: ItemBehaviourWhereUniqueInput
  ): Promise<ItemTemplate[]> {
    const query = plainToClass(ItemTemplateFindManyArgs, request.query);
    const results = await this.service.findItemTemplates(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        itemBehaviour: {
          select: {
            id: true,
          },
        },

        itemTemplateAddons: {
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

  @common.Post("/:id/itemTemplates")
  @GrpcMethod("ItemBehaviourService", "connectItemTemplates")
  async connectItemTemplates(
    @common.Param() params: ItemBehaviourWhereUniqueInput,
    @common.Body() body: ItemTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemTemplates: {
        connect: body,
      },
    };
    await this.service.updateItemBehaviour({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/itemTemplates")
  @GrpcMethod("ItemBehaviourService", "updateItemTemplates")
  async updateItemTemplates(
    @common.Param() params: ItemBehaviourWhereUniqueInput,
    @common.Body() body: ItemTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemTemplates: {
        set: body,
      },
    };
    await this.service.updateItemBehaviour({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/itemTemplates")
  @GrpcMethod("ItemBehaviourService", "disconnectItemTemplates")
  async disconnectItemTemplates(
    @common.Param() params: ItemBehaviourWhereUniqueInput,
    @common.Body() body: ItemTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemTemplates: {
        disconnect: body,
      },
    };
    await this.service.updateItemBehaviour({
      where: params,
      data,
      select: { id: true },
    });
  }
}