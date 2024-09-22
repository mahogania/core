import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GuildRewardsService } from "./guildRewards.service";
import { GuildRewardsGrpcControllerBase } from "./base/guildRewards.grpc.controller.base";

@swagger.ApiTags("guildRewards")
@common.Controller("guildRewards")
export class GuildRewardsGrpcController extends GuildRewardsGrpcControllerBase {
  constructor(protected readonly service: GuildRewardsService) {
    super(service);
  }
}
