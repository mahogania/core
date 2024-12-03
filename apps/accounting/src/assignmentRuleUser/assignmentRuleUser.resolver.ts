import * as graphql from "@nestjs/graphql";
import { AssignmentRuleUserResolverBase } from "./base/assignmentRuleUser.resolver.base";
import { AssignmentRuleUser } from "./base/AssignmentRuleUser";
import { AssignmentRuleUserService } from "./assignmentRuleUser.service";

@graphql.Resolver(() => AssignmentRuleUser)
export class AssignmentRuleUserResolver extends AssignmentRuleUserResolverBase {
  constructor(protected readonly service: AssignmentRuleUserService) {
    super(service);
  }
}
