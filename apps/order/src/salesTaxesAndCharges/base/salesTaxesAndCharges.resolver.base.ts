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
import { SalesTaxesAndCharges } from "./SalesTaxesAndCharges";
import { SalesTaxesAndChargesCountArgs } from "./SalesTaxesAndChargesCountArgs";
import { SalesTaxesAndChargesFindManyArgs } from "./SalesTaxesAndChargesFindManyArgs";
import { SalesTaxesAndChargesFindUniqueArgs } from "./SalesTaxesAndChargesFindUniqueArgs";
import { CreateSalesTaxesAndChargesArgs } from "./CreateSalesTaxesAndChargesArgs";
import { UpdateSalesTaxesAndChargesArgs } from "./UpdateSalesTaxesAndChargesArgs";
import { DeleteSalesTaxesAndChargesArgs } from "./DeleteSalesTaxesAndChargesArgs";
import { SalesTaxesAndChargesService } from "../salesTaxesAndCharges.service";
@graphql.Resolver(() => SalesTaxesAndCharges)
export class SalesTaxesAndChargesResolverBase {
  constructor(protected readonly service: SalesTaxesAndChargesService) {}

  async _salesTaxesAndChargesItemsMeta(
    @graphql.Args() args: SalesTaxesAndChargesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SalesTaxesAndCharges])
  async salesTaxesAndChargesItems(
    @graphql.Args() args: SalesTaxesAndChargesFindManyArgs
  ): Promise<SalesTaxesAndCharges[]> {
    return this.service.salesTaxesAndChargesItems(args);
  }

  @graphql.Query(() => SalesTaxesAndCharges, { nullable: true })
  async salesTaxesAndCharges(
    @graphql.Args() args: SalesTaxesAndChargesFindUniqueArgs
  ): Promise<SalesTaxesAndCharges | null> {
    const result = await this.service.salesTaxesAndCharges(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SalesTaxesAndCharges)
  async createSalesTaxesAndCharges(
    @graphql.Args() args: CreateSalesTaxesAndChargesArgs
  ): Promise<SalesTaxesAndCharges> {
    return await this.service.createSalesTaxesAndCharges({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SalesTaxesAndCharges)
  async updateSalesTaxesAndCharges(
    @graphql.Args() args: UpdateSalesTaxesAndChargesArgs
  ): Promise<SalesTaxesAndCharges | null> {
    try {
      return await this.service.updateSalesTaxesAndCharges({
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

  @graphql.Mutation(() => SalesTaxesAndCharges)
  async deleteSalesTaxesAndCharges(
    @graphql.Args() args: DeleteSalesTaxesAndChargesArgs
  ): Promise<SalesTaxesAndCharges | null> {
    try {
      return await this.service.deleteSalesTaxesAndCharges(args);
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