import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DunningLetterTextService } from "./dunningLetterText.service";
import { DunningLetterTextControllerBase } from "./base/dunningLetterText.controller.base";

@swagger.ApiTags("dunningLetterTexts")
@common.Controller("dunningLetterTexts")
export class DunningLetterTextController extends DunningLetterTextControllerBase {
  constructor(protected readonly service: DunningLetterTextService) {
    super(service);
  }
}
