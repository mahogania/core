import * as graphql from "@nestjs/graphql";
import { ClreDedVlutComnResolverBase } from "./base/clreDedVlutComn.resolver.base";
import { ClreDedVlutComn } from "./base/ClreDedVlutComn";
import { ClreDedVlutComnService } from "./clreDedVlutComn.service";

@graphql.Resolver(() => ClreDedVlutComn)
export class ClreDedVlutComnResolver extends ClreDedVlutComnResolverBase {
  constructor(protected readonly service: ClreDedVlutComnService) {
    super(service);
  }
}
