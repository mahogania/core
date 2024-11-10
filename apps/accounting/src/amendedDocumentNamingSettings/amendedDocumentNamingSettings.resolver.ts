import * as graphql from "@nestjs/graphql";
import { AmendedDocumentNamingSettingsResolverBase } from "./base/amendedDocumentNamingSettings.resolver.base";
import { AmendedDocumentNamingSettings } from "./base/AmendedDocumentNamingSettings";
import { AmendedDocumentNamingSettingsService } from "./amendedDocumentNamingSettings.service";

@graphql.Resolver(() => AmendedDocumentNamingSettings)
export class AmendedDocumentNamingSettingsResolver extends AmendedDocumentNamingSettingsResolverBase {
  constructor(
    protected readonly service: AmendedDocumentNamingSettingsService
  ) {
    super(service);
  }
}
