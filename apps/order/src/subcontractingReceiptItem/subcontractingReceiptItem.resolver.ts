import * as graphql from "@nestjs/graphql";
import { SubcontractingReceiptItemResolverBase } from "./base/subcontractingReceiptItem.resolver.base";
import { SubcontractingReceiptItem } from "./base/SubcontractingReceiptItem";
import { SubcontractingReceiptItemService } from "./subcontractingReceiptItem.service";

@graphql.Resolver(() => SubcontractingReceiptItem)
export class SubcontractingReceiptItemResolver extends SubcontractingReceiptItemResolverBase {
  constructor(protected readonly service: SubcontractingReceiptItemService) {
    super(service);
  }
}
