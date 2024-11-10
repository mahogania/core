import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FormService } from "./form.service";
import { FormControllerBase } from "./base/form.controller.base";

@swagger.ApiTags("forms")
@common.Controller("forms")
export class FormController extends FormControllerBase {
  constructor(protected readonly service: FormService) {
    super(service);
  }
}
