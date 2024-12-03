import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JournalEntryService } from "./journalEntry.service";
import { JournalEntryControllerBase } from "./base/journalEntry.controller.base";

@swagger.ApiTags("journalEntries")
@common.Controller("journalEntries")
export class JournalEntryController extends JournalEntryControllerBase {
  constructor(protected readonly service: JournalEntryService) {
    super(service);
  }
}
