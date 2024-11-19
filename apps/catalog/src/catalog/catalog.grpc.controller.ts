import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CatalogService } from "./catalog.service";
import { CatalogGrpcControllerBase } from "./base/catalog.grpc.controller.base";

@swagger.ApiTags("catalogs")
@common.Controller("catalogs")
export class CatalogGrpcController extends CatalogGrpcControllerBase {
  constructor(protected readonly service: CatalogService) {
    super(service);
  }
}
