import * as graphql from "@nestjs/graphql";
import { ClreDedCoResolverBase } from "./base/clreDedCo.resolver.base";
import { ClreDedCo } from "./base/ClreDedCo";
import { ClreDedCoService } from "./clreDedCo.service";

@graphql.Resolver(() => ClreDedCo)
export class ClreDedCoResolver extends ClreDedCoResolverBase {
  constructor(protected readonly service: ClreDedCoService) {
    super(service);
  }
}
