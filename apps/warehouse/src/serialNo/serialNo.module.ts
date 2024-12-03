import { Module } from "@nestjs/common";
import { SerialNoModuleBase } from "./base/serialNo.module.base";
import { SerialNoService } from "./serialNo.service";
import { SerialNoController } from "./serialNo.controller";
import { SerialNoResolver } from "./serialNo.resolver";

@Module({
  imports: [SerialNoModuleBase],
  controllers: [SerialNoController],
  providers: [SerialNoService, SerialNoResolver],
  exports: [SerialNoService],
})
export class SerialNoModule {}
