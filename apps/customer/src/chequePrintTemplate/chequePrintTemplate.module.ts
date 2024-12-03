import { Module } from "@nestjs/common";
import { ChequePrintTemplateModuleBase } from "./base/chequePrintTemplate.module.base";
import { ChequePrintTemplateService } from "./chequePrintTemplate.service";
import { ChequePrintTemplateController } from "./chequePrintTemplate.controller";
import { ChequePrintTemplateResolver } from "./chequePrintTemplate.resolver";

@Module({
  imports: [ChequePrintTemplateModuleBase],
  controllers: [ChequePrintTemplateController],
  providers: [ChequePrintTemplateService, ChequePrintTemplateResolver],
  exports: [ChequePrintTemplateService],
})
export class ChequePrintTemplateModule {}
