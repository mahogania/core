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
import { ItemGroup } from "./ItemGroup";
import { ItemGroupCountArgs } from "./ItemGroupCountArgs";
import { ItemGroupFindManyArgs } from "./ItemGroupFindManyArgs";
import { ItemGroupFindUniqueArgs } from "./ItemGroupFindUniqueArgs";
import { CreateItemGroupArgs } from "./CreateItemGroupArgs";
import { UpdateItemGroupArgs } from "./UpdateItemGroupArgs";
import { DeleteItemGroupArgs } from "./DeleteItemGroupArgs";
import { ItemGroupService } from "../itemGroup.service";
@graphql.Resolver(() => ItemGroup)
export class ItemGroupResolverBase {
  constructor(protected readonly service: ItemGroupService) {}

  async _itemGroupsMeta(
    @graphql.Args() args: ItemGroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ItemGroup])
  async itemGroups(
    @graphql.Args() args: ItemGroupFindManyArgs
  ): Promise<ItemGroup[]> {
    return this.service.itemGroups(args);
  }

  @graphql.Query(() => ItemGroup, { nullable: true })
  async itemGroup(
    @graphql.Args() args: ItemGroupFindUniqueArgs
  ): Promise<ItemGroup | null> {
    const result = await this.service.itemGroup(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ItemGroup)
  async createItemGroup(
    @graphql.Args() args: CreateItemGroupArgs
  ): Promise<ItemGroup> {
    return await this.service.createItemGroup({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ItemGroup)
  async updateItemGroup(
    @graphql.Args() args: UpdateItemGroupArgs
  ): Promise<ItemGroup | null> {
    try {
      return await this.service.updateItemGroup({
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

  @graphql.Mutation(() => ItemGroup)
  async deleteItemGroup(
    @graphql.Args() args: DeleteItemGroupArgs
  ): Promise<ItemGroup | null> {
    try {
      return await this.service.deleteItemGroup(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}