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
import { AssetMaintenanceLog } from "./AssetMaintenanceLog";
import { AssetMaintenanceLogCountArgs } from "./AssetMaintenanceLogCountArgs";
import { AssetMaintenanceLogFindManyArgs } from "./AssetMaintenanceLogFindManyArgs";
import { AssetMaintenanceLogFindUniqueArgs } from "./AssetMaintenanceLogFindUniqueArgs";
import { CreateAssetMaintenanceLogArgs } from "./CreateAssetMaintenanceLogArgs";
import { UpdateAssetMaintenanceLogArgs } from "./UpdateAssetMaintenanceLogArgs";
import { DeleteAssetMaintenanceLogArgs } from "./DeleteAssetMaintenanceLogArgs";
import { AssetMaintenanceLogService } from "../assetMaintenanceLog.service";
@graphql.Resolver(() => AssetMaintenanceLog)
export class AssetMaintenanceLogResolverBase {
  constructor(protected readonly service: AssetMaintenanceLogService) {}

  async _assetMaintenanceLogsMeta(
    @graphql.Args() args: AssetMaintenanceLogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AssetMaintenanceLog])
  async assetMaintenanceLogs(
    @graphql.Args() args: AssetMaintenanceLogFindManyArgs
  ): Promise<AssetMaintenanceLog[]> {
    return this.service.assetMaintenanceLogs(args);
  }

  @graphql.Query(() => AssetMaintenanceLog, { nullable: true })
  async assetMaintenanceLog(
    @graphql.Args() args: AssetMaintenanceLogFindUniqueArgs
  ): Promise<AssetMaintenanceLog | null> {
    const result = await this.service.assetMaintenanceLog(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AssetMaintenanceLog)
  async createAssetMaintenanceLog(
    @graphql.Args() args: CreateAssetMaintenanceLogArgs
  ): Promise<AssetMaintenanceLog> {
    return await this.service.createAssetMaintenanceLog({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AssetMaintenanceLog)
  async updateAssetMaintenanceLog(
    @graphql.Args() args: UpdateAssetMaintenanceLogArgs
  ): Promise<AssetMaintenanceLog | null> {
    try {
      return await this.service.updateAssetMaintenanceLog({
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

  @graphql.Mutation(() => AssetMaintenanceLog)
  async deleteAssetMaintenanceLog(
    @graphql.Args() args: DeleteAssetMaintenanceLogArgs
  ): Promise<AssetMaintenanceLog | null> {
    try {
      return await this.service.deleteAssetMaintenanceLog(args);
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