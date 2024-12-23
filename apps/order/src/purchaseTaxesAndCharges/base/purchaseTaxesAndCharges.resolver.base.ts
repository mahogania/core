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
import { PurchaseTaxesAndCharges } from "./PurchaseTaxesAndCharges";
import { PurchaseTaxesAndChargesCountArgs } from "./PurchaseTaxesAndChargesCountArgs";
import { PurchaseTaxesAndChargesFindManyArgs } from "./PurchaseTaxesAndChargesFindManyArgs";
import { PurchaseTaxesAndChargesFindUniqueArgs } from "./PurchaseTaxesAndChargesFindUniqueArgs";
import { CreatePurchaseTaxesAndChargesArgs } from "./CreatePurchaseTaxesAndChargesArgs";
import { UpdatePurchaseTaxesAndChargesArgs } from "./UpdatePurchaseTaxesAndChargesArgs";
import { DeletePurchaseTaxesAndChargesArgs } from "./DeletePurchaseTaxesAndChargesArgs";
import { PurchaseTaxesAndChargesService } from "../purchaseTaxesAndCharges.service";
@graphql.Resolver(() => PurchaseTaxesAndCharges)
export class PurchaseTaxesAndChargesResolverBase {
  constructor(protected readonly service: PurchaseTaxesAndChargesService) {}

  async _purchaseTaxesAndChargesItemsMeta(
    @graphql.Args() args: PurchaseTaxesAndChargesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PurchaseTaxesAndCharges])
  async purchaseTaxesAndChargesItems(
    @graphql.Args() args: PurchaseTaxesAndChargesFindManyArgs
  ): Promise<PurchaseTaxesAndCharges[]> {
    return this.service.purchaseTaxesAndChargesItems(args);
  }

  @graphql.Query(() => PurchaseTaxesAndCharges, { nullable: true })
  async purchaseTaxesAndCharges(
    @graphql.Args() args: PurchaseTaxesAndChargesFindUniqueArgs
  ): Promise<PurchaseTaxesAndCharges | null> {
    const result = await this.service.purchaseTaxesAndCharges(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PurchaseTaxesAndCharges)
  async createPurchaseTaxesAndCharges(
    @graphql.Args() args: CreatePurchaseTaxesAndChargesArgs
  ): Promise<PurchaseTaxesAndCharges> {
    return await this.service.createPurchaseTaxesAndCharges({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PurchaseTaxesAndCharges)
  async updatePurchaseTaxesAndCharges(
    @graphql.Args() args: UpdatePurchaseTaxesAndChargesArgs
  ): Promise<PurchaseTaxesAndCharges | null> {
    try {
      return await this.service.updatePurchaseTaxesAndCharges({
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

  @graphql.Mutation(() => PurchaseTaxesAndCharges)
  async deletePurchaseTaxesAndCharges(
    @graphql.Args() args: DeletePurchaseTaxesAndChargesArgs
  ): Promise<PurchaseTaxesAndCharges | null> {
    try {
      return await this.service.deletePurchaseTaxesAndCharges(args);
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
