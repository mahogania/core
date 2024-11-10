import { Module } from "@nestjs/common";
import { EmployeeEducationModule } from "./employeeEducation/employeeEducation.module";
import { EmployeeExternalWorkHistoryModule } from "./employeeExternalWorkHistory/employeeExternalWorkHistory.module";
import { EmployeeGroupTableModule } from "./employeeGroupTable/employeeGroupTable.module";
import { EmployeeGroupModule } from "./employeeGroup/employeeGroup.module";
import { EmployeeInternalWorkHistoryModule } from "./employeeInternalWorkHistory/employeeInternalWorkHistory.module";
import { EmployeeModule } from "./employee/employee.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { NatsModule } from "./nats/nats.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    NatsModule,
    EmployeeEducationModule,
    EmployeeExternalWorkHistoryModule,
    EmployeeGroupTableModule,
    EmployeeGroupModule,
    EmployeeInternalWorkHistoryModule,
    EmployeeModule,
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
