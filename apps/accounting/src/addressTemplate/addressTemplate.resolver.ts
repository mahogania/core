import * as graphql from "@nestjs/graphql";
import { AddressTemplateResolverBase } from "./base/addressTemplate.resolver.base";
import { AddressTemplate } from "./base/AddressTemplate";
import { AddressTemplateService } from "./addressTemplate.service";

@graphql.Resolver(() => AddressTemplate)
export class AddressTemplateResolver extends AddressTemplateResolverBase {
  constructor(protected readonly service: AddressTemplateService) {
    super(service);
  }
}
