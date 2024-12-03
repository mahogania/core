import { Module } from "@nestjs/common";
import { DocTypeLayoutModuleBase } from "./base/docTypeLayout.module.base";
import { DocTypeLayoutService } from "./docTypeLayout.service";
import { DocTypeLayoutController } from "./docTypeLayout.controller";
import { DocTypeLayoutResolver } from "./docTypeLayout.resolver";

@Module({
  imports: [DocTypeLayoutModuleBase],
  controllers: [DocTypeLayoutController],
  providers: [DocTypeLayoutService, DocTypeLayoutResolver],
  exports: [DocTypeLayoutService],
})
export class DocTypeLayoutModule {}
