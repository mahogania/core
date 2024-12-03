import * as graphql from "@nestjs/graphql";
import { AssignmentRuleDayResolverBase } from "./base/assignmentRuleDay.resolver.base";
import { AssignmentRuleDay } from "./base/AssignmentRuleDay";
import { AssignmentRuleDayService } from "./assignmentRuleDay.service";

@graphql.Resolver(() => AssignmentRuleDay)
export class AssignmentRuleDayResolver extends AssignmentRuleDayResolverBase {
  constructor(protected readonly service: AssignmentRuleDayService) {
    super(service);
  }
}
