import * as graphql from "@nestjs/graphql";
import { PosCustomerGroupResolverBase } from "./base/posCustomerGroup.resolver.base";
import { PosCustomerGroup } from "./base/PosCustomerGroup";
import { PosCustomerGroupService } from "./posCustomerGroup.service";

@graphql.Resolver(() => PosCustomerGroup)
export class PosCustomerGroupResolver extends PosCustomerGroupResolverBase {
  constructor(protected readonly service: PosCustomerGroupService) {
    super(service);
  }
}
