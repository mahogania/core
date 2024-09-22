import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameWeatherService } from "./gameWeather.service";
import { GameWeatherGrpcControllerBase } from "./base/gameWeather.grpc.controller.base";

@swagger.ApiTags("gameWeathers")
@common.Controller("gameWeathers")
export class GameWeatherGrpcController extends GameWeatherGrpcControllerBase {
  constructor(protected readonly service: GameWeatherService) {
    super(service);
  }
}
