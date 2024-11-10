import { Module } from "@nestjs/common";
import { ContactEmailModuleBase } from "./base/contactEmail.module.base";
import { ContactEmailService } from "./contactEmail.service";
import { ContactEmailController } from "./contactEmail.controller";
import { ContactEmailResolver } from "./contactEmail.resolver";

@Module({
  imports: [ContactEmailModuleBase],
  controllers: [ContactEmailController],
  providers: [ContactEmailService, ContactEmailResolver],
  exports: [ContactEmailService],
})
export class ContactEmailModule {}
