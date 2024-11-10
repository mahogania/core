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
import { AssetRepairConsumedItem } from "./AssetRepairConsumedItem";
import { AssetRepairConsumedItemCountArgs } from "./AssetRepairConsumedItemCountArgs";
import { AssetRepairConsumedItemFindManyArgs } from "./AssetRepairConsumedItemFindManyArgs";
import { AssetRepairConsumedItemFindUniqueArgs } from "./AssetRepairConsumedItemFindUniqueArgs";
import { CreateAssetRepairConsumedItemArgs } from "./CreateAssetRepairConsumedItemArgs";
import { UpdateAssetRepairConsumedItemArgs } from "./UpdateAssetRepairConsumedItemArgs";
import { DeleteAssetRepairConsumedItemArgs } from "./DeleteAssetRepairConsumedItemArgs";
import { AssetRepairConsumedItemService } from "../assetRepairConsumedItem.service";
@graphql.Resolver(() => AssetRepairConsumedItem)
export class AssetRepairConsumedItemResolverBase {
  constructor(protected readonly service: AssetRepairConsumedItemService) {}

  async _assetRepairConsumedItemsMeta(
    @graphql.Args() args: AssetRepairConsumedItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AssetRepairConsumedItem])
  async assetRepairConsumedItems(
    @graphql.Args() args: AssetRepairConsumedItemFindManyArgs
  ): Promise<AssetRepairConsumedItem[]> {
    return this.service.assetRepairConsumedItems(args);
  }

  @graphql.Query(() => AssetRepairConsumedItem, { nullable: true })
  async assetRepairConsumedItem(
    @graphql.Args() args: AssetRepairConsumedItemFindUniqueArgs
  ): Promise<AssetRepairConsumedItem | null> {
    const result = await this.service.assetRepairConsumedItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AssetRepairConsumedItem)
  async createAssetRepairConsumedItem(
    @graphql.Args() args: CreateAssetRepairConsumedItemArgs
  ): Promise<AssetRepairConsumedItem> {
    return await this.service.createAssetRepairConsumedItem({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AssetRepairConsumedItem)
  async updateAssetRepairConsumedItem(
    @graphql.Args() args: UpdateAssetRepairConsumedItemArgs
  ): Promise<AssetRepairConsumedItem | null> {
    try {
      return await this.service.updateAssetRepairConsumedItem({
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

  @graphql.Mutation(() => AssetRepairConsumedItem)
  async deleteAssetRepairConsumedItem(
    @graphql.Args() args: DeleteAssetRepairConsumedItemArgs
  ): Promise<AssetRepairConsumedItem | null> {
    try {
      return await this.service.deleteAssetRepairConsumedItem(args);
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
