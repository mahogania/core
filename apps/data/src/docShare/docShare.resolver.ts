import * as graphql from "@nestjs/graphql";
import { DocShareResolverBase } from "./base/docShare.resolver.base";
import { DocShare } from "./base/DocShare";
import { DocShareService } from "./docShare.service";

@graphql.Resolver(() => DocShare)
export class DocShareResolver extends DocShareResolverBase {
  constructor(protected readonly service: DocShareService) {
    super(service);
  }
}
