import * as graphql from "@nestjs/graphql";
import { DocTypeLayoutFieldResolverBase } from "./base/docTypeLayoutField.resolver.base";
import { DocTypeLayoutField } from "./base/DocTypeLayoutField";
import { DocTypeLayoutFieldService } from "./docTypeLayoutField.service";

@graphql.Resolver(() => DocTypeLayoutField)
export class DocTypeLayoutFieldResolver extends DocTypeLayoutFieldResolverBase {
  constructor(protected readonly service: DocTypeLayoutFieldService) {
    super(service);
  }
}
