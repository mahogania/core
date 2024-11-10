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
import { LandedCostTaxesAndCharges } from "./LandedCostTaxesAndCharges";
import { LandedCostTaxesAndChargesCountArgs } from "./LandedCostTaxesAndChargesCountArgs";
import { LandedCostTaxesAndChargesFindManyArgs } from "./LandedCostTaxesAndChargesFindManyArgs";
import { LandedCostTaxesAndChargesFindUniqueArgs } from "./LandedCostTaxesAndChargesFindUniqueArgs";
import { CreateLandedCostTaxesAndChargesArgs } from "./CreateLandedCostTaxesAndChargesArgs";
import { UpdateLandedCostTaxesAndChargesArgs } from "./UpdateLandedCostTaxesAndChargesArgs";
import { DeleteLandedCostTaxesAndChargesArgs } from "./DeleteLandedCostTaxesAndChargesArgs";
import { LandedCostTaxesAndChargesService } from "../landedCostTaxesAndCharges.service";
@graphql.Resolver(() => LandedCostTaxesAndCharges)
export class LandedCostTaxesAndChargesResolverBase {
  constructor(protected readonly service: LandedCostTaxesAndChargesService) {}

  async _landedCostTaxesAndChargesItemsMeta(
    @graphql.Args() args: LandedCostTaxesAndChargesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LandedCostTaxesAndCharges])
  async landedCostTaxesAndChargesItems(
    @graphql.Args() args: LandedCostTaxesAndChargesFindManyArgs
  ): Promise<LandedCostTaxesAndCharges[]> {
    return this.service.landedCostTaxesAndChargesItems(args);
  }

  @graphql.Query(() => LandedCostTaxesAndCharges, { nullable: true })
  async landedCostTaxesAndCharges(
    @graphql.Args() args: LandedCostTaxesAndChargesFindUniqueArgs
  ): Promise<LandedCostTaxesAndCharges | null> {
    const result = await this.service.landedCostTaxesAndCharges(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LandedCostTaxesAndCharges)
  async createLandedCostTaxesAndCharges(
    @graphql.Args() args: CreateLandedCostTaxesAndChargesArgs
  ): Promise<LandedCostTaxesAndCharges> {
    return await this.service.createLandedCostTaxesAndCharges({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => LandedCostTaxesAndCharges)
  async updateLandedCostTaxesAndCharges(
    @graphql.Args() args: UpdateLandedCostTaxesAndChargesArgs
  ): Promise<LandedCostTaxesAndCharges | null> {
    try {
      return await this.service.updateLandedCostTaxesAndCharges({
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

  @graphql.Mutation(() => LandedCostTaxesAndCharges)
  async deleteLandedCostTaxesAndCharges(
    @graphql.Args() args: DeleteLandedCostTaxesAndChargesArgs
  ): Promise<LandedCostTaxesAndCharges | null> {
    try {
      return await this.service.deleteLandedCostTaxesAndCharges(args);
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