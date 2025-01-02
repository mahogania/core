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
import { ItemRandomBonusListTemplate } from "./ItemRandomBonusListTemplate";
import { ItemRandomBonusListTemplateCountArgs } from "./ItemRandomBonusListTemplateCountArgs";
import { ItemRandomBonusListTemplateFindManyArgs } from "./ItemRandomBonusListTemplateFindManyArgs";
import { ItemRandomBonusListTemplateFindUniqueArgs } from "./ItemRandomBonusListTemplateFindUniqueArgs";
import { CreateItemRandomBonusListTemplateArgs } from "./CreateItemRandomBonusListTemplateArgs";
import { UpdateItemRandomBonusListTemplateArgs } from "./UpdateItemRandomBonusListTemplateArgs";
import { DeleteItemRandomBonusListTemplateArgs } from "./DeleteItemRandomBonusListTemplateArgs";
import { ItemTemplate } from "../../itemTemplate/base/ItemTemplate";
import { ItemRandomBonusListTemplateService } from "../itemRandomBonusListTemplate.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemRandomBonusListTemplate)
export class ItemRandomBonusListTemplateResolverBase {
  constructor(
    protected readonly service: ItemRandomBonusListTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ItemRandomBonusListTemplate",
    action: "read",
    possession: "any",
  })
  async _itemRandomBonusListTemplatesMeta(
    @graphql.Args() args: ItemRandomBonusListTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ItemRandomBonusListTemplate])
  @nestAccessControl.UseRoles({
    resource: "ItemRandomBonusListTemplate",
    action: "read",
    possession: "any",
  })
  async itemRandomBonusListTemplates(
    @graphql.Args() args: ItemRandomBonusListTemplateFindManyArgs
  ): Promise<ItemRandomBonusListTemplate[]> {
    return this.service.itemRandomBonusListTemplates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ItemRandomBonusListTemplate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ItemRandomBonusListTemplate",
    action: "read",
    possession: "own",
  })
  async itemRandomBonusListTemplate(
    @graphql.Args() args: ItemRandomBonusListTemplateFindUniqueArgs
  ): Promise<ItemRandomBonusListTemplate | null> {
    const result = await this.service.itemRandomBonusListTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ItemRandomBonusListTemplate)
  @nestAccessControl.UseRoles({
    resource: "ItemRandomBonusListTemplate",
    action: "create",
    possession: "any",
  })
  async createItemRandomBonusListTemplate(
    @graphql.Args() args: CreateItemRandomBonusListTemplateArgs
  ): Promise<ItemRandomBonusListTemplate> {
    return await this.service.createItemRandomBonusListTemplate({
      ...args,
      data: {
        ...args.data,

        itemTemplate: args.data.itemTemplate
          ? {
              connect: args.data.itemTemplate,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ItemRandomBonusListTemplate)
  @nestAccessControl.UseRoles({
    resource: "ItemRandomBonusListTemplate",
    action: "update",
    possession: "any",
  })
  async updateItemRandomBonusListTemplate(
    @graphql.Args() args: UpdateItemRandomBonusListTemplateArgs
  ): Promise<ItemRandomBonusListTemplate | null> {
    try {
      return await this.service.updateItemRandomBonusListTemplate({
        ...args,
        data: {
          ...args.data,

          itemTemplate: args.data.itemTemplate
            ? {
                connect: args.data.itemTemplate,
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

  @graphql.Mutation(() => ItemRandomBonusListTemplate)
  @nestAccessControl.UseRoles({
    resource: "ItemRandomBonusListTemplate",
    action: "delete",
    possession: "any",
  })
  async deleteItemRandomBonusListTemplate(
    @graphql.Args() args: DeleteItemRandomBonusListTemplateArgs
  ): Promise<ItemRandomBonusListTemplate | null> {
    try {
      return await this.service.deleteItemRandomBonusListTemplate(args);
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
  @graphql.ResolveField(() => ItemTemplate, {
    nullable: true,
    name: "itemTemplate",
  })
  @nestAccessControl.UseRoles({
    resource: "ItemTemplate",
    action: "read",
    possession: "any",
  })
  async getItemTemplate(
    @graphql.Parent() parent: ItemRandomBonusListTemplate
  ): Promise<ItemTemplate | null> {
    const result = await this.service.getItemTemplate(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}