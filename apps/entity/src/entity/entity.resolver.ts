import * as graphql from "@nestjs/graphql";
import { EntityResolverBase } from "./base/entity.resolver.base";
import { Entity } from "./base/Entity";
import { EntityService } from "./entity.service";

@graphql.Resolver(() => Entity)
export class EntityResolver extends EntityResolverBase {
  constructor(protected readonly service: EntityService) {
    super(service);
  }
}
