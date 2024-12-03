import { Module } from "@nestjs/common";
import { SerialAndBatchBundleModuleBase } from "./base/serialAndBatchBundle.module.base";
import { SerialAndBatchBundleService } from "./serialAndBatchBundle.service";
import { SerialAndBatchBundleController } from "./serialAndBatchBundle.controller";
import { SerialAndBatchBundleResolver } from "./serialAndBatchBundle.resolver";

@Module({
  imports: [SerialAndBatchBundleModuleBase],
  controllers: [SerialAndBatchBundleController],
  providers: [SerialAndBatchBundleService, SerialAndBatchBundleResolver],
  exports: [SerialAndBatchBundleService],
})
export class SerialAndBatchBundleModule {}
