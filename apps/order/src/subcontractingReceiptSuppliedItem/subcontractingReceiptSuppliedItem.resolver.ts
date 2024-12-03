import * as graphql from "@nestjs/graphql";
import { SubcontractingReceiptSuppliedItemResolverBase } from "./base/subcontractingReceiptSuppliedItem.resolver.base";
import { SubcontractingReceiptSuppliedItem } from "./base/SubcontractingReceiptSuppliedItem";
import { SubcontractingReceiptSuppliedItemService } from "./subcontractingReceiptSuppliedItem.service";

@graphql.Resolver(() => SubcontractingReceiptSuppliedItem)
export class SubcontractingReceiptSuppliedItemResolver extends SubcontractingReceiptSuppliedItemResolverBase {
  constructor(
    protected readonly service: SubcontractingReceiptSuppliedItemService
  ) {
    super(service);
  }
}
