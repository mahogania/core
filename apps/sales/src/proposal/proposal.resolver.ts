import * as graphql from "@nestjs/graphql";
import { ProposalResolverBase } from "./base/proposal.resolver.base";
import { Proposal } from "./base/Proposal";
import { ProposalService } from "./proposal.service";

@graphql.Resolver(() => Proposal)
export class ProposalResolver extends ProposalResolverBase {
  constructor(protected readonly service: ProposalService) {
    super(service);
  }
}
