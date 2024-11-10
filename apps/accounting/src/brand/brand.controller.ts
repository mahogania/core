import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BrandService } from "./brand.service";
import { BrandControllerBase } from "./base/brand.controller.base";

@swagger.ApiTags("brands")
@common.Controller("brands")
export class BrandController extends BrandControllerBase {
  constructor(protected readonly service: BrandService) {
    super(service);
  }
}
