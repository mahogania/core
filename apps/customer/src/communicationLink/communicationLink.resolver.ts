import * as graphql from "@nestjs/graphql";
import { CommunicationLinkResolverBase } from "./base/communicationLink.resolver.base";
import { CommunicationLink } from "./base/CommunicationLink";
import { CommunicationLinkService } from "./communicationLink.service";

@graphql.Resolver(() => CommunicationLink)
export class CommunicationLinkResolver extends CommunicationLinkResolverBase {
  constructor(protected readonly service: CommunicationLinkService) {
    super(service);
  }
}
