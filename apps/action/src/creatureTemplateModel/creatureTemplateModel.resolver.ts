import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CreatureTemplateModelResolverBase } from "./base/creatureTemplateModel.resolver.base";
import { CreatureTemplateModel } from "./base/CreatureTemplateModel";
import { CreatureTemplateModelService } from "./creatureTemplateModel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureTemplateModel)
export class CreatureTemplateModelResolver extends CreatureTemplateModelResolverBase {
  constructor(
    protected readonly service: CreatureTemplateModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
