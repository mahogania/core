import * as graphql from "@nestjs/graphql";
import { DocPermResolverBase } from "./base/docPerm.resolver.base";
import { DocPerm } from "./base/DocPerm";
import { DocPermService } from "./docPerm.service";

@graphql.Resolver(() => DocPerm)
export class DocPermResolver extends DocPermResolverBase {
  constructor(protected readonly service: DocPermService) {
    super(service);
  }
}
