import { Module } from "@nestjs/common";
import { ContactPhoneModuleBase } from "./base/contactPhone.module.base";
import { ContactPhoneService } from "./contactPhone.service";
import { ContactPhoneController } from "./contactPhone.controller";
import { ContactPhoneResolver } from "./contactPhone.resolver";

@Module({
  imports: [ContactPhoneModuleBase],
  controllers: [ContactPhoneController],
  providers: [ContactPhoneService, ContactPhoneResolver],
  exports: [ContactPhoneService],
})
export class ContactPhoneModule {}
