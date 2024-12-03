import * as graphql from "@nestjs/graphql";
import { DunningLetterTextResolverBase } from "./base/dunningLetterText.resolver.base";
import { DunningLetterText } from "./base/DunningLetterText";
import { DunningLetterTextService } from "./dunningLetterText.service";

@graphql.Resolver(() => DunningLetterText)
export class DunningLetterTextResolver extends DunningLetterTextResolverBase {
  constructor(protected readonly service: DunningLetterTextService) {
    super(service);
  }
}
