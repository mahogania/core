import { Module } from "@nestjs/common";
import { DeferredAccountingModuleBase } from "./base/deferredAccounting.module.base";
import { DeferredAccountingService } from "./deferredAccounting.service";
import { DeferredAccountingController } from "./deferredAccounting.controller";
import { DeferredAccountingResolver } from "./deferredAccounting.resolver";

@Module({
  imports: [DeferredAccountingModuleBase],
  controllers: [DeferredAccountingController],
  providers: [DeferredAccountingService, DeferredAccountingResolver],
  exports: [DeferredAccountingService],
})
export class DeferredAccountingModule {}
