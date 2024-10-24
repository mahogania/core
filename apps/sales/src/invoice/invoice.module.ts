import { Module } from "@nestjs/common";
import { InvoiceModuleBase } from "./base/invoice.module.base";
import { InvoiceService } from "./invoice.service";
import { InvoiceController } from "./invoice.controller";
import { InvoiceGrpcController } from "./invoice.grpc.controller";
import { InvoiceResolver } from "./invoice.resolver";

@Module({
  imports: [InvoiceModuleBase],
  controllers: [InvoiceController, InvoiceGrpcController],
  providers: [InvoiceService, InvoiceResolver],
  exports: [InvoiceService],
})
export class InvoiceModule {}
