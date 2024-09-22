import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureLootTemplateResolverBase } from "./base/creatureLootTemplate.resolver.base";
import { CreatureLootTemplate } from "./base/CreatureLootTemplate";
import { CreatureLootTemplateService } from "./creatureLootTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureLootTemplate)
export class CreatureLootTemplateResolver extends CreatureLootTemplateResolverBase {
  constructor(
    protected readonly service: CreatureLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
