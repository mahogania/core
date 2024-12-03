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
import { ProductionPlanMaterialRequestWarehouse } from "./ProductionPlanMaterialRequestWarehouse";
import { ProductionPlanMaterialRequestWarehouseCountArgs } from "./ProductionPlanMaterialRequestWarehouseCountArgs";
import { ProductionPlanMaterialRequestWarehouseFindManyArgs } from "./ProductionPlanMaterialRequestWarehouseFindManyArgs";
import { ProductionPlanMaterialRequestWarehouseFindUniqueArgs } from "./ProductionPlanMaterialRequestWarehouseFindUniqueArgs";
import { CreateProductionPlanMaterialRequestWarehouseArgs } from "./CreateProductionPlanMaterialRequestWarehouseArgs";
import { UpdateProductionPlanMaterialRequestWarehouseArgs } from "./UpdateProductionPlanMaterialRequestWarehouseArgs";
import { DeleteProductionPlanMaterialRequestWarehouseArgs } from "./DeleteProductionPlanMaterialRequestWarehouseArgs";
import { ProductionPlanMaterialRequestWarehouseService } from "../productionPlanMaterialRequestWarehouse.service";
@graphql.Resolver(() => ProductionPlanMaterialRequestWarehouse)
export class ProductionPlanMaterialRequestWarehouseResolverBase {
  constructor(
    protected readonly service: ProductionPlanMaterialRequestWarehouseService
  ) {}

  async _productionPlanMaterialRequestWarehousesMeta(
    @graphql.Args() args: ProductionPlanMaterialRequestWarehouseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProductionPlanMaterialRequestWarehouse])
  async productionPlanMaterialRequestWarehouses(
    @graphql.Args() args: ProductionPlanMaterialRequestWarehouseFindManyArgs
  ): Promise<ProductionPlanMaterialRequestWarehouse[]> {
    return this.service.productionPlanMaterialRequestWarehouses(args);
  }

  @graphql.Query(() => ProductionPlanMaterialRequestWarehouse, {
    nullable: true,
  })
  async productionPlanMaterialRequestWarehouse(
    @graphql.Args() args: ProductionPlanMaterialRequestWarehouseFindUniqueArgs
  ): Promise<ProductionPlanMaterialRequestWarehouse | null> {
    const result = await this.service.productionPlanMaterialRequestWarehouse(
      args
    );
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProductionPlanMaterialRequestWarehouse)
  async createProductionPlanMaterialRequestWarehouse(
    @graphql.Args() args: CreateProductionPlanMaterialRequestWarehouseArgs
  ): Promise<ProductionPlanMaterialRequestWarehouse> {
    return await this.service.createProductionPlanMaterialRequestWarehouse({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ProductionPlanMaterialRequestWarehouse)
  async updateProductionPlanMaterialRequestWarehouse(
    @graphql.Args() args: UpdateProductionPlanMaterialRequestWarehouseArgs
  ): Promise<ProductionPlanMaterialRequestWarehouse | null> {
    try {
      return await this.service.updateProductionPlanMaterialRequestWarehouse({
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

  @graphql.Mutation(() => ProductionPlanMaterialRequestWarehouse)
  async deleteProductionPlanMaterialRequestWarehouse(
    @graphql.Args() args: DeleteProductionPlanMaterialRequestWarehouseArgs
  ): Promise<ProductionPlanMaterialRequestWarehouse | null> {
    try {
      return await this.service.deleteProductionPlanMaterialRequestWarehouse(
        args
      );
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
