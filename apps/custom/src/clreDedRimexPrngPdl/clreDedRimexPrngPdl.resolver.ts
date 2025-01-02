import * as graphql from "@nestjs/graphql";
import { ClreDedRimexPrngPdlResolverBase } from "./base/clreDedRimexPrngPdl.resolver.base";
import { ClreDedRimexPrngPdl } from "./base/ClreDedRimexPrngPdl";
import { ClreDedRimexPrngPdlService } from "./clreDedRimexPrngPdl.service";

@graphql.Resolver(() => ClreDedRimexPrngPdl)
export class ClreDedRimexPrngPdlResolver extends ClreDedRimexPrngPdlResolverBase {
  constructor(protected readonly service: ClreDedRimexPrngPdlService) {
    super(service);
  }
}
