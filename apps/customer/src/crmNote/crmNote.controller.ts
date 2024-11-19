import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CrmNoteService } from "./crmNote.service";
import { CrmNoteControllerBase } from "./base/crmNote.controller.base";

@swagger.ApiTags("crmNotes")
@common.Controller("crmNotes")
export class CrmNoteController extends CrmNoteControllerBase {
  constructor(protected readonly service: CrmNoteService) {
    super(service);
  }
}
