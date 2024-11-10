import { Module } from "@nestjs/common";
import { DataImportModule } from "./dataImport/dataImport.module";
import { DataImportLogModule } from "./dataImportLog/dataImportLog.module";
import { DefaultValueModule } from "./defaultValue/defaultValue.module";
import { DocFieldModule } from "./docField/docField.module";
import { DocPermModule } from "./docPerm/docPerm.module";
import { DocShareModule } from "./docShare/docShare.module";
import { DocTypeActionModule } from "./docTypeAction/docTypeAction.module";
import { DocTypeLayoutFieldModule } from "./docTypeLayoutField/docTypeLayoutField.module";
import { DocTypeLayoutModule } from "./docTypeLayout/docTypeLayout.module";
import { DocTypeLinkModule } from "./docTypeLink/docTypeLink.module";
import { DocTypeStateModule } from "./docTypeState/docTypeState.module";
import { DocTypeModule } from "./docType/docType.module";
import { DynamicLinkModule } from "./dynamicLink/dynamicLink.module";
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
    DataImportModule,
    DataImportLogModule,
    DefaultValueModule,
    DocFieldModule,
    DocPermModule,
    DocShareModule,
    DocTypeActionModule,
    DocTypeLayoutFieldModule,
    DocTypeLayoutModule,
    DocTypeLinkModule,
    DocTypeStateModule,
    DocTypeModule,
    DynamicLinkModule,
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
