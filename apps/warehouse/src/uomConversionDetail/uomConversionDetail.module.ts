import { Module } from "@nestjs/common";
import { UomConversionDetailModuleBase } from "./base/uomConversionDetail.module.base";
import { UomConversionDetailService } from "./uomConversionDetail.service";
import { UomConversionDetailController } from "./uomConversionDetail.controller";
import { UomConversionDetailResolver } from "./uomConversionDetail.resolver";

@Module({
  imports: [UomConversionDetailModuleBase],
  controllers: [UomConversionDetailController],
  providers: [UomConversionDetailService, UomConversionDetailResolver],
  exports: [UomConversionDetailService],
})
export class UomConversionDetailModule {}
