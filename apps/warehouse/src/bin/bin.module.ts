import { Module } from "@nestjs/common";
import { BinModuleBase } from "./base/bin.module.base";
import { BinService } from "./bin.service";
import { BinController } from "./bin.controller";
import { BinResolver } from "./bin.resolver";

@Module({
  imports: [BinModuleBase],
  controllers: [BinController],
  providers: [BinService, BinResolver],
  exports: [BinService],
})
export class BinModule {}
