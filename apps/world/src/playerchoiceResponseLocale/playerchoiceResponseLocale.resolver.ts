import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerchoiceResponseLocaleResolverBase } from "./base/playerchoiceResponseLocale.resolver.base";
import { PlayerchoiceResponseLocale } from "./base/PlayerchoiceResponseLocale";
import { PlayerchoiceResponseLocaleService } from "./playerchoiceResponseLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerchoiceResponseLocale)
export class PlayerchoiceResponseLocaleResolver extends PlayerchoiceResponseLocaleResolverBase {
  constructor(
    protected readonly service: PlayerchoiceResponseLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
