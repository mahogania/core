import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestRequestItemsLocaleService } from "./questRequestItemsLocale.service";
import { QuestRequestItemsLocaleGrpcControllerBase } from "./base/questRequestItemsLocale.grpc.controller.base";

@swagger.ApiTags("questRequestItemsLocales")
@common.Controller("questRequestItemsLocales")
export class QuestRequestItemsLocaleGrpcController extends QuestRequestItemsLocaleGrpcControllerBase {
  constructor(protected readonly service: QuestRequestItemsLocaleService) {
    super(service);
  }
}
