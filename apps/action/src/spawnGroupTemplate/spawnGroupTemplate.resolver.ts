import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SpawnGroupTemplateResolverBase } from "./base/spawnGroupTemplate.resolver.base";
import { SpawnGroupTemplate } from "./base/SpawnGroupTemplate";
import { SpawnGroupTemplateService } from "./spawnGroupTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SpawnGroupTemplate)
export class SpawnGroupTemplateResolver extends SpawnGroupTemplateResolverBase {
  constructor(
    protected readonly service: SpawnGroupTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
