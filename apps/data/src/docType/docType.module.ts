import { Module } from "@nestjs/common";
import { DocTypeModuleBase } from "./base/docType.module.base";
import { DocTypeService } from "./docType.service";
import { DocTypeController } from "./docType.controller";
import { DocTypeResolver } from "./docType.resolver";

@Module({
  imports: [DocTypeModuleBase],
  controllers: [DocTypeController],
  providers: [DocTypeService, DocTypeResolver],
  exports: [DocTypeService],
})
export class DocTypeModule {}
