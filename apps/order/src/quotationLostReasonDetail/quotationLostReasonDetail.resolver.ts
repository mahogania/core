import * as graphql from "@nestjs/graphql";
import { QuotationLostReasonDetailResolverBase } from "./base/quotationLostReasonDetail.resolver.base";
import { QuotationLostReasonDetail } from "./base/QuotationLostReasonDetail";
import { QuotationLostReasonDetailService } from "./quotationLostReasonDetail.service";

@graphql.Resolver(() => QuotationLostReasonDetail)
export class QuotationLostReasonDetailResolver extends QuotationLostReasonDetailResolverBase {
  constructor(protected readonly service: QuotationLostReasonDetailService) {
    super(service);
  }
}
