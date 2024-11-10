import { Module } from "@nestjs/common";
import { ItemAlternativeModuleBase } from "./base/itemAlternative.module.base";
import { ItemAlternativeService } from "./itemAlternative.service";
import { ItemAlternativeController } from "./itemAlternative.controller";
import { ItemAlternativeResolver } from "./itemAlternative.resolver";

@Module({
  imports: [ItemAlternativeModuleBase],
  controllers: [ItemAlternativeController],
  providers: [ItemAlternativeService, ItemAlternativeResolver],
  exports: [ItemAlternativeService],
})
export class ItemAlternativeModule {}
