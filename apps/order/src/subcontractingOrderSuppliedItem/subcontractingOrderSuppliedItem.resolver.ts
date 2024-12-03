import * as graphql from "@nestjs/graphql";
import { SubcontractingOrderSuppliedItemResolverBase } from "./base/subcontractingOrderSuppliedItem.resolver.base";
import { SubcontractingOrderSuppliedItem } from "./base/SubcontractingOrderSuppliedItem";
import { SubcontractingOrderSuppliedItemService } from "./subcontractingOrderSuppliedItem.service";

@graphql.Resolver(() => SubcontractingOrderSuppliedItem)
export class SubcontractingOrderSuppliedItemResolver extends SubcontractingOrderSuppliedItemResolverBase {
  constructor(
    protected readonly service: SubcontractingOrderSuppliedItemService
  ) {
    super(service);
  }
}
