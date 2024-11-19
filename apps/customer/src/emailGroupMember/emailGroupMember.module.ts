import { Module } from "@nestjs/common";
import { EmailGroupMemberModuleBase } from "./base/emailGroupMember.module.base";
import { EmailGroupMemberService } from "./emailGroupMember.service";
import { EmailGroupMemberController } from "./emailGroupMember.controller";
import { EmailGroupMemberResolver } from "./emailGroupMember.resolver";

@Module({
  imports: [EmailGroupMemberModuleBase],
  controllers: [EmailGroupMemberController],
  providers: [EmailGroupMemberService, EmailGroupMemberResolver],
  exports: [EmailGroupMemberService],
})
export class EmailGroupMemberModule {}
