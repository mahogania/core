import * as graphql from "@nestjs/graphql";
import { AuthorizationRuleResolverBase } from "./base/authorizationRule.resolver.base";
import { AuthorizationRule } from "./base/AuthorizationRule";
import { AuthorizationRuleService } from "./authorizationRule.service";

@graphql.Resolver(() => AuthorizationRule)
export class AuthorizationRuleResolver extends AuthorizationRuleResolverBase {
  constructor(protected readonly service: AuthorizationRuleService) {
    super(service);
  }
}
