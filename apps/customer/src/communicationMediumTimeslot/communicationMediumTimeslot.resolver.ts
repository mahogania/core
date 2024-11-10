import * as graphql from "@nestjs/graphql";
import { CommunicationMediumTimeslotResolverBase } from "./base/communicationMediumTimeslot.resolver.base";
import { CommunicationMediumTimeslot } from "./base/CommunicationMediumTimeslot";
import { CommunicationMediumTimeslotService } from "./communicationMediumTimeslot.service";

@graphql.Resolver(() => CommunicationMediumTimeslot)
export class CommunicationMediumTimeslotResolver extends CommunicationMediumTimeslotResolverBase {
  constructor(protected readonly service: CommunicationMediumTimeslotService) {
    super(service);
  }
}
