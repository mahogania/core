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
import { ShippingRule } from "./ShippingRule";
import { ShippingRuleCountArgs } from "./ShippingRuleCountArgs";
import { ShippingRuleFindManyArgs } from "./ShippingRuleFindManyArgs";
import { ShippingRuleFindUniqueArgs } from "./ShippingRuleFindUniqueArgs";
import { CreateShippingRuleArgs } from "./CreateShippingRuleArgs";
import { UpdateShippingRuleArgs } from "./UpdateShippingRuleArgs";
import { DeleteShippingRuleArgs } from "./DeleteShippingRuleArgs";
import { ShippingRuleService } from "../shippingRule.service";
@graphql.Resolver(() => ShippingRule)
export class ShippingRuleResolverBase {
  constructor(protected readonly service: ShippingRuleService) {}

  async _shippingRulesMeta(
    @graphql.Args() args: ShippingRuleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ShippingRule])
  async shippingRules(
    @graphql.Args() args: ShippingRuleFindManyArgs
  ): Promise<ShippingRule[]> {
    return this.service.shippingRules(args);
  }

  @graphql.Query(() => ShippingRule, { nullable: true })
  async shippingRule(
    @graphql.Args() args: ShippingRuleFindUniqueArgs
  ): Promise<ShippingRule | null> {
    const result = await this.service.shippingRule(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ShippingRule)
  async createShippingRule(
    @graphql.Args() args: CreateShippingRuleArgs
  ): Promise<ShippingRule> {
    return await this.service.createShippingRule({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ShippingRule)
  async updateShippingRule(
    @graphql.Args() args: UpdateShippingRuleArgs
  ): Promise<ShippingRule | null> {
    try {
      return await this.service.updateShippingRule({
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

  @graphql.Mutation(() => ShippingRule)
  async deleteShippingRule(
    @graphql.Args() args: DeleteShippingRuleArgs
  ): Promise<ShippingRule | null> {
    try {
      return await this.service.deleteShippingRule(args);
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