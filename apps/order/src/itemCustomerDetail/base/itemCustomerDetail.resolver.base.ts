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
import { ItemCustomerDetail } from "./ItemCustomerDetail";
import { ItemCustomerDetailCountArgs } from "./ItemCustomerDetailCountArgs";
import { ItemCustomerDetailFindManyArgs } from "./ItemCustomerDetailFindManyArgs";
import { ItemCustomerDetailFindUniqueArgs } from "./ItemCustomerDetailFindUniqueArgs";
import { CreateItemCustomerDetailArgs } from "./CreateItemCustomerDetailArgs";
import { UpdateItemCustomerDetailArgs } from "./UpdateItemCustomerDetailArgs";
import { DeleteItemCustomerDetailArgs } from "./DeleteItemCustomerDetailArgs";
import { ItemCustomerDetailService } from "../itemCustomerDetail.service";
@graphql.Resolver(() => ItemCustomerDetail)
export class ItemCustomerDetailResolverBase {
  constructor(protected readonly service: ItemCustomerDetailService) {}

  async _itemCustomerDetailsMeta(
    @graphql.Args() args: ItemCustomerDetailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ItemCustomerDetail])
  async itemCustomerDetails(
    @graphql.Args() args: ItemCustomerDetailFindManyArgs
  ): Promise<ItemCustomerDetail[]> {
    return this.service.itemCustomerDetails(args);
  }

  @graphql.Query(() => ItemCustomerDetail, { nullable: true })
  async itemCustomerDetail(
    @graphql.Args() args: ItemCustomerDetailFindUniqueArgs
  ): Promise<ItemCustomerDetail | null> {
    const result = await this.service.itemCustomerDetail(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ItemCustomerDetail)
  async createItemCustomerDetail(
    @graphql.Args() args: CreateItemCustomerDetailArgs
  ): Promise<ItemCustomerDetail> {
    return await this.service.createItemCustomerDetail({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ItemCustomerDetail)
  async updateItemCustomerDetail(
    @graphql.Args() args: UpdateItemCustomerDetailArgs
  ): Promise<ItemCustomerDetail | null> {
    try {
      return await this.service.updateItemCustomerDetail({
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

  @graphql.Mutation(() => ItemCustomerDetail)
  async deleteItemCustomerDetail(
    @graphql.Args() args: DeleteItemCustomerDetailArgs
  ): Promise<ItemCustomerDetail | null> {
    try {
      return await this.service.deleteItemCustomerDetail(args);
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
