import * as graphql from "@nestjs/graphql";
import { EmployeeEducationResolverBase } from "./base/employeeEducation.resolver.base";
import { EmployeeEducation } from "./base/EmployeeEducation";
import { EmployeeEducationService } from "./employeeEducation.service";

@graphql.Resolver(() => EmployeeEducation)
export class EmployeeEducationResolver extends EmployeeEducationResolverBase {
  constructor(protected readonly service: EmployeeEducationService) {
    super(service);
  }
}
