import { Module } from "@nestjs/common";

import {
  OpenTelemetryModule,
  PipeInjector,
  ControllerInjector,
  EventEmitterInjector,
  GraphQLResolverInjector,
  GuardInjector,
} from "@amplication/opentelemetry-nestjs";

import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";
import { RedisModule } from "./redis/redis.module";
import { ClreDedComnModule } from "./clreDedComn/clreDedComn.module";
import { ClreDedPdlsModule } from "./clreDedPdls/clreDedPdls.module";
import { ClreDedMdlStszModule } from "./clreDedMdlStsz/clreDedMdlStsz.module";
import { ClreDedVlutComnModule } from "./clreDedVlutComn/clreDedVlutComn.module";
import { ClreDedVlutPdlModule } from "./clreDedVlutPdl/clreDedVlutPdl.module";
import { ClreDedCntrModule } from "./clreDedCntr/clreDedCntr.module";
import { ClreDedCoModule } from "./clreDedCo/clreDedCo.module";
import { ClreDedMgModule } from "./clreDedMg/clreDedMg.module";
import { ClreDedPrcDclrModule } from "./clreDedPrcDclr/clreDedPrcDclr.module";
import { ClreDedPrcDclrPdlModule } from "./clreDedPrcDclrPdl/clreDedPrcDclrPdl.module";
import { ClreDedRwmModule } from "./clreDedRwm/clreDedRwm.module";
import { ClreDedTaxModule } from "./clreDedTax/clreDedTax.module";
import { ClreDedVhclModule } from "./clreDedVhcl/clreDedVhcl.module";
import { ClreDedRimexPrngPdlModule } from "./clreDedRimexPrngPdl/clreDedRimexPrngPdl.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./redis/kafka.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { LoggerModule } from "./logger/logger.module";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    KafkaModule,
    LoggerModule,
    ClreDedComnModule,
    ClreDedPdlsModule,
    ClreDedMdlStszModule,
    ClreDedVlutComnModule,
    ClreDedVlutPdlModule,
    ClreDedCntrModule,
    ClreDedCoModule,
    ClreDedMgModule,
    ClreDedPrcDclrModule,
    ClreDedPrcDclrPdlModule,
    ClreDedRwmModule,
    ClreDedTaxModule,
    ClreDedVhclModule,
    ClreDedRimexPrngPdlModule,
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
    OpenTelemetryModule.forRoot({
      serviceName: "Custom",
      spanProcessor: new BatchSpanProcessor(new OTLPTraceExporter()),
      instrumentations: [
        new HttpInstrumentation({
          requestHook: (span, request) => {
            if (request.method)
              span.setAttribute("http.method", request.method);
          },
        }),
      ],

      traceAutoInjectors: [
        ControllerInjector,
        EventEmitterInjector,
        GraphQLResolverInjector,
        GuardInjector,
        PipeInjector,
      ],
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],

      useFactory: async (configService: ConfigService) => {
        const host = configService.get("REDIS_HOST");
        const port = configService.get("REDIS_PORT");
        const username = configService.get("REDIS_USERNAME");
        const password = configService.get("REDIS_PASSWORD");
        const ttl = configService.get("REDIS_TTL", 5000);

        return {
          store: await redisStore({
            host: host,
            port: port,
            username: username,
            password: password,
            ttl: ttl,
          }),
        };
      },

      inject: [ConfigService],
    }),
    RedisModule,
  ],
  providers: [],
})
export class AppModule {}
