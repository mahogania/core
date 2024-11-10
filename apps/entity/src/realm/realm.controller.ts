import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RealmService } from "./realm.service";
import { RealmControllerBase } from "./base/realm.controller.base";

@swagger.ApiTags("realms")
@common.Controller("realms")
export class RealmController extends RealmControllerBase {
  constructor(protected readonly service: RealmService) {
    super(service);
  }
}
