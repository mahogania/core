import { Module } from "@nestjs/common";
import { MaintenanceTeamMemberModuleBase } from "./base/maintenanceTeamMember.module.base";
import { MaintenanceTeamMemberService } from "./maintenanceTeamMember.service";
import { MaintenanceTeamMemberController } from "./maintenanceTeamMember.controller";
import { MaintenanceTeamMemberResolver } from "./maintenanceTeamMember.resolver";

@Module({
  imports: [MaintenanceTeamMemberModuleBase],
  controllers: [MaintenanceTeamMemberController],
  providers: [MaintenanceTeamMemberService, MaintenanceTeamMemberResolver],
  exports: [MaintenanceTeamMemberService],
})
export class MaintenanceTeamMemberModule {}
