import { Module } from "@nestjs/common";
import { EmailGroupModuleBase } from "./base/emailGroup.module.base";
import { EmailGroupService } from "./emailGroup.service";
import { EmailGroupController } from "./emailGroup.controller";
import { EmailGroupResolver } from "./emailGroup.resolver";

@Module({
  imports: [EmailGroupModuleBase],
  controllers: [EmailGroupController],
  providers: [EmailGroupService, EmailGroupResolver],
  exports: [EmailGroupService],
})
export class EmailGroupModule {}
