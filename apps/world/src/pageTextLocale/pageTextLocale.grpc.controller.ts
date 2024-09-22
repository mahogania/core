import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PageTextLocaleService } from "./pageTextLocale.service";
import { PageTextLocaleGrpcControllerBase } from "./base/pageTextLocale.grpc.controller.base";

@swagger.ApiTags("pageTextLocales")
@common.Controller("pageTextLocales")
export class PageTextLocaleGrpcController extends PageTextLocaleGrpcControllerBase {
  constructor(protected readonly service: PageTextLocaleService) {
    super(service);
  }
}
