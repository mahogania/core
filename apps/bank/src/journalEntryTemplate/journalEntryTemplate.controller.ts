import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JournalEntryTemplateService } from "./journalEntryTemplate.service";
import { JournalEntryTemplateControllerBase } from "./base/journalEntryTemplate.controller.base";

@swagger.ApiTags("journalEntryTemplates")
@common.Controller("journalEntryTemplates")
export class JournalEntryTemplateController extends JournalEntryTemplateControllerBase {
  constructor(protected readonly service: JournalEntryTemplateService) {
    super(service);
  }
}
