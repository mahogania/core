import { Module } from "@nestjs/common";
import { ConsoleLogModuleBase } from "./base/consoleLog.module.base";
import { ConsoleLogService } from "./consoleLog.service";
import { ConsoleLogController } from "./consoleLog.controller";
import { ConsoleLogResolver } from "./consoleLog.resolver";

@Module({
  imports: [ConsoleLogModuleBase],
  controllers: [ConsoleLogController],
  providers: [ConsoleLogService, ConsoleLogResolver],
  exports: [ConsoleLogService],
})
export class ConsoleLogModule {}
