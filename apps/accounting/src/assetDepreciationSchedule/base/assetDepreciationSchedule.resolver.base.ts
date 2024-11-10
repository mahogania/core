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
import { AssetDepreciationSchedule } from "./AssetDepreciationSchedule";
import { AssetDepreciationScheduleCountArgs } from "./AssetDepreciationScheduleCountArgs";
import { AssetDepreciationScheduleFindManyArgs } from "./AssetDepreciationScheduleFindManyArgs";
import { AssetDepreciationScheduleFindUniqueArgs } from "./AssetDepreciationScheduleFindUniqueArgs";
import { CreateAssetDepreciationScheduleArgs } from "./CreateAssetDepreciationScheduleArgs";
import { UpdateAssetDepreciationScheduleArgs } from "./UpdateAssetDepreciationScheduleArgs";
import { DeleteAssetDepreciationScheduleArgs } from "./DeleteAssetDepreciationScheduleArgs";
import { AssetDepreciationScheduleService } from "../assetDepreciationSchedule.service";
@graphql.Resolver(() => AssetDepreciationSchedule)
export class AssetDepreciationScheduleResolverBase {
  constructor(protected readonly service: AssetDepreciationScheduleService) {}

  async _assetDepreciationSchedulesMeta(
    @graphql.Args() args: AssetDepreciationScheduleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AssetDepreciationSchedule])
  async assetDepreciationSchedules(
    @graphql.Args() args: AssetDepreciationScheduleFindManyArgs
  ): Promise<AssetDepreciationSchedule[]> {
    return this.service.assetDepreciationSchedules(args);
  }

  @graphql.Query(() => AssetDepreciationSchedule, { nullable: true })
  async assetDepreciationSchedule(
    @graphql.Args() args: AssetDepreciationScheduleFindUniqueArgs
  ): Promise<AssetDepreciationSchedule | null> {
    const result = await this.service.assetDepreciationSchedule(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AssetDepreciationSchedule)
  async createAssetDepreciationSchedule(
    @graphql.Args() args: CreateAssetDepreciationScheduleArgs
  ): Promise<AssetDepreciationSchedule> {
    return await this.service.createAssetDepreciationSchedule({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AssetDepreciationSchedule)
  async updateAssetDepreciationSchedule(
    @graphql.Args() args: UpdateAssetDepreciationScheduleArgs
  ): Promise<AssetDepreciationSchedule | null> {
    try {
      return await this.service.updateAssetDepreciationSchedule({
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

  @graphql.Mutation(() => AssetDepreciationSchedule)
  async deleteAssetDepreciationSchedule(
    @graphql.Args() args: DeleteAssetDepreciationScheduleArgs
  ): Promise<AssetDepreciationSchedule | null> {
    try {
      return await this.service.deleteAssetDepreciationSchedule(args);
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
