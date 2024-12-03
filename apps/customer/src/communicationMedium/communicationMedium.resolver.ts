import * as graphql from "@nestjs/graphql";
import { CommunicationMediumResolverBase } from "./base/communicationMedium.resolver.base";
import { CommunicationMedium } from "./base/CommunicationMedium";
import { CommunicationMediumService } from "./communicationMedium.service";

@graphql.Resolver(() => CommunicationMedium)
export class CommunicationMediumResolver extends CommunicationMediumResolverBase {
  constructor(protected readonly service: CommunicationMediumService) {
    super(service);
  }
}
