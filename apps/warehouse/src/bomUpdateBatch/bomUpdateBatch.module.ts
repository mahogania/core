import { Module } from "@nestjs/common";
import { BomUpdateBatchModuleBase } from "./base/bomUpdateBatch.module.base";
import { BomUpdateBatchService } from "./bomUpdateBatch.service";
import { BomUpdateBatchController } from "./bomUpdateBatch.controller";
import { BomUpdateBatchResolver } from "./bomUpdateBatch.resolver";

@Module({
  imports: [BomUpdateBatchModuleBase],
  controllers: [BomUpdateBatchController],
  providers: [BomUpdateBatchService, BomUpdateBatchResolver],
  exports: [BomUpdateBatchService],
})
export class BomUpdateBatchModule {}
