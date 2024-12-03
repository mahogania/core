import { Module } from "@nestjs/common";
import { ActivityTypeModuleBase } from "./base/activityType.module.base";
import { ActivityTypeService } from "./activityType.service";
import { ActivityTypeController } from "./activityType.controller";
import { ActivityTypeResolver } from "./activityType.resolver";

@Module({
  imports: [ActivityTypeModuleBase],
  controllers: [ActivityTypeController],
  providers: [ActivityTypeService, ActivityTypeResolver],
  exports: [ActivityTypeService],
})
export class ActivityTypeModule {}
