import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstallationNoteItemService } from "./installationNoteItem.service";
import { InstallationNoteItemControllerBase } from "./base/installationNoteItem.controller.base";

@swagger.ApiTags("installationNoteItems")
@common.Controller("installationNoteItems")
export class InstallationNoteItemController extends InstallationNoteItemControllerBase {
  constructor(protected readonly service: InstallationNoteItemService) {
    super(service);
  }
}
