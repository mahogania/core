import * as graphql from "@nestjs/graphql";
import { AssociationResolverBase } from "./base/association.resolver.base";
import { Association } from "./base/Association";
import { AssociationService } from "./association.service";

@graphql.Resolver(() => Association)
export class AssociationResolver extends AssociationResolverBase {
  constructor(protected readonly service: AssociationService) {
    super(service);
  }
}
