import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChoiceLocaleService } from "./choiceLocale.service";
import { ChoiceLocaleGrpcControllerBase } from "./base/choiceLocale.grpc.controller.base";

@swagger.ApiTags("choiceLocales")
@common.Controller("choiceLocales")
export class ChoiceLocaleGrpcController extends ChoiceLocaleGrpcControllerBase {
  constructor(protected readonly service: ChoiceLocaleService) {
    super(service);
  }
}
