import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameWeatherService } from "./gameWeather.service";
import { GameWeatherControllerBase } from "./base/gameWeather.controller.base";

@swagger.ApiTags("gameWeathers")
@common.Controller("gameWeathers")
export class GameWeatherController extends GameWeatherControllerBase {
  constructor(
    protected readonly service: GameWeatherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
