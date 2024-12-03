import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomHtmlBlockService } from "./customHtmlBlock.service";
import { CustomHtmlBlockControllerBase } from "./base/customHtmlBlock.controller.base";

@swagger.ApiTags("customHtmlBlocks")
@common.Controller("customHtmlBlocks")
export class CustomHtmlBlockController extends CustomHtmlBlockControllerBase {
  constructor(protected readonly service: CustomHtmlBlockService) {
    super(service);
  }
}
