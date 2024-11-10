import * as graphql from "@nestjs/graphql";
import { EmailAccountResolverBase } from "./base/emailAccount.resolver.base";
import { EmailAccount } from "./base/EmailAccount";
import { EmailAccountService } from "./emailAccount.service";

@graphql.Resolver(() => EmailAccount)
export class EmailAccountResolver extends EmailAccountResolverBase {
  constructor(protected readonly service: EmailAccountService) {
    super(service);
  }
}
