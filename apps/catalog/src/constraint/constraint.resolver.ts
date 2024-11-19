import * as graphql from "@nestjs/graphql";
import { ConstraintResolverBase } from "./base/constraint.resolver.base";
import { Constraint } from "./base/Constraint";
import { ConstraintService } from "./constraint.service";

@graphql.Resolver(() => Constraint)
export class ConstraintResolver extends ConstraintResolverBase {
  constructor(protected readonly service: ConstraintService) {
    super(service);
  }
}
