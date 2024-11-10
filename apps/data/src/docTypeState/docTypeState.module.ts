import { Module } from "@nestjs/common";
import { DocTypeStateModuleBase } from "./base/docTypeState.module.base";
import { DocTypeStateService } from "./docTypeState.service";
import { DocTypeStateController } from "./docTypeState.controller";
import { DocTypeStateResolver } from "./docTypeState.resolver";

@Module({
  imports: [DocTypeStateModuleBase],
  controllers: [DocTypeStateController],
  providers: [DocTypeStateService, DocTypeStateResolver],
  exports: [DocTypeStateService],
})
export class DocTypeStateModule {}
