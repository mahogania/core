import { Module } from "@nestjs/common";
import { IndustryTypeModuleBase } from "./base/industryType.module.base";
import { IndustryTypeService } from "./industryType.service";
import { IndustryTypeController } from "./industryType.controller";
import { IndustryTypeResolver } from "./industryType.resolver";

@Module({
  imports: [IndustryTypeModuleBase],
  controllers: [IndustryTypeController],
  providers: [IndustryTypeService, IndustryTypeResolver],
  exports: [IndustryTypeService],
})
export class IndustryTypeModule {}
