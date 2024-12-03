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
import { InventoryDimension } from "./InventoryDimension";
import { InventoryDimensionCountArgs } from "./InventoryDimensionCountArgs";
import { InventoryDimensionFindManyArgs } from "./InventoryDimensionFindManyArgs";
import { InventoryDimensionFindUniqueArgs } from "./InventoryDimensionFindUniqueArgs";
import { CreateInventoryDimensionArgs } from "./CreateInventoryDimensionArgs";
import { UpdateInventoryDimensionArgs } from "./UpdateInventoryDimensionArgs";
import { DeleteInventoryDimensionArgs } from "./DeleteInventoryDimensionArgs";
import { InventoryDimensionService } from "../inventoryDimension.service";
@graphql.Resolver(() => InventoryDimension)
export class InventoryDimensionResolverBase {
  constructor(protected readonly service: InventoryDimensionService) {}

  async _inventoryDimensionsMeta(
    @graphql.Args() args: InventoryDimensionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [InventoryDimension])
  async inventoryDimensions(
    @graphql.Args() args: InventoryDimensionFindManyArgs
  ): Promise<InventoryDimension[]> {
    return this.service.inventoryDimensions(args);
  }

  @graphql.Query(() => InventoryDimension, { nullable: true })
  async inventoryDimension(
    @graphql.Args() args: InventoryDimensionFindUniqueArgs
  ): Promise<InventoryDimension | null> {
    const result = await this.service.inventoryDimension(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => InventoryDimension)
  async createInventoryDimension(
    @graphql.Args() args: CreateInventoryDimensionArgs
  ): Promise<InventoryDimension> {
    return await this.service.createInventoryDimension({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => InventoryDimension)
  async updateInventoryDimension(
    @graphql.Args() args: UpdateInventoryDimensionArgs
  ): Promise<InventoryDimension | null> {
    try {
      return await this.service.updateInventoryDimension({
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

  @graphql.Mutation(() => InventoryDimension)
  async deleteInventoryDimension(
    @graphql.Args() args: DeleteInventoryDimensionArgs
  ): Promise<InventoryDimension | null> {
    try {
      return await this.service.deleteInventoryDimension(args);
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
