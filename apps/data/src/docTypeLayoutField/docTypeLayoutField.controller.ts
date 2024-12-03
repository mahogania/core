import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocTypeLayoutFieldService } from "./docTypeLayoutField.service";
import { DocTypeLayoutFieldControllerBase } from "./base/docTypeLayoutField.controller.base";

@swagger.ApiTags("docTypeLayoutFields")
@common.Controller("docTypeLayoutFields")
export class DocTypeLayoutFieldController extends DocTypeLayoutFieldControllerBase {
  constructor(protected readonly service: DocTypeLayoutFieldService) {
    super(service);
  }
}
