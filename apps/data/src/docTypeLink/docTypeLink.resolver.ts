import * as graphql from "@nestjs/graphql";
import { DocTypeLinkResolverBase } from "./base/docTypeLink.resolver.base";
import { DocTypeLink } from "./base/DocTypeLink";
import { DocTypeLinkService } from "./docTypeLink.service";

@graphql.Resolver(() => DocTypeLink)
export class DocTypeLinkResolver extends DocTypeLinkResolverBase {
  constructor(protected readonly service: DocTypeLinkService) {
    super(service);
  }
}
