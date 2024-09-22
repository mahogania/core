import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OutdoorpvpTemplateModuleBase } from "./base/outdoorpvpTemplate.module.base";
import { OutdoorpvpTemplateService } from "./outdoorpvpTemplate.service";
import { OutdoorpvpTemplateController } from "./outdoorpvpTemplate.controller";
import { OutdoorpvpTemplateGrpcController } from "./outdoorpvpTemplate.grpc.controller";
import { OutdoorpvpTemplateResolver } from "./outdoorpvpTemplate.resolver";

@Module({
  imports: [OutdoorpvpTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [OutdoorpvpTemplateController, OutdoorpvpTemplateGrpcController],
  providers: [OutdoorpvpTemplateService, OutdoorpvpTemplateResolver],
  exports: [OutdoorpvpTemplateService],
})
export class OutdoorpvpTemplateModule {}
