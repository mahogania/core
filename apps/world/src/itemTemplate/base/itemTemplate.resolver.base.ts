/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { ItemTemplate } from "./ItemTemplate";
import { ItemTemplateCountArgs } from "./ItemTemplateCountArgs";
import { ItemTemplateFindManyArgs } from "./ItemTemplateFindManyArgs";
import { ItemTemplateFindUniqueArgs } from "./ItemTemplateFindUniqueArgs";
import { CreateItemTemplateArgs } from "./CreateItemTemplateArgs";
import { UpdateItemTemplateArgs } from "./UpdateItemTemplateArgs";
import { DeleteItemTemplateArgs } from "./DeleteItemTemplateArgs";
import { ItemRandomBonusListTemplateFindManyArgs } from "../../itemRandomBonusListTemplate/base/ItemRandomBonusListTemplateFindManyArgs";
import { ItemRandomBonusListTemplate } from "../../itemRandomBonusListTemplate/base/ItemRandomBonusListTemplate";
import { ItemBehaviour } from "../../itemBehaviour/base/ItemBehaviour";
import { ItemTemplateAddon } from "../../itemTemplateAddon/base/ItemTemplateAddon";
import { ItemTemplateService } from "../itemTemplate.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemTemplate)
export class ItemTemplateResolverBase {
  constructor(
    protected readonly service: ItemTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ItemTemplate",
    action: "read",
    possession: "any",
  })
  async _itemTemplatesMeta(
    @graphql.Args() args: ItemTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ItemTemplate])
  @nestAccessControl.UseRoles({
    resource: "ItemTemplate",
    action: "read",
    possession: "any",
  })
  async itemTemplates(
    @graphql.Args() args: ItemTemplateFindManyArgs
  ): Promise<ItemTemplate[]> {
    return this.service.itemTemplates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ItemTemplate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ItemTemplate",
    action: "read",
    possession: "own",
  })
  async itemTemplate(
    @graphql.Args() args: ItemTemplateFindUniqueArgs
  ): Promise<ItemTemplate | null> {
    const result = await this.service.itemTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ItemTemplate)
  @nestAccessControl.UseRoles({
    resource: "ItemTemplate",
    action: "create",
    possession: "any",
  })
  async createItemTemplate(
    @graphql.Args() args: CreateItemTemplateArgs
  ): Promise<ItemTemplate> {
    return await this.service.createItemTemplate({
      ...args,
      data: {
        ...args.data,

        itemBehaviour: args.data.itemBehaviour
          ? {
              connect: args.data.itemBehaviour,
            }
          : undefined,

        itemTemplateAddons: args.data.itemTemplateAddons
          ? {
              connect: args.data.itemTemplateAddons,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ItemTemplate)
  @nestAccessControl.UseRoles({
    resource: "ItemTemplate",
    action: "update",
    possession: "any",
  })
  async updateItemTemplate(
    @graphql.Args() args: UpdateItemTemplateArgs
  ): Promise<ItemTemplate | null> {
    try {
      return await this.service.updateItemTemplate({
        ...args,
        data: {
          ...args.data,

          itemBehaviour: args.data.itemBehaviour
            ? {
                connect: args.data.itemBehaviour,
              }
            : undefined,

          itemTemplateAddons: args.data.itemTemplateAddons
            ? {
                connect: args.data.itemTemplateAddons,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ItemTemplate)
  @nestAccessControl.UseRoles({
    resource: "ItemTemplate",
    action: "delete",
    possession: "any",
  })
  async deleteItemTemplate(
    @graphql.Args() args: DeleteItemTemplateArgs
  ): Promise<ItemTemplate | null> {
    try {
      return await this.service.deleteItemTemplate(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ItemRandomBonusListTemplate], {
    name: "itemRandomBonusListTemplates",
  })
  @nestAccessControl.UseRoles({
    resource: "ItemRandomBonusListTemplate",
    action: "read",
    possession: "any",
  })
  async findItemRandomBonusListTemplates(
    @graphql.Parent() parent: ItemTemplate,
    @graphql.Args() args: ItemRandomBonusListTemplateFindManyArgs
  ): Promise<ItemRandomBonusListTemplate[]> {
    const results = await this.service.findItemRandomBonusListTemplates(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ItemBehaviour, {
    nullable: true,
    name: "itemBehaviour",
  })
  @nestAccessControl.UseRoles({
    resource: "ItemBehaviour",
    action: "read",
    possession: "any",
  })
  async getItemBehaviour(
    @graphql.Parent() parent: ItemTemplate
  ): Promise<ItemBehaviour | null> {
    const result = await this.service.getItemBehaviour(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ItemTemplateAddon, {
    nullable: true,
    name: "itemTemplateAddons",
  })
  @nestAccessControl.UseRoles({
    resource: "ItemTemplateAddon",
    action: "read",
    possession: "any",
  })
  async getItemTemplateAddons(
    @graphql.Parent() parent: ItemTemplate
  ): Promise<ItemTemplateAddon | null> {
    const result = await this.service.getItemTemplateAddons(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
