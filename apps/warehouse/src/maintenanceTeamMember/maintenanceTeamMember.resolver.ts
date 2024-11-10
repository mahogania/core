import * as graphql from "@nestjs/graphql";
import { MaintenanceTeamMemberResolverBase } from "./base/maintenanceTeamMember.resolver.base";
import { MaintenanceTeamMember } from "./base/MaintenanceTeamMember";
import { MaintenanceTeamMemberService } from "./maintenanceTeamMember.service";

@graphql.Resolver(() => MaintenanceTeamMember)
export class MaintenanceTeamMemberResolver extends MaintenanceTeamMemberResolverBase {
  constructor(protected readonly service: MaintenanceTeamMemberService) {
    super(service);
  }
}
