import * as graphql from "@nestjs/graphql";
import { EmailUnsubscribeResolverBase } from "./base/emailUnsubscribe.resolver.base";
import { EmailUnsubscribe } from "./base/EmailUnsubscribe";
import { EmailUnsubscribeService } from "./emailUnsubscribe.service";

@graphql.Resolver(() => EmailUnsubscribe)
export class EmailUnsubscribeResolver extends EmailUnsubscribeResolverBase {
  constructor(protected readonly service: EmailUnsubscribeService) {
    super(service);
  }
}
