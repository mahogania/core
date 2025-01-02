import * as graphql from "@nestjs/graphql";
import { ClreDedPrcDclrPdlResolverBase } from "./base/clreDedPrcDclrPdl.resolver.base";
import { ClreDedPrcDclrPdl } from "./base/ClreDedPrcDclrPdl";
import { ClreDedPrcDclrPdlService } from "./clreDedPrcDclrPdl.service";

@graphql.Resolver(() => ClreDedPrcDclrPdl)
export class ClreDedPrcDclrPdlResolver extends ClreDedPrcDclrPdlResolverBase {
  constructor(protected readonly service: ClreDedPrcDclrPdlService) {
    super(service);
  }
}
