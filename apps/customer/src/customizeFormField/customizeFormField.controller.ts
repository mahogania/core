import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomizeFormFieldService } from "./customizeFormField.service";
import { CustomizeFormFieldControllerBase } from "./base/customizeFormField.controller.base";

@swagger.ApiTags("customizeFormFields")
@common.Controller("customizeFormFields")
export class CustomizeFormFieldController extends CustomizeFormFieldControllerBase {
  constructor(protected readonly service: CustomizeFormFieldService) {
    super(service);
  }
}
