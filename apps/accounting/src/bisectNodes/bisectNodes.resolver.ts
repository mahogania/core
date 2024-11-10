import * as graphql from "@nestjs/graphql";
import { BisectNodesResolverBase } from "./base/bisectNodes.resolver.base";
import { BisectNodes } from "./base/BisectNodes";
import { BisectNodesService } from "./bisectNodes.service";

@graphql.Resolver(() => BisectNodes)
export class BisectNodesResolver extends BisectNodesResolverBase {
  constructor(protected readonly service: BisectNodesService) {
    super(service);
  }
}
