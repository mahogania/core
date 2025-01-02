import * as graphql from "@nestjs/graphql";
import { ClreDedPrcDclrResolverBase } from "./base/clreDedPrcDclr.resolver.base";
import { ClreDedPrcDclr } from "./base/ClreDedPrcDclr";
import { ClreDedPrcDclrService } from "./clreDedPrcDclr.service";

@graphql.Resolver(() => ClreDedPrcDclr)
export class ClreDedPrcDclrResolver extends ClreDedPrcDclrResolverBase {
  constructor(protected readonly service: ClreDedPrcDclrService) {
    super(service);
  }
}
