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
import { ShippingRuleCondition } from "./ShippingRuleCondition";
import { ShippingRuleConditionCountArgs } from "./ShippingRuleConditionCountArgs";
import { ShippingRuleConditionFindManyArgs } from "./ShippingRuleConditionFindManyArgs";
import { ShippingRuleConditionFindUniqueArgs } from "./ShippingRuleConditionFindUniqueArgs";
import { CreateShippingRuleConditionArgs } from "./CreateShippingRuleConditionArgs";
import { UpdateShippingRuleConditionArgs } from "./UpdateShippingRuleConditionArgs";
import { DeleteShippingRuleConditionArgs } from "./DeleteShippingRuleConditionArgs";
import { ShippingRuleConditionService } from "../shippingRuleCondition.service";
@graphql.Resolver(() => ShippingRuleCondition)
export class ShippingRuleConditionResolverBase {
  constructor(protected readonly service: ShippingRuleConditionService) {}

  async _shippingRuleConditionsMeta(
    @graphql.Args() args: ShippingRuleConditionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ShippingRuleCondition])
  async shippingRuleConditions(
    @graphql.Args() args: ShippingRuleConditionFindManyArgs
  ): Promise<ShippingRuleCondition[]> {
    return this.service.shippingRuleConditions(args);
  }

  @graphql.Query(() => ShippingRuleCondition, { nullable: true })
  async shippingRuleCondition(
    @graphql.Args() args: ShippingRuleConditionFindUniqueArgs
  ): Promise<ShippingRuleCondition | null> {
    const result = await this.service.shippingRuleCondition(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ShippingRuleCondition)
  async createShippingRuleCondition(
    @graphql.Args() args: CreateShippingRuleConditionArgs
  ): Promise<ShippingRuleCondition> {
    return await this.service.createShippingRuleCondition({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ShippingRuleCondition)
  async updateShippingRuleCondition(
    @graphql.Args() args: UpdateShippingRuleConditionArgs
  ): Promise<ShippingRuleCondition | null> {
    try {
      return await this.service.updateShippingRuleCondition({
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

  @graphql.Mutation(() => ShippingRuleCondition)
  async deleteShippingRuleCondition(
    @graphql.Args() args: DeleteShippingRuleConditionArgs
  ): Promise<ShippingRuleCondition | null> {
    try {
      return await this.service.deleteShippingRuleCondition(args);
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
