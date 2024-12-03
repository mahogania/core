import { Module } from "@nestjs/common";
import { CustomHtmlBlockModuleBase } from "./base/customHtmlBlock.module.base";
import { CustomHtmlBlockService } from "./customHtmlBlock.service";
import { CustomHtmlBlockController } from "./customHtmlBlock.controller";
import { CustomHtmlBlockResolver } from "./customHtmlBlock.resolver";

@Module({
  imports: [CustomHtmlBlockModuleBase],
  controllers: [CustomHtmlBlockController],
  providers: [CustomHtmlBlockService, CustomHtmlBlockResolver],
  exports: [CustomHtmlBlockService],
})
export class CustomHtmlBlockModule {}
