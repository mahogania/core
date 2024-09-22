import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestGreetingLocaleService } from "./questGreetingLocale.service";
import { QuestGreetingLocaleGrpcControllerBase } from "./base/questGreetingLocale.grpc.controller.base";

@swagger.ApiTags("questGreetingLocales")
@common.Controller("questGreetingLocales")
export class QuestGreetingLocaleGrpcController extends QuestGreetingLocaleGrpcControllerBase {
  constructor(protected readonly service: QuestGreetingLocaleService) {
    super(service);
  }
}
