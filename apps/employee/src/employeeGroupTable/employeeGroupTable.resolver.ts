import * as graphql from "@nestjs/graphql";
import { EmployeeGroupTableResolverBase } from "./base/employeeGroupTable.resolver.base";
import { EmployeeGroupTable } from "./base/EmployeeGroupTable";
import { EmployeeGroupTableService } from "./employeeGroupTable.service";

@graphql.Resolver(() => EmployeeGroupTable)
export class EmployeeGroupTableResolver extends EmployeeGroupTableResolverBase {
  constructor(protected readonly service: EmployeeGroupTableService) {
    super(service);
  }
}
