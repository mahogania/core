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
import { ItemAttributeValue } from "./ItemAttributeValue";
import { ItemAttributeValueCountArgs } from "./ItemAttributeValueCountArgs";
import { ItemAttributeValueFindManyArgs } from "./ItemAttributeValueFindManyArgs";
import { ItemAttributeValueFindUniqueArgs } from "./ItemAttributeValueFindUniqueArgs";
import { CreateItemAttributeValueArgs } from "./CreateItemAttributeValueArgs";
import { UpdateItemAttributeValueArgs } from "./UpdateItemAttributeValueArgs";
import { DeleteItemAttributeValueArgs } from "./DeleteItemAttributeValueArgs";
import { ItemAttributeValueService } from "../itemAttributeValue.service";
@graphql.Resolver(() => ItemAttributeValue)
export class ItemAttributeValueResolverBase {
  constructor(protected readonly service: ItemAttributeValueService) {}

  async _itemAttributeValuesMeta(
    @graphql.Args() args: ItemAttributeValueCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ItemAttributeValue])
  async itemAttributeValues(
    @graphql.Args() args: ItemAttributeValueFindManyArgs
  ): Promise<ItemAttributeValue[]> {
    return this.service.itemAttributeValues(args);
  }

  @graphql.Query(() => ItemAttributeValue, { nullable: true })
  async itemAttributeValue(
    @graphql.Args() args: ItemAttributeValueFindUniqueArgs
  ): Promise<ItemAttributeValue | null> {
    const result = await this.service.itemAttributeValue(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ItemAttributeValue)
  async createItemAttributeValue(
    @graphql.Args() args: CreateItemAttributeValueArgs
  ): Promise<ItemAttributeValue> {
    return await this.service.createItemAttributeValue({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ItemAttributeValue)
  async updateItemAttributeValue(
    @graphql.Args() args: UpdateItemAttributeValueArgs
  ): Promise<ItemAttributeValue | null> {
    try {
      return await this.service.updateItemAttributeValue({
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

  @graphql.Mutation(() => ItemAttributeValue)
  async deleteItemAttributeValue(
    @graphql.Args() args: DeleteItemAttributeValueArgs
  ): Promise<ItemAttributeValue | null> {
    try {
      return await this.service.deleteItemAttributeValue(args);
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