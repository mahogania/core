import { Module } from "@nestjs/common";
import { CustomDocPermModuleBase } from "./base/customDocPerm.module.base";
import { CustomDocPermService } from "./customDocPerm.service";
import { CustomDocPermController } from "./customDocPerm.controller";
import { CustomDocPermResolver } from "./customDocPerm.resolver";

@Module({
  imports: [CustomDocPermModuleBase],
  controllers: [CustomDocPermController],
  providers: [CustomDocPermService, CustomDocPermResolver],
  exports: [CustomDocPermService],
})
export class CustomDocPermModule {}
