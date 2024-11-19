import * as graphql from "@nestjs/graphql";
import { DesignationResolverBase } from "./base/designation.resolver.base";
import { Designation } from "./base/Designation";
import { DesignationService } from "./designation.service";

@graphql.Resolver(() => Designation)
export class DesignationResolver extends DesignationResolverBase {
  constructor(protected readonly service: DesignationService) {
    super(service);
  }
}
