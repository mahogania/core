import * as graphql from "@nestjs/graphql";
import { EmailRuleResolverBase } from "./base/emailRule.resolver.base";
import { EmailRule } from "./base/EmailRule";
import { EmailRuleService } from "./emailRule.service";

@graphql.Resolver(() => EmailRule)
export class EmailRuleResolver extends EmailRuleResolverBase {
  constructor(protected readonly service: EmailRuleService) {
    super(service);
  }
}
