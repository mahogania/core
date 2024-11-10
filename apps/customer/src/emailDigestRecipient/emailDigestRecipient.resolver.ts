import * as graphql from "@nestjs/graphql";
import { EmailDigestRecipientResolverBase } from "./base/emailDigestRecipient.resolver.base";
import { EmailDigestRecipient } from "./base/EmailDigestRecipient";
import { EmailDigestRecipientService } from "./emailDigestRecipient.service";

@graphql.Resolver(() => EmailDigestRecipient)
export class EmailDigestRecipientResolver extends EmailDigestRecipientResolverBase {
  constructor(protected readonly service: EmailDigestRecipientService) {
    super(service);
  }
}
