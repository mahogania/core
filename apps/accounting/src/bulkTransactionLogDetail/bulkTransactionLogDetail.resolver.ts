import * as graphql from "@nestjs/graphql";
import { BulkTransactionLogDetailResolverBase } from "./base/bulkTransactionLogDetail.resolver.base";
import { BulkTransactionLogDetail } from "./base/BulkTransactionLogDetail";
import { BulkTransactionLogDetailService } from "./bulkTransactionLogDetail.service";

@graphql.Resolver(() => BulkTransactionLogDetail)
export class BulkTransactionLogDetailResolver extends BulkTransactionLogDetailResolverBase {
  constructor(protected readonly service: BulkTransactionLogDetailService) {
    super(service);
  }
}
