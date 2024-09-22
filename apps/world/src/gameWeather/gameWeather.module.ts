import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameWeatherModuleBase } from "./base/gameWeather.module.base";
import { GameWeatherService } from "./gameWeather.service";
import { GameWeatherController } from "./gameWeather.controller";
import { GameWeatherGrpcController } from "./gameWeather.grpc.controller";
import { GameWeatherResolver } from "./gameWeather.resolver";

@Module({
  imports: [GameWeatherModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameWeatherController, GameWeatherGrpcController],
  providers: [GameWeatherService, GameWeatherResolver],
  exports: [GameWeatherService],
})
export class GameWeatherModule {}
