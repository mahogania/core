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
import { AreaTriggerCreatePropertyModule } from "./areaTriggerCreateProperty/areaTriggerCreateProperty.module";
import { AreaTriggerCreatePropertiesOrbitModule } from "./areaTriggerCreatePropertiesOrbit/areaTriggerCreatePropertiesOrbit.module";
import { AreaTriggerCreatePropertiesPolygonVertexModule } from "./areaTriggerCreatePropertiesPolygonVertex/areaTriggerCreatePropertiesPolygonVertex.module";
import { AreaTriggerCreatePropertiesSplinePointModule } from "./areaTriggerCreatePropertiesSplinePoint/areaTriggerCreatePropertiesSplinePoint.module";
import { AreaTriggerInvolvedRelationModule } from "./areaTriggerInvolvedRelation/areaTriggerInvolvedRelation.module";
import { AreaTriggerScriptModule } from "./areaTriggerScript/areaTriggerScript.module";
import { AreaTriggerTavernModule } from "./areaTriggerTavern/areaTriggerTavern.module";
import { AreaTriggerTeleportModule } from "./areaTriggerTeleport/areaTriggerTeleport.module";
import { AreaTriggerTemplateModule } from "./areaTriggerTemplate/areaTriggerTemplate.module";
import { AreaTriggerTemplateActionModule } from "./areaTriggerTemplateAction/areaTriggerTemplateAction.module";
import { PointsOfInterestLocaleModule } from "./pointsOfInterestLocale/pointsOfInterestLocale.module";
import { PointsOfInterestModule } from "./pointsOfInterest/pointsOfInterest.module";
import { PoolMembersModule } from "./poolMembers/poolMembers.module";
import { PoolTemplateModule } from "./poolTemplate/poolTemplate.module";
import { QuestPoiModule } from "./questPoi/questPoi.module";
import { QuestRewardChoiceItemsModule } from "./questRewardChoiceItems/questRewardChoiceItems.module";
import { ProspectingLootTemplateModule } from "./prospectingLootTemplate/prospectingLootTemplate.module";
import { QuestPoolMembersModule } from "./questPoolMembers/questPoolMembers.module";
import { QuestDetailsModule } from "./questDetails/questDetails.module";
import { QuestTemplateModule } from "./questTemplate/questTemplate.module";
import { QuestTemplateAddonModule } from "./questTemplateAddon/questTemplateAddon.module";
import { QuestMailSenderModule } from "./questMailSender/questMailSender.module";
import { QuestRequestItemsModule } from "./questRequestItems/questRequestItems.module";
import { QuestGreetingLocaleModule } from "./questGreetingLocale/questGreetingLocale.module";
import { QuestPoiPointsModule } from "./questPoiPoints/questPoiPoints.module";
import { QuestRewardDisplaySpellModule } from "./questRewardDisplaySpell/questRewardDisplaySpell.module";
import { QuestTemplateLocaleModule } from "./questTemplateLocale/questTemplateLocale.module";
import { QuestCompletionLogConditionalModule } from "./questCompletionLogConditional/questCompletionLogConditional.module";
import { QuestPoolTemplateModule } from "./questPoolTemplate/questPoolTemplate.module";
import { QuestDescriptionConditionalModule } from "./questDescriptionConditional/questDescriptionConditional.module";
import { QuestRequestItemsConditionalModule } from "./questRequestItemsConditional/questRequestItemsConditional.module";
import { QuestVisualEffectModule } from "./questVisualEffect/questVisualEffect.module";
import { QuestGreetingModule } from "./questGreeting/questGreeting.module";
import { QuestOfferRewardConditionalModule } from "./questOfferRewardConditional/questOfferRewardConditional.module";
import { QuestObjectivesLocaleModule } from "./questObjectivesLocale/questObjectivesLocale.module";
import { QuestObjectivesModule } from "./questObjectives/questObjectives.module";
import { QuestOfferRewardModule } from "./questOfferReward/questOfferReward.module";
import { QuestOfferRewardLocaleModule } from "./questOfferRewardLocale/questOfferRewardLocale.module";
import { QuestObjectivesCompletionEffectModule } from "./questObjectivesCompletionEffect/questObjectivesCompletionEffect.module";
import { QuestRequestItemsLocaleModule } from "./questRequestItemsLocale/questRequestItemsLocale.module";
import { ScenarioPoiPointsModule } from "./scenarioPoiPoints/scenarioPoiPoints.module";
import { ScenarioPoiModule } from "./scenarioPoi/scenarioPoi.module";
import { ScenariosModule } from "./scenarios/scenarios.module";
import { SceneTemplateModule } from "./sceneTemplate/sceneTemplate.module";
import { ScriptSplineChainWaypointsModule } from "./scriptSplineChainWaypoints/scriptSplineChainWaypoints.module";
import { ScriptSplineChainMetaModule } from "./scriptSplineChainMeta/scriptSplineChainMeta.module";
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
    AreaTriggerCreatePropertyModule,
    AreaTriggerCreatePropertiesOrbitModule,
    AreaTriggerCreatePropertiesPolygonVertexModule,
    AreaTriggerCreatePropertiesSplinePointModule,
    AreaTriggerInvolvedRelationModule,
    AreaTriggerScriptModule,
    AreaTriggerTavernModule,
    AreaTriggerTeleportModule,
    AreaTriggerTemplateModule,
    AreaTriggerTemplateActionModule,
    PointsOfInterestLocaleModule,
    PointsOfInterestModule,
    PoolMembersModule,
    PoolTemplateModule,
    QuestPoiModule,
    QuestRewardChoiceItemsModule,
    ProspectingLootTemplateModule,
    QuestPoolMembersModule,
    QuestDetailsModule,
    QuestTemplateModule,
    QuestTemplateAddonModule,
    QuestMailSenderModule,
    QuestRequestItemsModule,
    QuestGreetingLocaleModule,
    QuestPoiPointsModule,
    QuestRewardDisplaySpellModule,
    QuestTemplateLocaleModule,
    QuestCompletionLogConditionalModule,
    QuestPoolTemplateModule,
    QuestDescriptionConditionalModule,
    QuestRequestItemsConditionalModule,
    QuestVisualEffectModule,
    QuestGreetingModule,
    QuestOfferRewardConditionalModule,
    QuestObjectivesLocaleModule,
    QuestObjectivesModule,
    QuestOfferRewardModule,
    QuestOfferRewardLocaleModule,
    QuestObjectivesCompletionEffectModule,
    QuestRequestItemsLocaleModule,
    ScenarioPoiPointsModule,
    ScenarioPoiModule,
    ScenariosModule,
    SceneTemplateModule,
    ScriptSplineChainWaypointsModule,
    ScriptSplineChainMetaModule,
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
      serviceName: "Area",
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
