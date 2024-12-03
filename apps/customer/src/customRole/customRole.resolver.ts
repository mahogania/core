import * as graphql from "@nestjs/graphql";
import { CustomRoleResolverBase } from "./base/customRole.resolver.base";
import { CustomRole } from "./base/CustomRole";
import { CustomRoleService } from "./customRole.service";

@graphql.Resolver(() => CustomRole)
export class CustomRoleResolver extends CustomRoleResolverBase {
  constructor(protected readonly service: CustomRoleService) {
    super(service);
  }
}
