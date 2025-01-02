import * as graphql from "@nestjs/graphql";
import { ClreDedPdlsResolverBase } from "./base/clreDedPdls.resolver.base";
import { ClreDedPdls } from "./base/ClreDedPdls";
import { ClreDedPdlsService } from "./clreDedPdls.service";

@graphql.Resolver(() => ClreDedPdls)
export class ClreDedPdlsResolver extends ClreDedPdlsResolverBase {
  constructor(protected readonly service: ClreDedPdlsService) {
    super(service);
  }
}
