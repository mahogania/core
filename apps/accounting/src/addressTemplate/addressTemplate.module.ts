import { Module } from "@nestjs/common";
import { AddressTemplateModuleBase } from "./base/addressTemplate.module.base";
import { AddressTemplateService } from "./addressTemplate.service";
import { AddressTemplateController } from "./addressTemplate.controller";
import { AddressTemplateResolver } from "./addressTemplate.resolver";

@Module({
  imports: [AddressTemplateModuleBase],
  controllers: [AddressTemplateController],
  providers: [AddressTemplateService, AddressTemplateResolver],
  exports: [AddressTemplateService],
})
export class AddressTemplateModule {}
