import * as graphql from "@nestjs/graphql";
import { AssignmentRuleResolverBase } from "./base/assignmentRule.resolver.base";
import { AssignmentRule } from "./base/AssignmentRule";
import { AssignmentRuleService } from "./assignmentRule.service";

@graphql.Resolver(() => AssignmentRule)
export class AssignmentRuleResolver extends AssignmentRuleResolverBase {
  constructor(protected readonly service: AssignmentRuleService) {
    super(service);
  }
}
