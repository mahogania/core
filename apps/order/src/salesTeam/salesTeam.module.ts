import { Module } from "@nestjs/common";
import { SalesTeamModuleBase } from "./base/salesTeam.module.base";
import { SalesTeamService } from "./salesTeam.service";
import { SalesTeamController } from "./salesTeam.controller";
import { SalesTeamResolver } from "./salesTeam.resolver";

@Module({
  imports: [SalesTeamModuleBase],
  controllers: [SalesTeamController],
  providers: [SalesTeamService, SalesTeamResolver],
  exports: [SalesTeamService],
})
export class SalesTeamModule {}
