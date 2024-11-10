import { Module } from "@nestjs/common";
import { InstallationNoteItemModuleBase } from "./base/installationNoteItem.module.base";
import { InstallationNoteItemService } from "./installationNoteItem.service";
import { InstallationNoteItemController } from "./installationNoteItem.controller";
import { InstallationNoteItemResolver } from "./installationNoteItem.resolver";

@Module({
  imports: [InstallationNoteItemModuleBase],
  controllers: [InstallationNoteItemController],
  providers: [InstallationNoteItemService, InstallationNoteItemResolver],
  exports: [InstallationNoteItemService],
})
export class InstallationNoteItemModule {}
