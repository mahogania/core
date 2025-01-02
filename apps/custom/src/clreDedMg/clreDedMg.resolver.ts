import * as graphql from "@nestjs/graphql";
import { ClreDedMgResolverBase } from "./base/clreDedMg.resolver.base";
import { ClreDedMg } from "./base/ClreDedMg";
import { ClreDedMgService } from "./clreDedMg.service";

@graphql.Resolver(() => ClreDedMg)
export class ClreDedMgResolver extends ClreDedMgResolverBase {
  constructor(protected readonly service: ClreDedMgService) {
    super(service);
  }
}
