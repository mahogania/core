import * as graphql from "@nestjs/graphql";
import { PosInvoiceMergeLogResolverBase } from "./base/posInvoiceMergeLog.resolver.base";
import { PosInvoiceMergeLog } from "./base/PosInvoiceMergeLog";
import { PosInvoiceMergeLogService } from "./posInvoiceMergeLog.service";

@graphql.Resolver(() => PosInvoiceMergeLog)
export class PosInvoiceMergeLogResolver extends PosInvoiceMergeLogResolverBase {
  constructor(protected readonly service: PosInvoiceMergeLogService) {
    super(service);
  }
}
