import * as graphql from "@nestjs/graphql";
import { DocTypeResolverBase } from "./base/docType.resolver.base";
import { DocType } from "./base/DocType";
import { DocTypeService } from "./docType.service";

@graphql.Resolver(() => DocType)
export class DocTypeResolver extends DocTypeResolverBase {
  constructor(protected readonly service: DocTypeService) {
    super(service);
  }
}
