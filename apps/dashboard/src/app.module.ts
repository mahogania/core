import { Module } from "@nestjs/common";
import { DashboardChartFieldModule } from "./dashboardChartField/dashboardChartField.module";
import { DashboardChartLinkModule } from "./dashboardChartLink/dashboardChartLink.module";
import { DashboardChartSourceModule } from "./dashboardChartSource/dashboardChartSource.module";
import { DashboardChartModule } from "./dashboardChart/dashboardChart.module";
import { DashboardSettingsModule } from "./dashboardSettings/dashboardSettings.module";
import { DashboardModule } from "./dashboard/dashboard.module";
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
    DashboardChartFieldModule,
    DashboardChartLinkModule,
    DashboardChartSourceModule,
    DashboardChartModule,
    DashboardSettingsModule,
    DashboardModule,
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
