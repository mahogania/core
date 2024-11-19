import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuoteService } from "./quote.service";
import { QuoteGrpcControllerBase } from "./base/quote.grpc.controller.base";

@swagger.ApiTags("quotes")
@common.Controller("quotes")
export class QuoteGrpcController extends QuoteGrpcControllerBase {
  constructor(protected readonly service: QuoteService) {
    super(service);
  }
}
