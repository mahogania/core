import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerchoiceLocaleResolverBase } from "./base/playerchoiceLocale.resolver.base";
import { PlayerchoiceLocale } from "./base/PlayerchoiceLocale";
import { PlayerchoiceLocaleService } from "./playerchoiceLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerchoiceLocale)
export class PlayerchoiceLocaleResolver extends PlayerchoiceLocaleResolverBase {
  constructor(
    protected readonly service: PlayerchoiceLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
