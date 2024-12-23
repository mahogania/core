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
import { SubscriptionPlan } from "./SubscriptionPlan";
import { SubscriptionPlanCountArgs } from "./SubscriptionPlanCountArgs";
import { SubscriptionPlanFindManyArgs } from "./SubscriptionPlanFindManyArgs";
import { SubscriptionPlanFindUniqueArgs } from "./SubscriptionPlanFindUniqueArgs";
import { DeleteSubscriptionPlanArgs } from "./DeleteSubscriptionPlanArgs";
import { SubscriptionPlanService } from "../subscriptionPlan.service";
@graphql.Resolver(() => SubscriptionPlan)
export class SubscriptionPlanResolverBase {
  constructor(protected readonly service: SubscriptionPlanService) {}

  async _subscriptionPlansMeta(
    @graphql.Args() args: SubscriptionPlanCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SubscriptionPlan])
  async subscriptionPlans(
    @graphql.Args() args: SubscriptionPlanFindManyArgs
  ): Promise<SubscriptionPlan[]> {
    return this.service.subscriptionPlans(args);
  }

  @graphql.Query(() => SubscriptionPlan, { nullable: true })
  async subscriptionPlan(
    @graphql.Args() args: SubscriptionPlanFindUniqueArgs
  ): Promise<SubscriptionPlan | null> {
    const result = await this.service.subscriptionPlan(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SubscriptionPlan)
  async deleteSubscriptionPlan(
    @graphql.Args() args: DeleteSubscriptionPlanArgs
  ): Promise<SubscriptionPlan | null> {
    try {
      return await this.service.deleteSubscriptionPlan(args);
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
