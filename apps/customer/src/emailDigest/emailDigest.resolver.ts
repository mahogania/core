import * as graphql from "@nestjs/graphql";
import { EmailDigestResolverBase } from "./base/emailDigest.resolver.base";
import { EmailDigest } from "./base/EmailDigest";
import { EmailDigestService } from "./emailDigest.service";

@graphql.Resolver(() => EmailDigest)
export class EmailDigestResolver extends EmailDigestResolverBase {
  constructor(protected readonly service: EmailDigestService) {
    super(service);
  }
}
