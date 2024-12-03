import { Module } from "@nestjs/common";
import { DunningLetterTextModuleBase } from "./base/dunningLetterText.module.base";
import { DunningLetterTextService } from "./dunningLetterText.service";
import { DunningLetterTextController } from "./dunningLetterText.controller";
import { DunningLetterTextResolver } from "./dunningLetterText.resolver";

@Module({
  imports: [DunningLetterTextModuleBase],
  controllers: [DunningLetterTextController],
  providers: [DunningLetterTextService, DunningLetterTextResolver],
  exports: [DunningLetterTextService],
})
export class DunningLetterTextModule {}
