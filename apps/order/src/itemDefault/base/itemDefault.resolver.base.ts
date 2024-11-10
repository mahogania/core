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
import { ItemDefault } from "./ItemDefault";
import { ItemDefaultCountArgs } from "./ItemDefaultCountArgs";
import { ItemDefaultFindManyArgs } from "./ItemDefaultFindManyArgs";
import { ItemDefaultFindUniqueArgs } from "./ItemDefaultFindUniqueArgs";
import { CreateItemDefaultArgs } from "./CreateItemDefaultArgs";
import { UpdateItemDefaultArgs } from "./UpdateItemDefaultArgs";
import { DeleteItemDefaultArgs } from "./DeleteItemDefaultArgs";
import { ItemDefaultService } from "../itemDefault.service";
@graphql.Resolver(() => ItemDefault)
export class ItemDefaultResolverBase {
  constructor(protected readonly service: ItemDefaultService) {}

  async _itemDefaultsMeta(
    @graphql.Args() args: ItemDefaultCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ItemDefault])
  async itemDefaults(
    @graphql.Args() args: ItemDefaultFindManyArgs
  ): Promise<ItemDefault[]> {
    return this.service.itemDefaults(args);
  }

  @graphql.Query(() => ItemDefault, { nullable: true })
  async itemDefault(
    @graphql.Args() args: ItemDefaultFindUniqueArgs
  ): Promise<ItemDefault | null> {
    const result = await this.service.itemDefault(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ItemDefault)
  async createItemDefault(
    @graphql.Args() args: CreateItemDefaultArgs
  ): Promise<ItemDefault> {
    return await this.service.createItemDefault({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ItemDefault)
  async updateItemDefault(
    @graphql.Args() args: UpdateItemDefaultArgs
  ): Promise<ItemDefault | null> {
    try {
      return await this.service.updateItemDefault({
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

  @graphql.Mutation(() => ItemDefault)
  async deleteItemDefault(
    @graphql.Args() args: DeleteItemDefaultArgs
  ): Promise<ItemDefault | null> {
    try {
      return await this.service.deleteItemDefault(args);
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
