import * as graphql from "@nestjs/graphql";
import { MaterialRequestItemResolverBase } from "./base/materialRequestItem.resolver.base";
import { MaterialRequestItem } from "./base/MaterialRequestItem";
import { MaterialRequestItemService } from "./materialRequestItem.service";

@graphql.Resolver(() => MaterialRequestItem)
export class MaterialRequestItemResolver extends MaterialRequestItemResolverBase {
  constructor(protected readonly service: MaterialRequestItemService) {
    super(service);
  }
}
