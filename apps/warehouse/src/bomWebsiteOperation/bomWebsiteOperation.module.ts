import { Module } from "@nestjs/common";
import { BomWebsiteOperationModuleBase } from "./base/bomWebsiteOperation.module.base";
import { BomWebsiteOperationService } from "./bomWebsiteOperation.service";
import { BomWebsiteOperationController } from "./bomWebsiteOperation.controller";
import { BomWebsiteOperationResolver } from "./bomWebsiteOperation.resolver";

@Module({
  imports: [BomWebsiteOperationModuleBase],
  controllers: [BomWebsiteOperationController],
  providers: [BomWebsiteOperationService, BomWebsiteOperationResolver],
  exports: [BomWebsiteOperationService],
})
export class BomWebsiteOperationModule {}
