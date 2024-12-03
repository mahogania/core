import * as graphql from "@nestjs/graphql";
import { ChequePrintTemplateResolverBase } from "./base/chequePrintTemplate.resolver.base";
import { ChequePrintTemplate } from "./base/ChequePrintTemplate";
import { ChequePrintTemplateService } from "./chequePrintTemplate.service";

@graphql.Resolver(() => ChequePrintTemplate)
export class ChequePrintTemplateResolver extends ChequePrintTemplateResolverBase {
  constructor(protected readonly service: ChequePrintTemplateService) {
    super(service);
  }
}
