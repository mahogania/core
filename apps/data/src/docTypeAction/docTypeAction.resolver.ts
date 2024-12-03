import * as graphql from "@nestjs/graphql";
import { DocTypeActionResolverBase } from "./base/docTypeAction.resolver.base";
import { DocTypeAction } from "./base/DocTypeAction";
import { DocTypeActionService } from "./docTypeAction.service";

@graphql.Resolver(() => DocTypeAction)
export class DocTypeActionResolver extends DocTypeActionResolverBase {
  constructor(protected readonly service: DocTypeActionService) {
    super(service);
  }
}
