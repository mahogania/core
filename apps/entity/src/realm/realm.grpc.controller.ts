import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RealmService } from "./realm.service";
import { RealmGrpcControllerBase } from "./base/realm.grpc.controller.base";

@swagger.ApiTags("realms")
@common.Controller("realms")
export class RealmGrpcController extends RealmGrpcControllerBase {
  constructor(protected readonly service: RealmService) {
    super(service);
  }
}
