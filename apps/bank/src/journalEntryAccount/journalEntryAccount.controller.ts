import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JournalEntryAccountService } from "./journalEntryAccount.service";
import { JournalEntryAccountControllerBase } from "./base/journalEntryAccount.controller.base";

@swagger.ApiTags("journalEntryAccounts")
@common.Controller("journalEntryAccounts")
export class JournalEntryAccountController extends JournalEntryAccountControllerBase {
  constructor(protected readonly service: JournalEntryAccountService) {
    super(service);
  }
}
