import * as graphql from "@nestjs/graphql";
import { EmailQueueResolverBase } from "./base/emailQueue.resolver.base";
import { EmailQueue } from "./base/EmailQueue";
import { EmailQueueService } from "./emailQueue.service";

@graphql.Resolver(() => EmailQueue)
export class EmailQueueResolver extends EmailQueueResolverBase {
  constructor(protected readonly service: EmailQueueService) {
    super(service);
  }
}
