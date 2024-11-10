import * as graphql from "@nestjs/graphql";
import { DocTypeLayoutResolverBase } from "./base/docTypeLayout.resolver.base";
import { DocTypeLayout } from "./base/DocTypeLayout";
import { DocTypeLayoutService } from "./docTypeLayout.service";

@graphql.Resolver(() => DocTypeLayout)
export class DocTypeLayoutResolver extends DocTypeLayoutResolverBase {
  constructor(protected readonly service: DocTypeLayoutService) {
    super(service);
  }
}
