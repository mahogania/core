import * as graphql from "@nestjs/graphql";
import { EmailDomainResolverBase } from "./base/emailDomain.resolver.base";
import { EmailDomain } from "./base/EmailDomain";
import { EmailDomainService } from "./emailDomain.service";

@graphql.Resolver(() => EmailDomain)
export class EmailDomainResolver extends EmailDomainResolverBase {
  constructor(protected readonly service: EmailDomainService) {
    super(service);
  }
}
