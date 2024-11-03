import * as graphql from "@nestjs/graphql";
import { WorldResolverBase } from "./base/world.resolver.base";
import { World } from "./base/World";
import { WorldService } from "./world.service";

@graphql.Resolver(() => World)
export class WorldResolver extends WorldResolverBase {
  constructor(protected readonly service: WorldService) {
    super(service);
  }
}
