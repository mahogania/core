import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParagraphLocaleService } from "./paragraphLocale.service";
import { ParagraphLocaleGrpcControllerBase } from "./base/paragraphLocale.grpc.controller.base";

@swagger.ApiTags("paragraphLocales")
@common.Controller("paragraphLocales")
export class ParagraphLocaleGrpcController extends ParagraphLocaleGrpcControllerBase {
  constructor(protected readonly service: ParagraphLocaleService) {
    super(service);
  }
}
