import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GameWeatherResolverBase } from "./base/gameWeather.resolver.base";
import { GameWeather } from "./base/GameWeather";
import { GameWeatherService } from "./gameWeather.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameWeather)
export class GameWeatherResolver extends GameWeatherResolverBase {
  constructor(
    protected readonly service: GameWeatherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
