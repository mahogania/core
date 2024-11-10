import { Module } from "@nestjs/common";
import { BatchModuleBase } from "./base/batch.module.base";
import { BatchService } from "./batch.service";
import { BatchController } from "./batch.controller";
import { BatchResolver } from "./batch.resolver";

@Module({
  imports: [BatchModuleBase],
  controllers: [BatchController],
  providers: [BatchService, BatchResolver],
  exports: [BatchService],
})
export class BatchModule {}
