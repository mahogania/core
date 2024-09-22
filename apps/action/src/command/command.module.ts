import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CommandModuleBase } from "./base/command.module.base";
import { CommandService } from "./command.service";
import { CommandController } from "./command.controller";
import { CommandGrpcController } from "./command.grpc.controller";
import { CommandResolver } from "./command.resolver";

@Module({
  imports: [CommandModuleBase, forwardRef(() => AuthModule)],
  controllers: [CommandController, CommandGrpcController],
  providers: [CommandService, CommandResolver],
  exports: [CommandService],
})
export class CommandModule {}
