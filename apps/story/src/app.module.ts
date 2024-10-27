import { RedisModule } from "./redis/redis.module";
import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";

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
import { UserModule } from "./user/user.module";
import { AreaQuestTriggerModule } from "./areaQuestTrigger/areaQuestTrigger.module";
import { AreaScenarioTriggerModule } from "./areaScenarioTrigger/areaScenarioTrigger.module";
import { AreaTeleportTriggerModule } from "./areaTeleportTrigger/areaTeleportTrigger.module";
import { PointsOfInterestLocaleModule } from "./pointsOfInterestLocale/pointsOfInterestLocale.module";
import { PointOfInterestModule } from "./pointOfInterest/pointOfInterest.module";
import { QuestRegionModule } from "./questRegion/questRegion.module";
import { QuestRewardItemModule } from "./questRewardItem/questRewardItem.module";
import { PoolMemberModule } from "./poolMember/poolMember.module";
import { PoolModule } from "./pool/pool.module";
import { QuestPoolModule } from "./questPool/questPool.module";
import { QuestTemplateModule } from "./questTemplate/questTemplate.module";
import { QuestRequestItemModule } from "./questRequestItem/questRequestItem.module";
import { QuestRewardSpellModule } from "./questRewardSpell/questRewardSpell.module";
import { QuestDescriptionConditionalModule } from "./questDescriptionConditional/questDescriptionConditional.module";
import { QuestGreetingLocaleModule } from "./questGreetingLocale/questGreetingLocale.module";
import { QuestMailModule } from "./questMail/questMail.module";
import { QuestGreetingModule } from "./questGreeting/questGreeting.module";
import { QuestCompletionConditionalModule } from "./questCompletionConditional/questCompletionConditional.module";
import { QuestRequestItemConditionalModule } from "./questRequestItemConditional/questRequestItemConditional.module";
import { QuestTemplateLocaleModule } from "./questTemplateLocale/questTemplateLocale.module";
import { QuestDetailModule } from "./questDetail/questDetail.module";
import { QuestPoolMemberModule } from "./questPoolMember/questPoolMember.module";
import { QuestCueEffectModule } from "./questCueEffect/questCueEffect.module";
import { QuestPoiModule } from "./questPoi/questPoi.module";
import { QuestObjectiveModule } from "./questObjective/questObjective.module";
import { QuestObjectiveLocaleModule } from "./questObjectiveLocale/questObjectiveLocale.module";
import { QuestRequestItemsLocaleModule } from "./questRequestItemsLocale/questRequestItemsLocale.module";
import { QuestOfferRewardConditionalModule } from "./questOfferRewardConditional/questOfferRewardConditional.module";
import { QuestObjectiveCompletionEffectModule } from "./questObjectiveCompletionEffect/questObjectiveCompletionEffect.module";
import { QuestOfferRewardModule } from "./questOfferReward/questOfferReward.module";
import { QuestOfferRewardLocaleModule } from "./questOfferRewardLocale/questOfferRewardLocale.module";
import { ScenarioPoiModule } from "./scenarioPoi/scenarioPoi.module";
import { ScenarioRegionModule } from "./scenarioRegion/scenarioRegion.module";
import { ScenarioModule } from "./scenario/scenario.module";
import { SceneTemplateModule } from "./sceneTemplate/sceneTemplate.module";
import { AreaModule } from "./area/area.module";
import { PortalModule } from "./portal/portal.module";
import { QuestModule } from "./quest/quest.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

import { LoggerModule } from "./logger/logger.module";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    LoggerModule,
    KafkaModule,
    ACLModule,
    AuthModule,
    UserModule,
    AreaQuestTriggerModule,
    AreaScenarioTriggerModule,
    AreaTeleportTriggerModule,
    PointsOfInterestLocaleModule,
    PointOfInterestModule,
    QuestRegionModule,
    QuestRewardItemModule,
    PoolMemberModule,
    PoolModule,
    QuestPoolModule,
    QuestTemplateModule,
    QuestRequestItemModule,
    QuestRewardSpellModule,
    QuestDescriptionConditionalModule,
    QuestGreetingLocaleModule,
    QuestMailModule,
    QuestGreetingModule,
    QuestCompletionConditionalModule,
    QuestRequestItemConditionalModule,
    QuestTemplateLocaleModule,
    QuestDetailModule,
    QuestPoolMemberModule,
    QuestCueEffectModule,
    QuestPoiModule,
    QuestObjectiveModule,
    QuestObjectiveLocaleModule,
    QuestRequestItemsLocaleModule,
    QuestOfferRewardConditionalModule,
    QuestObjectiveCompletionEffectModule,
    QuestOfferRewardModule,
    QuestOfferRewardLocaleModule,
    ScenarioPoiModule,
    ScenarioRegionModule,
    ScenarioModule,
    SceneTemplateModule,
    AreaModule,
    PortalModule,
    QuestModule,
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
    RedisModule,
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
    OpenTelemetryModule.forRoot({
      serviceName: "Story",
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
  ],
  providers: [],
})
export class AppModule {}
