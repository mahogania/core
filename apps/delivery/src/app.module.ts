import { Module } from "@nestjs/common";
import { DeliveryNoteItemModule } from "./deliveryNoteItem/deliveryNoteItem.module";
import { DeliveryNoteModule } from "./deliveryNote/deliveryNote.module";
import { DeliveryStopModule } from "./deliveryStop/deliveryStop.module";
import { DeliveryTripModule } from "./deliveryTrip/deliveryTrip.module";
import { DrivingLicenseCategoryModule } from "./drivingLicenseCategory/drivingLicenseCategory.module";
import { DriverModule } from "./driver/driver.module";
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
    DeliveryNoteItemModule,
    DeliveryNoteModule,
    DeliveryStopModule,
    DeliveryTripModule,
    DrivingLicenseCategoryModule,
    DriverModule,
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
