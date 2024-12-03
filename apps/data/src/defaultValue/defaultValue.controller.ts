import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DefaultValueService } from "./defaultValue.service";
import { DefaultValueControllerBase } from "./base/defaultValue.controller.base";

@swagger.ApiTags("defaultValues")
@common.Controller("defaultValues")
export class DefaultValueController extends DefaultValueControllerBase {
  constructor(protected readonly service: DefaultValueService) {
    super(service);
  }
}
