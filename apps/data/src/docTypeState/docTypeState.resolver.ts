import * as graphql from "@nestjs/graphql";
import { DocTypeStateResolverBase } from "./base/docTypeState.resolver.base";
import { DocTypeState } from "./base/DocTypeState";
import { DocTypeStateService } from "./docTypeState.service";

@graphql.Resolver(() => DocTypeState)
export class DocTypeStateResolver extends DocTypeStateResolverBase {
  constructor(protected readonly service: DocTypeStateService) {
    super(service);
  }
}
