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
import { AuthorizationRule } from "./AuthorizationRule";
import { AuthorizationRuleCountArgs } from "./AuthorizationRuleCountArgs";
import { AuthorizationRuleFindManyArgs } from "./AuthorizationRuleFindManyArgs";
import { AuthorizationRuleFindUniqueArgs } from "./AuthorizationRuleFindUniqueArgs";
import { CreateAuthorizationRuleArgs } from "./CreateAuthorizationRuleArgs";
import { UpdateAuthorizationRuleArgs } from "./UpdateAuthorizationRuleArgs";
import { DeleteAuthorizationRuleArgs } from "./DeleteAuthorizationRuleArgs";
import { AuthorizationRuleService } from "../authorizationRule.service";
@graphql.Resolver(() => AuthorizationRule)
export class AuthorizationRuleResolverBase {
  constructor(protected readonly service: AuthorizationRuleService) {}

  async _authorizationRulesMeta(
    @graphql.Args() args: AuthorizationRuleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AuthorizationRule])
  async authorizationRules(
    @graphql.Args() args: AuthorizationRuleFindManyArgs
  ): Promise<AuthorizationRule[]> {
    return this.service.authorizationRules(args);
  }

  @graphql.Query(() => AuthorizationRule, { nullable: true })
  async authorizationRule(
    @graphql.Args() args: AuthorizationRuleFindUniqueArgs
  ): Promise<AuthorizationRule | null> {
    const result = await this.service.authorizationRule(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AuthorizationRule)
  async createAuthorizationRule(
    @graphql.Args() args: CreateAuthorizationRuleArgs
  ): Promise<AuthorizationRule> {
    return await this.service.createAuthorizationRule({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AuthorizationRule)
  async updateAuthorizationRule(
    @graphql.Args() args: UpdateAuthorizationRuleArgs
  ): Promise<AuthorizationRule | null> {
    try {
      return await this.service.updateAuthorizationRule({
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

  @graphql.Mutation(() => AuthorizationRule)
  async deleteAuthorizationRule(
    @graphql.Args() args: DeleteAuthorizationRuleArgs
  ): Promise<AuthorizationRule | null> {
    try {
      return await this.service.deleteAuthorizationRule(args);
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