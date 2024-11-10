import * as graphql from "@nestjs/graphql";
import { EmailQueueRecipientResolverBase } from "./base/emailQueueRecipient.resolver.base";
import { EmailQueueRecipient } from "./base/EmailQueueRecipient";
import { EmailQueueRecipientService } from "./emailQueueRecipient.service";

@graphql.Resolver(() => EmailQueueRecipient)
export class EmailQueueRecipientResolver extends EmailQueueRecipientResolverBase {
  constructor(protected readonly service: EmailQueueRecipientService) {
    super(service);
  }
}
