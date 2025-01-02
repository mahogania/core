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
import { LandedCostPurchaseReceipt } from "./LandedCostPurchaseReceipt";
import { LandedCostPurchaseReceiptCountArgs } from "./LandedCostPurchaseReceiptCountArgs";
import { LandedCostPurchaseReceiptFindManyArgs } from "./LandedCostPurchaseReceiptFindManyArgs";
import { LandedCostPurchaseReceiptFindUniqueArgs } from "./LandedCostPurchaseReceiptFindUniqueArgs";
import { CreateLandedCostPurchaseReceiptArgs } from "./CreateLandedCostPurchaseReceiptArgs";
import { UpdateLandedCostPurchaseReceiptArgs } from "./UpdateLandedCostPurchaseReceiptArgs";
import { DeleteLandedCostPurchaseReceiptArgs } from "./DeleteLandedCostPurchaseReceiptArgs";
import { LandedCostPurchaseReceiptService } from "../landedCostPurchaseReceipt.service";
@graphql.Resolver(() => LandedCostPurchaseReceipt)
export class LandedCostPurchaseReceiptResolverBase {
  constructor(protected readonly service: LandedCostPurchaseReceiptService) {}

  async _landedCostPurchaseReceiptsMeta(
    @graphql.Args() args: LandedCostPurchaseReceiptCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LandedCostPurchaseReceipt])
  async landedCostPurchaseReceipts(
    @graphql.Args() args: LandedCostPurchaseReceiptFindManyArgs
  ): Promise<LandedCostPurchaseReceipt[]> {
    return this.service.landedCostPurchaseReceipts(args);
  }

  @graphql.Query(() => LandedCostPurchaseReceipt, { nullable: true })
  async landedCostPurchaseReceipt(
    @graphql.Args() args: LandedCostPurchaseReceiptFindUniqueArgs
  ): Promise<LandedCostPurchaseReceipt | null> {
    const result = await this.service.landedCostPurchaseReceipt(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LandedCostPurchaseReceipt)
  async createLandedCostPurchaseReceipt(
    @graphql.Args() args: CreateLandedCostPurchaseReceiptArgs
  ): Promise<LandedCostPurchaseReceipt> {
    return await this.service.createLandedCostPurchaseReceipt({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => LandedCostPurchaseReceipt)
  async updateLandedCostPurchaseReceipt(
    @graphql.Args() args: UpdateLandedCostPurchaseReceiptArgs
  ): Promise<LandedCostPurchaseReceipt | null> {
    try {
      return await this.service.updateLandedCostPurchaseReceipt({
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

  @graphql.Mutation(() => LandedCostPurchaseReceipt)
  async deleteLandedCostPurchaseReceipt(
    @graphql.Args() args: DeleteLandedCostPurchaseReceiptArgs
  ): Promise<LandedCostPurchaseReceipt | null> {
    try {
      return await this.service.deleteLandedCostPurchaseReceipt(args);
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