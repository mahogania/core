import * as graphql from "@nestjs/graphql";
import { ClreDedCntrResolverBase } from "./base/clreDedCntr.resolver.base";
import { ClreDedCntr } from "./base/ClreDedCntr";
import { ClreDedCntrService } from "./clreDedCntr.service";

@graphql.Resolver(() => ClreDedCntr)
export class ClreDedCntrResolver extends ClreDedCntrResolverBase {
  constructor(protected readonly service: ClreDedCntrService) {
    super(service);
  }
}
