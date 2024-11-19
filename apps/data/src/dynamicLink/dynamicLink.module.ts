import { Module } from "@nestjs/common";
import { DynamicLinkModuleBase } from "./base/dynamicLink.module.base";
import { DynamicLinkService } from "./dynamicLink.service";
import { DynamicLinkController } from "./dynamicLink.controller";
import { DynamicLinkResolver } from "./dynamicLink.resolver";

@Module({
  imports: [DynamicLinkModuleBase],
  controllers: [DynamicLinkController],
  providers: [DynamicLinkService, DynamicLinkResolver],
  exports: [DynamicLinkService],
})
export class DynamicLinkModule {}
