import { Module } from "@nestjs/common";
import { BomCreatorItemModule } from "./bomCreatorItem/bomCreatorItem.module";
import { BomCreatorModule } from "./bomCreator/bomCreator.module";
import { BomExplosionItemModule } from "./bomExplosionItem/bomExplosionItem.module";
import { BomItemModule } from "./bomItem/bomItem.module";
import { BomOperationModule } from "./bomOperation/bomOperation.module";
import { BomScrapItemModule } from "./bomScrapItem/bomScrapItem.module";
import { BomUpdateBatchModule } from "./bomUpdateBatch/bomUpdateBatch.module";
import { BomUpdateLogModule } from "./bomUpdateLog/bomUpdateLog.module";
import { BomWebsiteItemModule } from "./bomWebsiteItem/bomWebsiteItem.module";
import { BomWebsiteOperationModule } from "./bomWebsiteOperation/bomWebsiteOperation.module";
import { BomModule } from "./bom/bom.module";
import { BatchModule } from "./batch/batch.module";
import { BinModule } from "./bin/bin.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    BomCreatorItemModule,
    BomCreatorModule,
    BomExplosionItemModule,
    BomItemModule,
    BomOperationModule,
    BomScrapItemModule,
    BomUpdateBatchModule,
    BomUpdateLogModule,
    BomWebsiteItemModule,
    BomWebsiteOperationModule,
    BomModule,
    BatchModule,
    BinModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
