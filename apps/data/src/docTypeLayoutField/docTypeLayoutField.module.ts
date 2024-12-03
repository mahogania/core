import { Module } from "@nestjs/common";
import { DocTypeLayoutFieldModuleBase } from "./base/docTypeLayoutField.module.base";
import { DocTypeLayoutFieldService } from "./docTypeLayoutField.service";
import { DocTypeLayoutFieldController } from "./docTypeLayoutField.controller";
import { DocTypeLayoutFieldResolver } from "./docTypeLayoutField.resolver";

@Module({
  imports: [DocTypeLayoutFieldModuleBase],
  controllers: [DocTypeLayoutFieldController],
  providers: [DocTypeLayoutFieldService, DocTypeLayoutFieldResolver],
  exports: [DocTypeLayoutFieldService],
})
export class DocTypeLayoutFieldModule {}
