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
import { CostCenter } from "./CostCenter";
import { CostCenterCountArgs } from "./CostCenterCountArgs";
import { CostCenterFindManyArgs } from "./CostCenterFindManyArgs";
import { CostCenterFindUniqueArgs } from "./CostCenterFindUniqueArgs";
import { CreateCostCenterArgs } from "./CreateCostCenterArgs";
import { UpdateCostCenterArgs } from "./UpdateCostCenterArgs";
import { DeleteCostCenterArgs } from "./DeleteCostCenterArgs";
import { CostCenterService } from "../costCenter.service";
@graphql.Resolver(() => CostCenter)
export class CostCenterResolverBase {
  constructor(protected readonly service: CostCenterService) {}

  async _costCentersMeta(
    @graphql.Args() args: CostCenterCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CostCenter])
  async costCenters(
    @graphql.Args() args: CostCenterFindManyArgs
  ): Promise<CostCenter[]> {
    return this.service.costCenters(args);
  }

  @graphql.Query(() => CostCenter, { nullable: true })
  async costCenter(
    @graphql.Args() args: CostCenterFindUniqueArgs
  ): Promise<CostCenter | null> {
    const result = await this.service.costCenter(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CostCenter)
  async createCostCenter(
    @graphql.Args() args: CreateCostCenterArgs
  ): Promise<CostCenter> {
    return await this.service.createCostCenter({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CostCenter)
  async updateCostCenter(
    @graphql.Args() args: UpdateCostCenterArgs
  ): Promise<CostCenter | null> {
    try {
      return await this.service.updateCostCenter({
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

  @graphql.Mutation(() => CostCenter)
  async deleteCostCenter(
    @graphql.Args() args: DeleteCostCenterArgs
  ): Promise<CostCenter | null> {
    try {
      return await this.service.deleteCostCenter(args);
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
