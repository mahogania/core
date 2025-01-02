import * as graphql from "@nestjs/graphql";
import { ClreDedRwmResolverBase } from "./base/clreDedRwm.resolver.base";
import { ClreDedRwm } from "./base/ClreDedRwm";
import { ClreDedRwmService } from "./clreDedRwm.service";

@graphql.Resolver(() => ClreDedRwm)
export class ClreDedRwmResolver extends ClreDedRwmResolverBase {
  constructor(protected readonly service: ClreDedRwmService) {
    super(service);
  }
}
