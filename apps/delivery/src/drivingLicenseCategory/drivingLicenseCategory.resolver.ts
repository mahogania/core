import * as graphql from "@nestjs/graphql";
import { DrivingLicenseCategoryResolverBase } from "./base/drivingLicenseCategory.resolver.base";
import { DrivingLicenseCategory } from "./base/DrivingLicenseCategory";
import { DrivingLicenseCategoryService } from "./drivingLicenseCategory.service";

@graphql.Resolver(() => DrivingLicenseCategory)
export class DrivingLicenseCategoryResolver extends DrivingLicenseCategoryResolverBase {
  constructor(protected readonly service: DrivingLicenseCategoryService) {
    super(service);
  }
}
