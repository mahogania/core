import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameWeatherServiceBase } from "./base/gameWeather.service.base";

@Injectable()
export class GameWeatherService extends GameWeatherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
