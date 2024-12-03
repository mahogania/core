import { Module } from "@nestjs/common";
import { AutoRepeatDayModuleBase } from "./base/autoRepeatDay.module.base";
import { AutoRepeatDayService } from "./autoRepeatDay.service";
import { AutoRepeatDayController } from "./autoRepeatDay.controller";
import { AutoRepeatDayResolver } from "./autoRepeatDay.resolver";

@Module({
  imports: [AutoRepeatDayModuleBase],
  controllers: [AutoRepeatDayController],
  providers: [AutoRepeatDayService, AutoRepeatDayResolver],
  exports: [AutoRepeatDayService],
})
export class AutoRepeatDayModule {}
