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
import { ItemTemplateAddonService } from "../itemTemplateAddon.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ItemTemplateAddonCreateInput } from "./ItemTemplateAddonCreateInput";
import { ItemTemplateAddon } from "./ItemTemplateAddon";
import { ItemTemplateAddonFindManyArgs } from "./ItemTemplateAddonFindManyArgs";
import { ItemTemplateAddonWhereUniqueInput } from "./ItemTemplateAddonWhereUniqueInput";
import { ItemTemplateAddonUpdateInput } from "./ItemTemplateAddonUpdateInput";
import { ItemTemplateFindManyArgs } from "../../itemTemplate/base/ItemTemplateFindManyArgs";
import { ItemTemplate } from "../../itemTemplate/base/ItemTemplate";
import { ItemTemplateWhereUniqueInput } from "../../itemTemplate/base/ItemTemplateWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ItemTemplateAddonControllerBase {
  constructor(
    protected readonly service: ItemTemplateAddonService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ItemTemplateAddon })
  @nestAccessControl.UseRoles({
    resource: "ItemTemplateAddon",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ItemTemplateAddonCreateInput,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ItemTemplateAddon] })
  @ApiNestedQuery(ItemTemplateAddonFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ItemTemplateAddon",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ItemTemplateAddon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ItemTemplateAddon",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ItemTemplateAddon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ItemTemplateAddon",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ItemTemplateAddonUpdateInput,
  })
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
  @nestAccessControl.UseRoles({
    resource: "ItemTemplateAddon",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/itemTemplates")
  @ApiNestedQuery(ItemTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ItemTemplate",
    action: "read",
    possession: "any",
  })
  async findItemTemplates(
    @common.Req() request: Request,
    @common.Param() params: ItemTemplateAddonWhereUniqueInput
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
  @nestAccessControl.UseRoles({
    resource: "ItemTemplateAddon",
    action: "update",
    possession: "any",
  })
  async connectItemTemplates(
    @common.Param() params: ItemTemplateAddonWhereUniqueInput,
    @common.Body() body: ItemTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemTemplates: {
        connect: body,
      },
    };
    await this.service.updateItemTemplateAddon({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/itemTemplates")
  @nestAccessControl.UseRoles({
    resource: "ItemTemplateAddon",
    action: "update",
    possession: "any",
  })
  async updateItemTemplates(
    @common.Param() params: ItemTemplateAddonWhereUniqueInput,
    @common.Body() body: ItemTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemTemplates: {
        set: body,
      },
    };
    await this.service.updateItemTemplateAddon({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/itemTemplates")
  @nestAccessControl.UseRoles({
    resource: "ItemTemplateAddon",
    action: "update",
    possession: "any",
  })
  async disconnectItemTemplates(
    @common.Param() params: ItemTemplateAddonWhereUniqueInput,
    @common.Body() body: ItemTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itemTemplates: {
        disconnect: body,
      },
    };
    await this.service.updateItemTemplateAddon({
      where: params,
      data,
      select: { id: true },
    });
  }
}
