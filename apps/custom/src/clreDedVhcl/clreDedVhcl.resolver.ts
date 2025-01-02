import * as graphql from "@nestjs/graphql";
import { ClreDedVhclResolverBase } from "./base/clreDedVhcl.resolver.base";
import { ClreDedVhcl } from "./base/ClreDedVhcl";
import { ClreDedVhclService } from "./clreDedVhcl.service";

@graphql.Resolver(() => ClreDedVhcl)
export class ClreDedVhclResolver extends ClreDedVhclResolverBase {
  constructor(protected readonly service: ClreDedVhclService) {
    super(service);
  }
}
