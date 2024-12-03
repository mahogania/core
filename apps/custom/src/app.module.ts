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
import { ClearanceDeclarationModule } from "./clearanceDeclaration/clearanceDeclaration.module";
import { TbClreDedPdlsModule } from "./tbClreDedPdls/tbClreDedPdls.module";
import { TbClreDedMdlStszModule } from "./tbClreDedMdlStsz/tbClreDedMdlStsz.module";
import { TbClreDedVlutComnModule } from "./tbClreDedVlutComn/tbClreDedVlutComn.module";
import { TbClreDedVlutPdlsModule } from "./tbClreDedVlutPdls/tbClreDedVlutPdls.module";
import { TbClreDedCntrModule } from "./tbClreDedCntr/tbClreDedCntr.module";
import { TbClreDedCoModule } from "./tbClreDedCo/tbClreDedCo.module";
import { TbClreDedMgModule } from "./tbClreDedMg/tbClreDedMg.module";
import { TbClreDedPrcDclrModule } from "./tbClreDedPrcDclr/tbClreDedPrcDclr.module";
import { TbClreDedPrcDclrPdlsModule } from "./tbClreDedPrcDclrPdls/tbClreDedPrcDclrPdls.module";
import { TbClreDedRwmsModule } from "./tbClreDedRwms/tbClreDedRwms.module";
import { TbClreDedTaxModule } from "./tbClreDedTax/tbClreDedTax.module";
import { TbClreDedVhclModule } from "./tbClreDedVhcl/tbClreDedVhcl.module";
import { TbClreDedRimexPrngPdlsModule } from "./tbClreDedRimexPrngPdls/tbClreDedRimexPrngPdls.module";
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
    ClearanceDeclarationModule,
    TbClreDedPdlsModule,
    TbClreDedMdlStszModule,
    TbClreDedVlutComnModule,
    TbClreDedVlutPdlsModule,
    TbClreDedCntrModule,
    TbClreDedCoModule,
    TbClreDedMgModule,
    TbClreDedPrcDclrModule,
    TbClreDedPrcDclrPdlsModule,
    TbClreDedRwmsModule,
    TbClreDedTaxModule,
    TbClreDedVhclModule,
    TbClreDedRimexPrngPdlsModule,
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
