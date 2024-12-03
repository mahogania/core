import { Module } from "@nestjs/common";
import { MaterialRequestModuleBase } from "./base/materialRequest.module.base";
import { MaterialRequestService } from "./materialRequest.service";
import { MaterialRequestController } from "./materialRequest.controller";
import { MaterialRequestResolver } from "./materialRequest.resolver";

@Module({
  imports: [MaterialRequestModuleBase],
  controllers: [MaterialRequestController],
  providers: [MaterialRequestService, MaterialRequestResolver],
  exports: [MaterialRequestService],
})
export class MaterialRequestModule {}
