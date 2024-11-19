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
import { SalesStage } from "./SalesStage";
import { SalesStageCountArgs } from "./SalesStageCountArgs";
import { SalesStageFindManyArgs } from "./SalesStageFindManyArgs";
import { SalesStageFindUniqueArgs } from "./SalesStageFindUniqueArgs";
import { CreateSalesStageArgs } from "./CreateSalesStageArgs";
import { UpdateSalesStageArgs } from "./UpdateSalesStageArgs";
import { DeleteSalesStageArgs } from "./DeleteSalesStageArgs";
import { SalesStageService } from "../salesStage.service";
@graphql.Resolver(() => SalesStage)
export class SalesStageResolverBase {
  constructor(protected readonly service: SalesStageService) {}

  async _salesStagesMeta(
    @graphql.Args() args: SalesStageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SalesStage])
  async salesStages(
    @graphql.Args() args: SalesStageFindManyArgs
  ): Promise<SalesStage[]> {
    return this.service.salesStages(args);
  }

  @graphql.Query(() => SalesStage, { nullable: true })
  async salesStage(
    @graphql.Args() args: SalesStageFindUniqueArgs
  ): Promise<SalesStage | null> {
    const result = await this.service.salesStage(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SalesStage)
  async createSalesStage(
    @graphql.Args() args: CreateSalesStageArgs
  ): Promise<SalesStage> {
    return await this.service.createSalesStage({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SalesStage)
  async updateSalesStage(
    @graphql.Args() args: UpdateSalesStageArgs
  ): Promise<SalesStage | null> {
    try {
      return await this.service.updateSalesStage({
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

  @graphql.Mutation(() => SalesStage)
  async deleteSalesStage(
    @graphql.Args() args: DeleteSalesStageArgs
  ): Promise<SalesStage | null> {
    try {
      return await this.service.deleteSalesStage(args);
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
