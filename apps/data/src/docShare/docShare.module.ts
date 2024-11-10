import { Module } from "@nestjs/common";
import { DocShareModuleBase } from "./base/docShare.module.base";
import { DocShareService } from "./docShare.service";
import { DocShareController } from "./docShare.controller";
import { DocShareResolver } from "./docShare.resolver";

@Module({
  imports: [DocShareModuleBase],
  controllers: [DocShareController],
  providers: [DocShareService, DocShareResolver],
  exports: [DocShareService],
})
export class DocShareModule {}
