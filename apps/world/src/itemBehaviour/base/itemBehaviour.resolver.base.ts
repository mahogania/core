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
import { ItemBehaviour } from "./ItemBehaviour";
import { ItemBehaviourCountArgs } from "./ItemBehaviourCountArgs";
import { ItemBehaviourFindManyArgs } from "./ItemBehaviourFindManyArgs";
import { ItemBehaviourFindUniqueArgs } from "./ItemBehaviourFindUniqueArgs";
import { CreateItemBehaviourArgs } from "./CreateItemBehaviourArgs";
import { UpdateItemBehaviourArgs } from "./UpdateItemBehaviourArgs";
import { DeleteItemBehaviourArgs } from "./DeleteItemBehaviourArgs";
import { ItemTemplateFindManyArgs } from "../../itemTemplate/base/ItemTemplateFindManyArgs";
import { ItemTemplate } from "../../itemTemplate/base/ItemTemplate";
import { ItemBehaviourService } from "../itemBehaviour.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemBehaviour)
export class ItemBehaviourResolverBase {
  constructor(
    protected readonly service: ItemBehaviourService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ItemBehaviour",
    action: "read",
    possession: "any",
  })
  async _itemBehavioursMeta(
    @graphql.Args() args: ItemBehaviourCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ItemBehaviour])
  @nestAccessControl.UseRoles({
    resource: "ItemBehaviour",
    action: "read",
    possession: "any",
  })
  async itemBehaviours(
    @graphql.Args() args: ItemBehaviourFindManyArgs
  ): Promise<ItemBehaviour[]> {
    return this.service.itemBehaviours(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ItemBehaviour, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ItemBehaviour",
    action: "read",
    possession: "own",
  })
  async itemBehaviour(
    @graphql.Args() args: ItemBehaviourFindUniqueArgs
  ): Promise<ItemBehaviour | null> {
    const result = await this.service.itemBehaviour(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ItemBehaviour)
  @nestAccessControl.UseRoles({
    resource: "ItemBehaviour",
    action: "create",
    possession: "any",
  })
  async createItemBehaviour(
    @graphql.Args() args: CreateItemBehaviourArgs
  ): Promise<ItemBehaviour> {
    return await this.service.createItemBehaviour({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ItemBehaviour)
  @nestAccessControl.UseRoles({
    resource: "ItemBehaviour",
    action: "update",
    possession: "any",
  })
  async updateItemBehaviour(
    @graphql.Args() args: UpdateItemBehaviourArgs
  ): Promise<ItemBehaviour | null> {
    try {
      return await this.service.updateItemBehaviour({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => ItemBehaviour)
  @nestAccessControl.UseRoles({
    resource: "ItemBehaviour",
    action: "delete",
    possession: "any",
  })
  async deleteItemBehaviour(
    @graphql.Args() args: DeleteItemBehaviourArgs
  ): Promise<ItemBehaviour | null> {
    try {
      return await this.service.deleteItemBehaviour(args);
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
  @graphql.ResolveField(() => [ItemTemplate], { name: "itemTemplates" })
  @nestAccessControl.UseRoles({
    resource: "ItemTemplate",
    action: "read",
    possession: "any",
  })
  async findItemTemplates(
    @graphql.Parent() parent: ItemBehaviour,
    @graphql.Args() args: ItemTemplateFindManyArgs
  ): Promise<ItemTemplate[]> {
    const results = await this.service.findItemTemplates(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
