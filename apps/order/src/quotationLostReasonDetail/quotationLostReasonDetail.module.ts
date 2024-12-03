import { Module } from "@nestjs/common";
import { QuotationLostReasonDetailModuleBase } from "./base/quotationLostReasonDetail.module.base";
import { QuotationLostReasonDetailService } from "./quotationLostReasonDetail.service";
import { QuotationLostReasonDetailController } from "./quotationLostReasonDetail.controller";
import { QuotationLostReasonDetailResolver } from "./quotationLostReasonDetail.resolver";

@Module({
  imports: [QuotationLostReasonDetailModuleBase],
  controllers: [QuotationLostReasonDetailController],
  providers: [
    QuotationLostReasonDetailService,
    QuotationLostReasonDetailResolver,
  ],
  exports: [QuotationLostReasonDetailService],
})
export class QuotationLostReasonDetailModule {}
