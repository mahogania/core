import * as graphql from "@nestjs/graphql";
import { DocFieldResolverBase } from "./base/docField.resolver.base";
import { DocField } from "./base/DocField";
import { DocFieldService } from "./docField.service";

@graphql.Resolver(() => DocField)
export class DocFieldResolver extends DocFieldResolverBase {
  constructor(protected readonly service: DocFieldService) {
    super(service);
  }
}
