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
import { ItemTemplateService } from "../itemTemplate.service";
import { ItemTemplateCreateInput } from "./ItemTemplateCreateInput";
import { ItemTemplateWhereInput } from "./ItemTemplateWhereInput";
import { ItemTemplateWhereUniqueInput } from "./ItemTemplateWhereUniqueInput";
import { ItemTemplateFindManyArgs } from "./ItemTemplateFindManyArgs";
import { ItemTemplateUpdateInput } from "./ItemTemplateUpdateInput";
import { ItemTemplate } from "./ItemTemplate";
import { ItemRandomBonusListTemplateFindManyArgs } from "../../itemRandomBonusListTemplate/base/ItemRandomBonusListTemplateFindManyArgs";
import { ItemRandomBonusListTemplate } from "../../itemRandomBonusListTemplate/base/ItemRandomBonusListTemplate";
import { ItemRandomBonusListTemplateWhereUniqueInput } from "../../itemRandomBonusListTemplate/base/ItemRandomBonusListTemplateWhereUniqueInput";

export class ItemTemplateGrpcControllerBase {
  constructor(protected readonly service: ItemTemplateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ItemTemplate })
  @GrpcMethod("ItemTemplateService", "createItemTemplate")
  async createItemTemplate(
    @common.Body() data: ItemTemplateCreateInput
  ): Promise<ItemTemplate> {
    return await this.service.createItemTemplate({
      data: {
        ...data,

        itemBehaviour: data.itemBehaviour
          ? {
              connect: data.itemBehaviour,
            }
          : undefined,

        itemTemplateAddons: data.itemTemplateAddons
          ? {
              connect: data.itemTemplateAddons,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ItemTemplate] })
  @ApiNestedQuery(ItemTemplateFindManyArgs)
  @GrpcMethod("ItemTemplateService", "itemTemplates")
  async itemTemplates(@common.Req() request: Request): Promise<ItemTemplate[]> {
    const args = plainToClass(ItemTemplateFindManyArgs, request.query);
    return this.service.itemTemplates({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ItemTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ItemTemplateService", "itemTemplate")
  async itemTemplate(
    @common.Param() params: ItemTemplateWhereUniqueInput
  ): Promise<ItemTemplate | null> {
    const result = await this.service.itemTemplate({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ItemTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ItemTemplateService", "updateItemTemplate")
  async updateItemTemplate(
    @common.Param() params: ItemTemplateWhereUniqueInput,
    @common.Body() data: ItemTemplateUpdateInput
  ): Promise<ItemTemplate | null> {
    try {
      return await this.service.updateItemTemplate({
        where: params,
        data: {
          ...data,

          itemBehaviour: data.itemBehaviour
            ? {
                connect: data.itemBehaviour,
              }
            : undefined,

          itemTemplateAddons: data.itemTemplateAddons
            ? {
                connect: data.itemTemplateAddons,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: ItemTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ItemTemplateService", "deleteItemTemplate")
  async deleteItemTemplate(
    @common.Param() params: ItemTemplateWhereUniqueInput
  ): Promise<ItemTemplate | null> {
    try {
      return await this.service.deleteItemTemplate({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/itemRandomBonusListTemplates")
  @ApiNestedQuery(ItemRandomBonusListTemplateFindManyArgs)
  @GrpcMethod("ItemTemplateService", "findManyItemRandomBonusListTemplates")
  async findManyItemRandomBonusListTemplates(
    @common.Req() request: Request,
    @common.Param() params: ItemTemplateWhereUniqueInput
  ): Promise<ItemRandomBonusListTemplate[]> {
    const query = plainToClass(
      ItemRandomBonusListTemplateFindManyArgs,
      request.query
    );
    const results = await this.service.findItemRandomBonusListTemplates(
      params.id,
      {
        ...query,
        select: {
          createdAt: true,
          id: true,

          itemTemplate: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/itemRandomBonusListTemplates")
  @GrpcMethod("ItemTemplateService", "connectItemRandomBonusListTemplates")
  async connectItemRandomBonusListTemplates(
    @common.Param() params: ItemTemplateWhereUniqueInput,
    @common.Body() body: ItemRandomBonusListTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemRandomBonusListTemplates: {
        connect: body,
      },
    };
    await this.service.updateItemTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/itemRandomBonusListTemplates")
  @GrpcMethod("ItemTemplateService", "updateItemRandomBonusListTemplates")
  async updateItemRandomBonusListTemplates(
    @common.Param() params: ItemTemplateWhereUniqueInput,
    @common.Body() body: ItemRandomBonusListTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemRandomBonusListTemplates: {
        set: body,
      },
    };
    await this.service.updateItemTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/itemRandomBonusListTemplates")
  @GrpcMethod("ItemTemplateService", "disconnectItemRandomBonusListTemplates")
  async disconnectItemRandomBonusListTemplates(
    @common.Param() params: ItemTemplateWhereUniqueInput,
    @common.Body() body: ItemRandomBonusListTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemRandomBonusListTemplates: {
        disconnect: body,
      },
    };
    await this.service.updateItemTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }
}
