import * as graphql from "@nestjs/graphql";
import { ContactPhoneResolverBase } from "./base/contactPhone.resolver.base";
import { ContactPhone } from "./base/ContactPhone";
import { ContactPhoneService } from "./contactPhone.service";

@graphql.Resolver(() => ContactPhone)
export class ContactPhoneResolver extends ContactPhoneResolverBase {
  constructor(protected readonly service: ContactPhoneService) {
    super(service);
  }
}
