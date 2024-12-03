import { Module } from "@nestjs/common";
import { HolidayListModuleBase } from "./base/holidayList.module.base";
import { HolidayListService } from "./holidayList.service";
import { HolidayListController } from "./holidayList.controller";
import { HolidayListGrpcController } from "./holidayList.grpc.controller";
import { HolidayListResolver } from "./holidayList.resolver";

@Module({
  imports: [HolidayListModuleBase],
  controllers: [HolidayListController, HolidayListGrpcController],
  providers: [HolidayListService, HolidayListResolver],
  exports: [HolidayListService],
})
export class HolidayListModule {}
