import * as graphql from "@nestjs/graphql";
import { EmployeeGroupResolverBase } from "./base/employeeGroup.resolver.base";
import { EmployeeGroup } from "./base/EmployeeGroup";
import { EmployeeGroupService } from "./employeeGroup.service";

@graphql.Resolver(() => EmployeeGroup)
export class EmployeeGroupResolver extends EmployeeGroupResolverBase {
  constructor(protected readonly service: EmployeeGroupService) {
    super(service);
  }
}
