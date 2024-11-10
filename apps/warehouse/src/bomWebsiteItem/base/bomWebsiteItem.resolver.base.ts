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
import { BomWebsiteItem } from "./BomWebsiteItem";
import { BomWebsiteItemCountArgs } from "./BomWebsiteItemCountArgs";
import { BomWebsiteItemFindManyArgs } from "./BomWebsiteItemFindManyArgs";
import { BomWebsiteItemFindUniqueArgs } from "./BomWebsiteItemFindUniqueArgs";
import { CreateBomWebsiteItemArgs } from "./CreateBomWebsiteItemArgs";
import { UpdateBomWebsiteItemArgs } from "./UpdateBomWebsiteItemArgs";
import { DeleteBomWebsiteItemArgs } from "./DeleteBomWebsiteItemArgs";
import { BomWebsiteItemService } from "../bomWebsiteItem.service";
@graphql.Resolver(() => BomWebsiteItem)
export class BomWebsiteItemResolverBase {
  constructor(protected readonly service: BomWebsiteItemService) {}

  async _bomWebsiteItemsMeta(
    @graphql.Args() args: BomWebsiteItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BomWebsiteItem])
  async bomWebsiteItems(
    @graphql.Args() args: BomWebsiteItemFindManyArgs
  ): Promise<BomWebsiteItem[]> {
    return this.service.bomWebsiteItems(args);
  }

  @graphql.Query(() => BomWebsiteItem, { nullable: true })
  async bomWebsiteItem(
    @graphql.Args() args: BomWebsiteItemFindUniqueArgs
  ): Promise<BomWebsiteItem | null> {
    const result = await this.service.bomWebsiteItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BomWebsiteItem)
  async createBomWebsiteItem(
    @graphql.Args() args: CreateBomWebsiteItemArgs
  ): Promise<BomWebsiteItem> {
    return await this.service.createBomWebsiteItem({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BomWebsiteItem)
  async updateBomWebsiteItem(
    @graphql.Args() args: UpdateBomWebsiteItemArgs
  ): Promise<BomWebsiteItem | null> {
    try {
      return await this.service.updateBomWebsiteItem({
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

  @graphql.Mutation(() => BomWebsiteItem)
  async deleteBomWebsiteItem(
    @graphql.Args() args: DeleteBomWebsiteItemArgs
  ): Promise<BomWebsiteItem | null> {
    try {
      return await this.service.deleteBomWebsiteItem(args);
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
