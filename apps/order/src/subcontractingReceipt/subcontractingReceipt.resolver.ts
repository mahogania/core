import * as graphql from "@nestjs/graphql";
import { SubcontractingReceiptResolverBase } from "./base/subcontractingReceipt.resolver.base";
import { SubcontractingReceipt } from "./base/SubcontractingReceipt";
import { SubcontractingReceiptService } from "./subcontractingReceipt.service";

@graphql.Resolver(() => SubcontractingReceipt)
export class SubcontractingReceiptResolver extends SubcontractingReceiptResolverBase {
  constructor(protected readonly service: SubcontractingReceiptService) {
    super(service);
  }
}
