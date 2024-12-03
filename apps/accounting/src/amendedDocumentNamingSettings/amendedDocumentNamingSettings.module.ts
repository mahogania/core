import { Module } from "@nestjs/common";
import { AmendedDocumentNamingSettingsModuleBase } from "./base/amendedDocumentNamingSettings.module.base";
import { AmendedDocumentNamingSettingsService } from "./amendedDocumentNamingSettings.service";
import { AmendedDocumentNamingSettingsController } from "./amendedDocumentNamingSettings.controller";
import { AmendedDocumentNamingSettingsResolver } from "./amendedDocumentNamingSettings.resolver";

@Module({
  imports: [AmendedDocumentNamingSettingsModuleBase],
  controllers: [AmendedDocumentNamingSettingsController],
  providers: [
    AmendedDocumentNamingSettingsService,
    AmendedDocumentNamingSettingsResolver,
  ],
  exports: [AmendedDocumentNamingSettingsService],
})
export class AmendedDocumentNamingSettingsModule {}
