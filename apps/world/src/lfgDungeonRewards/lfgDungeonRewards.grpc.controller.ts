import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LfgDungeonRewardsService } from "./lfgDungeonRewards.service";
import { LfgDungeonRewardsGrpcControllerBase } from "./base/lfgDungeonRewards.grpc.controller.base";

@swagger.ApiTags("lfgDungeonRewards")
@common.Controller("lfgDungeonRewards")
export class LfgDungeonRewardsGrpcController extends LfgDungeonRewardsGrpcControllerBase {
  constructor(protected readonly service: LfgDungeonRewardsService) {
    super(service);
  }
}
