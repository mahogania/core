import { Module } from "@nestjs/common";
import { DocTypeActionModuleBase } from "./base/docTypeAction.module.base";
import { DocTypeActionService } from "./docTypeAction.service";
import { DocTypeActionController } from "./docTypeAction.controller";
import { DocTypeActionResolver } from "./docTypeAction.resolver";

@Module({
  imports: [DocTypeActionModuleBase],
  controllers: [DocTypeActionController],
  providers: [DocTypeActionService, DocTypeActionResolver],
  exports: [DocTypeActionService],
})
export class DocTypeActionModule {}
