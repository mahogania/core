import { Module } from "@nestjs/common";
import { CommandModuleBase } from "./base/command.module.base";
import { CommandService } from "./command.service";
import { CommandController } from "./command.controller";
import { CommandGrpcController } from "./command.grpc.controller";
import { CommandResolver } from "./command.resolver";

@Module({
  imports: [CommandModuleBase],
  controllers: [CommandController, CommandGrpcController],
  providers: [CommandService, CommandResolver],
  exports: [CommandService],
})
export class CommandModule {}
