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
import { BomScrapItem } from "./BomScrapItem";
import { BomScrapItemCountArgs } from "./BomScrapItemCountArgs";
import { BomScrapItemFindManyArgs } from "./BomScrapItemFindManyArgs";
import { BomScrapItemFindUniqueArgs } from "./BomScrapItemFindUniqueArgs";
import { CreateBomScrapItemArgs } from "./CreateBomScrapItemArgs";
import { UpdateBomScrapItemArgs } from "./UpdateBomScrapItemArgs";
import { DeleteBomScrapItemArgs } from "./DeleteBomScrapItemArgs";
import { BomScrapItemService } from "../bomScrapItem.service";
@graphql.Resolver(() => BomScrapItem)
export class BomScrapItemResolverBase {
  constructor(protected readonly service: BomScrapItemService) {}

  async _bomScrapItemsMeta(
    @graphql.Args() args: BomScrapItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BomScrapItem])
  async bomScrapItems(
    @graphql.Args() args: BomScrapItemFindManyArgs
  ): Promise<BomScrapItem[]> {
    return this.service.bomScrapItems(args);
  }

  @graphql.Query(() => BomScrapItem, { nullable: true })
  async bomScrapItem(
    @graphql.Args() args: BomScrapItemFindUniqueArgs
  ): Promise<BomScrapItem | null> {
    const result = await this.service.bomScrapItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BomScrapItem)
  async createBomScrapItem(
    @graphql.Args() args: CreateBomScrapItemArgs
  ): Promise<BomScrapItem> {
    return await this.service.createBomScrapItem({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BomScrapItem)
  async updateBomScrapItem(
    @graphql.Args() args: UpdateBomScrapItemArgs
  ): Promise<BomScrapItem | null> {
    try {
      return await this.service.updateBomScrapItem({
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

  @graphql.Mutation(() => BomScrapItem)
  async deleteBomScrapItem(
    @graphql.Args() args: DeleteBomScrapItemArgs
  ): Promise<BomScrapItem | null> {
    try {
      return await this.service.deleteBomScrapItem(args);
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
