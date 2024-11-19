import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InvoiceService } from "./invoice.service";
import { InvoiceGrpcControllerBase } from "./base/invoice.grpc.controller.base";

@swagger.ApiTags("invoices")
@common.Controller("invoices")
export class InvoiceGrpcController extends InvoiceGrpcControllerBase {
  constructor(protected readonly service: InvoiceService) {
    super(service);
  }
}
