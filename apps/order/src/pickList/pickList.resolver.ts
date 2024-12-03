import * as graphql from "@nestjs/graphql";
import { PickListResolverBase } from "./base/pickList.resolver.base";
import { PickList } from "./base/PickList";
import { PickListService } from "./pickList.service";

@graphql.Resolver(() => PickList)
export class PickListResolver extends PickListResolverBase {
  constructor(protected readonly service: PickListService) {
    super(service);
  }
}
