import { Module } from "@nestjs/common";
import { DunningModuleBase } from "./base/dunning.module.base";
import { DunningService } from "./dunning.service";
import { DunningController } from "./dunning.controller";
import { DunningResolver } from "./dunning.resolver";

@Module({
  imports: [DunningModuleBase],
  controllers: [DunningController],
  providers: [DunningService, DunningResolver],
  exports: [DunningService],
})
export class DunningModule {}
