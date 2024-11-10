import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DrivingLicenseCategoryService } from "./drivingLicenseCategory.service";
import { DrivingLicenseCategoryControllerBase } from "./base/drivingLicenseCategory.controller.base";

@swagger.ApiTags("drivingLicenseCategories")
@common.Controller("drivingLicenseCategories")
export class DrivingLicenseCategoryController extends DrivingLicenseCategoryControllerBase {
  constructor(protected readonly service: DrivingLicenseCategoryService) {
    super(service);
  }
}
