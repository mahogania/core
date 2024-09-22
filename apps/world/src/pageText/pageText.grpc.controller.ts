import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PageTextService } from "./pageText.service";
import { PageTextGrpcControllerBase } from "./base/pageText.grpc.controller.base";

@swagger.ApiTags("pageTexts")
@common.Controller("pageTexts")
export class PageTextGrpcController extends PageTextGrpcControllerBase {
  constructor(protected readonly service: PageTextService) {
    super(service);
  }
}
