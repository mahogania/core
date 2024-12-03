import { Module } from "@nestjs/common";
import { BomOperationModuleBase } from "./base/bomOperation.module.base";
import { BomOperationService } from "./bomOperation.service";
import { BomOperationController } from "./bomOperation.controller";
import { BomOperationResolver } from "./bomOperation.resolver";

@Module({
  imports: [BomOperationModuleBase],
  controllers: [BomOperationController],
  providers: [BomOperationService, BomOperationResolver],
  exports: [BomOperationService],
})
export class BomOperationModule {}
