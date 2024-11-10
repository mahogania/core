import * as graphql from "@nestjs/graphql";
import { ContactEmailResolverBase } from "./base/contactEmail.resolver.base";
import { ContactEmail } from "./base/ContactEmail";
import { ContactEmailService } from "./contactEmail.service";

@graphql.Resolver(() => ContactEmail)
export class ContactEmailResolver extends ContactEmailResolverBase {
  constructor(protected readonly service: ContactEmailService) {
    super(service);
  }
}
