import * as graphql from "@nestjs/graphql";
import { ClreDedVlutPdlResolverBase } from "./base/clreDedVlutPdl.resolver.base";
import { ClreDedVlutPdl } from "./base/ClreDedVlutPdl";
import { ClreDedVlutPdlService } from "./clreDedVlutPdl.service";

@graphql.Resolver(() => ClreDedVlutPdl)
export class ClreDedVlutPdlResolver extends ClreDedVlutPdlResolverBase {
  constructor(protected readonly service: ClreDedVlutPdlService) {
    super(service);
  }
}
