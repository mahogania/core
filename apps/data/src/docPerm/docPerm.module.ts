import { Module } from "@nestjs/common";
import { DocPermModuleBase } from "./base/docPerm.module.base";
import { DocPermService } from "./docPerm.service";
import { DocPermController } from "./docPerm.controller";
import { DocPermResolver } from "./docPerm.resolver";

@Module({
  imports: [DocPermModuleBase],
  controllers: [DocPermController],
  providers: [DocPermService, DocPermResolver],
  exports: [DocPermService],
})
export class DocPermModule {}
