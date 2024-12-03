import { Module } from "@nestjs/common";
import { DocFieldModuleBase } from "./base/docField.module.base";
import { DocFieldService } from "./docField.service";
import { DocFieldController } from "./docField.controller";
import { DocFieldResolver } from "./docField.resolver";

@Module({
  imports: [DocFieldModuleBase],
  controllers: [DocFieldController],
  providers: [DocFieldService, DocFieldResolver],
  exports: [DocFieldService],
})
export class DocFieldModule {}
