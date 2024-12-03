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
import { AssetMaintenance } from "./AssetMaintenance";
import { AssetMaintenanceCountArgs } from "./AssetMaintenanceCountArgs";
import { AssetMaintenanceFindManyArgs } from "./AssetMaintenanceFindManyArgs";
import { AssetMaintenanceFindUniqueArgs } from "./AssetMaintenanceFindUniqueArgs";
import { CreateAssetMaintenanceArgs } from "./CreateAssetMaintenanceArgs";
import { UpdateAssetMaintenanceArgs } from "./UpdateAssetMaintenanceArgs";
import { DeleteAssetMaintenanceArgs } from "./DeleteAssetMaintenanceArgs";
import { AssetMaintenanceService } from "../assetMaintenance.service";
@graphql.Resolver(() => AssetMaintenance)
export class AssetMaintenanceResolverBase {
  constructor(protected readonly service: AssetMaintenanceService) {}

  async _assetMaintenancesMeta(
    @graphql.Args() args: AssetMaintenanceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AssetMaintenance])
  async assetMaintenances(
    @graphql.Args() args: AssetMaintenanceFindManyArgs
  ): Promise<AssetMaintenance[]> {
    return this.service.assetMaintenances(args);
  }

  @graphql.Query(() => AssetMaintenance, { nullable: true })
  async assetMaintenance(
    @graphql.Args() args: AssetMaintenanceFindUniqueArgs
  ): Promise<AssetMaintenance | null> {
    const result = await this.service.assetMaintenance(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AssetMaintenance)
  async createAssetMaintenance(
    @graphql.Args() args: CreateAssetMaintenanceArgs
  ): Promise<AssetMaintenance> {
    return await this.service.createAssetMaintenance({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AssetMaintenance)
  async updateAssetMaintenance(
    @graphql.Args() args: UpdateAssetMaintenanceArgs
  ): Promise<AssetMaintenance | null> {
    try {
      return await this.service.updateAssetMaintenance({
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

  @graphql.Mutation(() => AssetMaintenance)
  async deleteAssetMaintenance(
    @graphql.Args() args: DeleteAssetMaintenanceArgs
  ): Promise<AssetMaintenance | null> {
    try {
      return await this.service.deleteAssetMaintenance(args);
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
