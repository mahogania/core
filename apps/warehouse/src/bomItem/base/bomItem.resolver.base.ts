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
import { BomItem } from "./BomItem";
import { BomItemCountArgs } from "./BomItemCountArgs";
import { BomItemFindManyArgs } from "./BomItemFindManyArgs";
import { BomItemFindUniqueArgs } from "./BomItemFindUniqueArgs";
import { CreateBomItemArgs } from "./CreateBomItemArgs";
import { UpdateBomItemArgs } from "./UpdateBomItemArgs";
import { DeleteBomItemArgs } from "./DeleteBomItemArgs";
import { BomItemService } from "../bomItem.service";
@graphql.Resolver(() => BomItem)
export class BomItemResolverBase {
  constructor(protected readonly service: BomItemService) {}

  async _bomItemsMeta(
    @graphql.Args() args: BomItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BomItem])
  async bomItems(
    @graphql.Args() args: BomItemFindManyArgs
  ): Promise<BomItem[]> {
    return this.service.bomItems(args);
  }

  @graphql.Query(() => BomItem, { nullable: true })
  async bomItem(
    @graphql.Args() args: BomItemFindUniqueArgs
  ): Promise<BomItem | null> {
    const result = await this.service.bomItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BomItem)
  async createBomItem(
    @graphql.Args() args: CreateBomItemArgs
  ): Promise<BomItem> {
    return await this.service.createBomItem({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BomItem)
  async updateBomItem(
    @graphql.Args() args: UpdateBomItemArgs
  ): Promise<BomItem | null> {
    try {
      return await this.service.updateBomItem({
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

  @graphql.Mutation(() => BomItem)
  async deleteBomItem(
    @graphql.Args() args: DeleteBomItemArgs
  ): Promise<BomItem | null> {
    try {
      return await this.service.deleteBomItem(args);
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