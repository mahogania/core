import * as graphql from "@nestjs/graphql";
import { ThreatResolverBase } from "./base/threat.resolver.base";
import { Threat } from "./base/Threat";
import { ThreatService } from "./threat.service";

@graphql.Resolver(() => Threat)
export class ThreatResolver extends ThreatResolverBase {
  constructor(protected readonly service: ThreatService) {
    super(service);
  }
}
