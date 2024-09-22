import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestRequestItemsLocaleModuleBase } from "./base/questRequestItemsLocale.module.base";
import { QuestRequestItemsLocaleService } from "./questRequestItemsLocale.service";
import { QuestRequestItemsLocaleController } from "./questRequestItemsLocale.controller";
import { QuestRequestItemsLocaleGrpcController } from "./questRequestItemsLocale.grpc.controller";
import { QuestRequestItemsLocaleResolver } from "./questRequestItemsLocale.resolver";

@Module({
  imports: [QuestRequestItemsLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    QuestRequestItemsLocaleController,
    QuestRequestItemsLocaleGrpcController,
  ],
  providers: [QuestRequestItemsLocaleService, QuestRequestItemsLocaleResolver],
  exports: [QuestRequestItemsLocaleService],
})
export class QuestRequestItemsLocaleModule {}
