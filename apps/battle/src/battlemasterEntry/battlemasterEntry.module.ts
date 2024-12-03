import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BattlemasterEntryModuleBase } from "./base/battlemasterEntry.module.base";
import { BattlemasterEntryService } from "./battlemasterEntry.service";
import { BattlemasterEntryController } from "./battlemasterEntry.controller";
import { BattlemasterEntryGrpcController } from "./battlemasterEntry.grpc.controller";
import { BattlemasterEntryResolver } from "./battlemasterEntry.resolver";

@Module({
  imports: [BattlemasterEntryModuleBase, forwardRef(() => AuthModule)],
  controllers: [BattlemasterEntryController, BattlemasterEntryGrpcController],
  providers: [BattlemasterEntryService, BattlemasterEntryResolver],
  exports: [BattlemasterEntryService],
})
export class BattlemasterEntryModule {}
