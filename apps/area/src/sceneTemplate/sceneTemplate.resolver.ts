import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SceneTemplateResolverBase } from "./base/sceneTemplate.resolver.base";
import { SceneTemplate } from "./base/SceneTemplate";
import { SceneTemplateService } from "./sceneTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SceneTemplate)
export class SceneTemplateResolver extends SceneTemplateResolverBase {
  constructor(
    protected readonly service: SceneTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
