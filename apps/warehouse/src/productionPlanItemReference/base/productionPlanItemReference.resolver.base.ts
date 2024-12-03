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
import { ProductionPlanItemReference } from "./ProductionPlanItemReference";
import { ProductionPlanItemReferenceCountArgs } from "./ProductionPlanItemReferenceCountArgs";
import { ProductionPlanItemReferenceFindManyArgs } from "./ProductionPlanItemReferenceFindManyArgs";
import { ProductionPlanItemReferenceFindUniqueArgs } from "./ProductionPlanItemReferenceFindUniqueArgs";
import { CreateProductionPlanItemReferenceArgs } from "./CreateProductionPlanItemReferenceArgs";
import { UpdateProductionPlanItemReferenceArgs } from "./UpdateProductionPlanItemReferenceArgs";
import { DeleteProductionPlanItemReferenceArgs } from "./DeleteProductionPlanItemReferenceArgs";
import { ProductionPlanItemReferenceService } from "../productionPlanItemReference.service";
@graphql.Resolver(() => ProductionPlanItemReference)
export class ProductionPlanItemReferenceResolverBase {
  constructor(protected readonly service: ProductionPlanItemReferenceService) {}

  async _productionPlanItemReferencesMeta(
    @graphql.Args() args: ProductionPlanItemReferenceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProductionPlanItemReference])
  async productionPlanItemReferences(
    @graphql.Args() args: ProductionPlanItemReferenceFindManyArgs
  ): Promise<ProductionPlanItemReference[]> {
    return this.service.productionPlanItemReferences(args);
  }

  @graphql.Query(() => ProductionPlanItemReference, { nullable: true })
  async productionPlanItemReference(
    @graphql.Args() args: ProductionPlanItemReferenceFindUniqueArgs
  ): Promise<ProductionPlanItemReference | null> {
    const result = await this.service.productionPlanItemReference(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProductionPlanItemReference)
  async createProductionPlanItemReference(
    @graphql.Args() args: CreateProductionPlanItemReferenceArgs
  ): Promise<ProductionPlanItemReference> {
    return await this.service.createProductionPlanItemReference({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ProductionPlanItemReference)
  async updateProductionPlanItemReference(
    @graphql.Args() args: UpdateProductionPlanItemReferenceArgs
  ): Promise<ProductionPlanItemReference | null> {
    try {
      return await this.service.updateProductionPlanItemReference({
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

  @graphql.Mutation(() => ProductionPlanItemReference)
  async deleteProductionPlanItemReference(
    @graphql.Args() args: DeleteProductionPlanItemReferenceArgs
  ): Promise<ProductionPlanItemReference | null> {
    try {
      return await this.service.deleteProductionPlanItemReference(args);
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