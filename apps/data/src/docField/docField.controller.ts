import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocFieldService } from "./docField.service";
import { DocFieldControllerBase } from "./base/docField.controller.base";

@swagger.ApiTags("docFields")
@common.Controller("docFields")
export class DocFieldController extends DocFieldControllerBase {
  constructor(protected readonly service: DocFieldService) {
    super(service);
  }
}
