import { Module } from "@nestjs/common";
import { DocTypeLinkModuleBase } from "./base/docTypeLink.module.base";
import { DocTypeLinkService } from "./docTypeLink.service";
import { DocTypeLinkController } from "./docTypeLink.controller";
import { DocTypeLinkResolver } from "./docTypeLink.resolver";

@Module({
  imports: [DocTypeLinkModuleBase],
  controllers: [DocTypeLinkController],
  providers: [DocTypeLinkService, DocTypeLinkResolver],
  exports: [DocTypeLinkService],
})
export class DocTypeLinkModule {}
