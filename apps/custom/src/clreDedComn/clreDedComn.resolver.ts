import * as graphql from "@nestjs/graphql";
import { ClreDedComnResolverBase } from "./base/clreDedComn.resolver.base";
import { ClreDedComn } from "./base/ClreDedComn";
import { ClreDedComnService } from "./clreDedComn.service";

@graphql.Resolver(() => ClreDedComn)
export class ClreDedComnResolver extends ClreDedComnResolverBase {
  constructor(protected readonly service: ClreDedComnService) {
    super(service);
  }
}
