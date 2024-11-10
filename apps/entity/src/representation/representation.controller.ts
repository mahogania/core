import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RepresentationService } from "./representation.service";
import { RepresentationControllerBase } from "./base/representation.controller.base";

@swagger.ApiTags("representations")
@common.Controller("representations")
export class RepresentationController extends RepresentationControllerBase {
  constructor(protected readonly service: RepresentationService) {
    super(service);
  }
}
