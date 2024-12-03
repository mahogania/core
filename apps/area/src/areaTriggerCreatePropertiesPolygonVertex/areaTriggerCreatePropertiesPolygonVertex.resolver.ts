import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AreaTriggerCreatePropertiesPolygonVertexResolverBase } from "./base/areaTriggerCreatePropertiesPolygonVertex.resolver.base";
import { AreaTriggerCreatePropertiesPolygonVertex } from "./base/AreaTriggerCreatePropertiesPolygonVertex";
import { AreaTriggerCreatePropertiesPolygonVertexService } from "./areaTriggerCreatePropertiesPolygonVertex.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AreaTriggerCreatePropertiesPolygonVertex)
export class AreaTriggerCreatePropertiesPolygonVertexResolver extends AreaTriggerCreatePropertiesPolygonVertexResolverBase {
  constructor(
    protected readonly service: AreaTriggerCreatePropertiesPolygonVertexService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
