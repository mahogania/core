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
import { AssetShiftFactor } from "./AssetShiftFactor";
import { AssetShiftFactorCountArgs } from "./AssetShiftFactorCountArgs";
import { AssetShiftFactorFindManyArgs } from "./AssetShiftFactorFindManyArgs";
import { AssetShiftFactorFindUniqueArgs } from "./AssetShiftFactorFindUniqueArgs";
import { CreateAssetShiftFactorArgs } from "./CreateAssetShiftFactorArgs";
import { UpdateAssetShiftFactorArgs } from "./UpdateAssetShiftFactorArgs";
import { DeleteAssetShiftFactorArgs } from "./DeleteAssetShiftFactorArgs";
import { AssetShiftFactorService } from "../assetShiftFactor.service";
@graphql.Resolver(() => AssetShiftFactor)
export class AssetShiftFactorResolverBase {
  constructor(protected readonly service: AssetShiftFactorService) {}

  async _assetShiftFactorsMeta(
    @graphql.Args() args: AssetShiftFactorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AssetShiftFactor])
  async assetShiftFactors(
    @graphql.Args() args: AssetShiftFactorFindManyArgs
  ): Promise<AssetShiftFactor[]> {
    return this.service.assetShiftFactors(args);
  }

  @graphql.Query(() => AssetShiftFactor, { nullable: true })
  async assetShiftFactor(
    @graphql.Args() args: AssetShiftFactorFindUniqueArgs
  ): Promise<AssetShiftFactor | null> {
    const result = await this.service.assetShiftFactor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AssetShiftFactor)
  async createAssetShiftFactor(
    @graphql.Args() args: CreateAssetShiftFactorArgs
  ): Promise<AssetShiftFactor> {
    return await this.service.createAssetShiftFactor({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AssetShiftFactor)
  async updateAssetShiftFactor(
    @graphql.Args() args: UpdateAssetShiftFactorArgs
  ): Promise<AssetShiftFactor | null> {
    try {
      return await this.service.updateAssetShiftFactor({
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

  @graphql.Mutation(() => AssetShiftFactor)
  async deleteAssetShiftFactor(
    @graphql.Args() args: DeleteAssetShiftFactorArgs
  ): Promise<AssetShiftFactor | null> {
    try {
      return await this.service.deleteAssetShiftFactor(args);
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
