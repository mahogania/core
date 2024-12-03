import { Module } from "@nestjs/common";
import { EmailDigestModuleBase } from "./base/emailDigest.module.base";
import { EmailDigestService } from "./emailDigest.service";
import { EmailDigestController } from "./emailDigest.controller";
import { EmailDigestResolver } from "./emailDigest.resolver";

@Module({
  imports: [EmailDigestModuleBase],
  controllers: [EmailDigestController],
  providers: [EmailDigestService, EmailDigestResolver],
  exports: [EmailDigestService],
})
export class EmailDigestModule {}
