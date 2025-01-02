import * as graphql from "@nestjs/graphql";
import { ClreDedMdlStszResolverBase } from "./base/clreDedMdlStsz.resolver.base";
import { ClreDedMdlStsz } from "./base/ClreDedMdlStsz";
import { ClreDedMdlStszService } from "./clreDedMdlStsz.service";

@graphql.Resolver(() => ClreDedMdlStsz)
export class ClreDedMdlStszResolver extends ClreDedMdlStszResolverBase {
  constructor(protected readonly service: ClreDedMdlStszService) {
    super(service);
  }
}
