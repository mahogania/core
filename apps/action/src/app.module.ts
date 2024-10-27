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
import { CommandModule } from "./command/command.module";
import { ConditionsModule } from "./conditions/conditions.module";
import { ConversationLineTemplateModule } from "./conversationLineTemplate/conversationLineTemplate.module";
import { CreatureQuestStarterModule } from "./creatureQuestStarter/creatureQuestStarter.module";
import { ConversationTemplateModule } from "./conversationTemplate/conversationTemplate.module";
import { CreatureLevelStatModule } from "./creatureLevelStat/creatureLevelStat.module";
import { ConversationActorsModule } from "./conversationActors/conversationActors.module";
import { CreatureTemplateGossipModule } from "./creatureTemplateGossip/creatureTemplateGossip.module";
import { CreatureTemplateModule } from "./creatureTemplate/creatureTemplate.module";
import { CreatureEquipmentModule } from "./creatureEquipment/creatureEquipment.module";
import { CreatureTemplateAddonModule } from "./creatureTemplateAddon/creatureTemplateAddon.module";
import { CreatureSummonedDataModule } from "./creatureSummonedData/creatureSummonedData.module";
import { CreatureModule } from "./creature/creature.module";
import { CreatureSummonGroupsModule } from "./creatureSummonGroups/creatureSummonGroups.module";
import { CreatureTemplateLocaleModule } from "./creatureTemplateLocale/creatureTemplateLocale.module";
import { CreatureTemplateDifficultyModule } from "./creatureTemplateDifficulty/creatureTemplateDifficulty.module";
import { CreatureTemplateSpellModule } from "./creatureTemplateSpell/creatureTemplateSpell.module";
import { CreatureTemplateSparringModule } from "./creatureTemplateSparring/creatureTemplateSparring.module";
import { CreatureModelInfoModule } from "./creatureModelInfo/creatureModelInfo.module";
import { CreatureOnKillReputationModule } from "./creatureOnKillReputation/creatureOnKillReputation.module";
import { CreatureFormationModule } from "./creatureFormation/creatureFormation.module";
import { CreatureLootModule } from "./creatureLoot/creatureLoot.module";
import { CreatureQuestCurrencyModule } from "./creatureQuestCurrency/creatureQuestCurrency.module";
import { CreatureTemplateModelModule } from "./creatureTemplateModel/creatureTemplateModel.module";
import { CreatureTemplateMovementModule } from "./creatureTemplateMovement/creatureTemplateMovement.module";
import { CreatureQuestItemModule } from "./creatureQuestItem/creatureQuestItem.module";
import { CreatureTextLocaleModule } from "./creatureTextLocale/creatureTextLocale.module";
import { CreatureQuestEnderModule } from "./creatureQuestEnder/creatureQuestEnder.module";
import { CreatureTemplateResistanceModule } from "./creatureTemplateResistance/creatureTemplateResistance.module";
import { CreatureMovementInfoModule } from "./creatureMovementInfo/creatureMovementInfo.module";
import { CreatureTextModule } from "./creatureText/creatureText.module";
import { CreatureImmunityModule } from "./creatureImmunity/creatureImmunity.module";
import { SpellModule } from "./spell/spell.module";
import { SpellEffectModule } from "./spellEffect/spellEffect.module";
import { SkillDiscoveryTemplateModule } from "./skillDiscoveryTemplate/skillDiscoveryTemplate.module";
import { SkillExtraItemTemplateModule } from "./skillExtraItemTemplate/skillExtraItemTemplate.module";
import { SkillFishingBaseLevelModule } from "./skillFishingBaseLevel/skillFishingBaseLevel.module";
import { SkillTiersModule } from "./skillTiers/skillTiers.module";
import { SkillPerfectItemTemplateModule } from "./skillPerfectItemTemplate/skillPerfectItemTemplate.module";
import { SmartScriptsModule } from "./smartScripts/smartScripts.module";
import { SkinningLootTemplateModule } from "./skinningLootTemplate/skinningLootTemplate.module";
import { ServersideSpellEffectModule } from "./serversideSpellEffect/serversideSpellEffect.module";
import { ServersideSpellModule } from "./serversideSpell/serversideSpell.module";
import { SpawnGroupModule } from "./spawnGroup/spawnGroup.module";
import { SpellAreaModule } from "./spellArea/spellArea.module";
import { SpawnGroupTemplateModule } from "./spawnGroupTemplate/spawnGroupTemplate.module";
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
    CommandModule,
    ConditionsModule,
    ConversationLineTemplateModule,
    CreatureQuestStarterModule,
    ConversationTemplateModule,
    CreatureLevelStatModule,
    ConversationActorsModule,
    CreatureTemplateGossipModule,
    CreatureTemplateModule,
    CreatureEquipmentModule,
    CreatureTemplateAddonModule,
    CreatureSummonedDataModule,
    CreatureModule,
    CreatureSummonGroupsModule,
    CreatureTemplateLocaleModule,
    CreatureTemplateDifficultyModule,
    CreatureTemplateSpellModule,
    CreatureTemplateSparringModule,
    CreatureModelInfoModule,
    CreatureOnKillReputationModule,
    CreatureFormationModule,
    CreatureLootModule,
    CreatureQuestCurrencyModule,
    CreatureTemplateModelModule,
    CreatureTemplateMovementModule,
    CreatureQuestItemModule,
    CreatureTextLocaleModule,
    CreatureQuestEnderModule,
    CreatureTemplateResistanceModule,
    CreatureMovementInfoModule,
    CreatureTextModule,
    CreatureImmunityModule,
    SpellModule,
    SpellEffectModule,
    SkillDiscoveryTemplateModule,
    SkillExtraItemTemplateModule,
    SkillFishingBaseLevelModule,
    SkillTiersModule,
    SkillPerfectItemTemplateModule,
    SmartScriptsModule,
    SkinningLootTemplateModule,
    ServersideSpellEffectModule,
    ServersideSpellModule,
    SpawnGroupModule,
    SpellAreaModule,
    SpawnGroupTemplateModule,
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
      serviceName: "Action",
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
