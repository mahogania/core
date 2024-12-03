import * as graphql from "@nestjs/graphql";
import { EmailFlagQueueResolverBase } from "./base/emailFlagQueue.resolver.base";
import { EmailFlagQueue } from "./base/EmailFlagQueue";
import { EmailFlagQueueService } from "./emailFlagQueue.service";

@graphql.Resolver(() => EmailFlagQueue)
export class EmailFlagQueueResolver extends EmailFlagQueueResolverBase {
  constructor(protected readonly service: EmailFlagQueueService) {
    super(service);
  }
}
