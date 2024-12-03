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
import { AchievementModule } from "./achievement/achievement.module";
import { AchievementRewardModule } from "./achievementReward/achievementReward.module";
import { AchievementRewardLocaleModule } from "./achievementRewardLocale/achievementRewardLocale.module";
import { AchievementBehaviourModule } from "./achievementBehaviour/achievementBehaviour.module";
import { GameObjectQuestItemModule } from "./gameObjectQuestItem/gameObjectQuestItem.module";
import { ExplorationBasexpModule } from "./explorationBasexp/explorationBasexp.module";
import { GameEventModule } from "./gameEvent/gameEvent.module";
import { GameObjectTemplateAddonModule } from "./gameObjectTemplateAddon/gameObjectTemplateAddon.module";
import { GameObjectTemplateModule } from "./gameObjectTemplate/gameObjectTemplate.module";
import { GameObjectAddonModule } from "./gameObjectAddon/gameObjectAddon.module";
import { GameObjectModule } from "./gameObject/gameObject.module";
import { GameObjectQuestStarterModule } from "./gameObjectQuestStarter/gameObjectQuestStarter.module";
import { LootTemplateModule } from "./lootTemplate/lootTemplate.module";
import { GameObjectQuestEnderModule } from "./gameObjectQuestEnder/gameObjectQuestEnder.module";
import { GameObjectTemplateLocaleModule } from "./gameObjectTemplateLocale/gameObjectTemplateLocale.module";
import { GameEventModelEquipModule } from "./gameEventModelEquip/gameEventModelEquip.module";
import { GameEventGameObjectModule } from "./gameEventGameObject/gameEventGameObject.module";
import { GameEventQuestModule } from "./gameEventQuest/gameEventQuest.module";
import { GameEventCharacterModule } from "./gameEventCharacter/gameEventCharacter.module";
import { GameObjectOverridesModule } from "./gameObjectOverrides/gameObjectOverrides.module";
import { GameEventConditionModule } from "./gameEventCondition/gameEventCondition.module";
import { GameEventCreatureModule } from "./gameEventCreature/gameEventCreature.module";
import { GameObjectLootTemplateModule } from "./gameObjectLootTemplate/gameObjectLootTemplate.module";
import { MillingLootTemplateModule } from "./millingLootTemplate/millingLootTemplate.module";
import { MailLootTemplateModule } from "./mailLootTemplate/mailLootTemplate.module";
import { GraveyardZoneModule } from "./graveyardZone/graveyardZone.module";
import { ItemRandomBonusListTemplateModule } from "./itemRandomBonusListTemplate/itemRandomBonusListTemplate.module";
import { JumpChargeParamsModule } from "./jumpChargeParams/jumpChargeParams.module";
import { ItemTemplateAddonModule } from "./itemTemplateAddon/itemTemplateAddon.module";
import { LinkedRespawnModule } from "./linkedRespawn/linkedRespawn.module";
import { ItemBehaviourModule } from "./itemBehaviour/itemBehaviour.module";
import { InstanceTemplateModule } from "./instanceTemplate/instanceTemplate.module";
import { ItemTemplateModule } from "./itemTemplate/itemTemplate.module";
import { MountDefinitionsModule } from "./mountDefinitions/mountDefinitions.module";
import { InstanceSpawnGroupsModule } from "./instanceSpawnGroups/instanceSpawnGroups.module";
import { CharacterSpellModule } from "./characterSpell/characterSpell.module";
import { CharacterDialogueModule } from "./characterDialogue/characterDialogue.module";
import { CharacterModule } from "./character/character.module";
import { ParagraphLocaleModule } from "./paragraphLocale/paragraphLocale.module";
import { PetNameGenerationModule } from "./petNameGeneration/petNameGeneration.module";
import { ParagraphModule } from "./paragraph/paragraph.module";
import { PetLevelstatsModule } from "./petLevelstats/petLevelstats.module";
import { PlayerFactionAchievementModule } from "./playerFactionAchievement/playerFactionAchievement.module";
import { CraftLevelStatModule } from "./craftLevelStat/craftLevelStat.module";
import { PlayerFactionQuestModule } from "./playerFactionQuest/playerFactionQuest.module";
import { PlayerRewardModule } from "./playerReward/playerReward.module";
import { PlayerFactionReputationModule } from "./playerFactionReputation/playerFactionReputation.module";
import { PlayerFactionSpellModule } from "./playerFactionSpell/playerFactionSpell.module";
import { ResponseModule } from "./response/response.module";
import { GeneStatModule } from "./geneStat/geneStat.module";
import { PlayerFactionTitleModule } from "./playerFactionTitle/playerFactionTitle.module";
import { ResponseLocaleModule } from "./responseLocale/responseLocale.module";
import { ChoiceModule } from "./choice/choice.module";
import { PlayerXpForLevelModule } from "./playerXpForLevel/playerXpForLevel.module";
import { PlayerRewardItemModule } from "./playerRewardItem/playerRewardItem.module";
import { CurrencyModule } from "./currency/currency.module";
import { ChoiceLocaleModule } from "./choiceLocale/choiceLocale.module";
import { FactionModule } from "./faction/faction.module";
import { PlayerModule } from "./player/player.module";
import { CraftModule } from "./craft/craft.module";
import { PlayerCraftModule } from "./playerCraft/playerCraft.module";
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
    AchievementModule,
    AchievementRewardModule,
    AchievementRewardLocaleModule,
    AchievementBehaviourModule,
    GameObjectQuestItemModule,
    ExplorationBasexpModule,
    GameEventModule,
    GameObjectTemplateAddonModule,
    GameObjectTemplateModule,
    GameObjectAddonModule,
    GameObjectModule,
    GameObjectQuestStarterModule,
    LootTemplateModule,
    GameObjectQuestEnderModule,
    GameObjectTemplateLocaleModule,
    GameEventModelEquipModule,
    GameEventGameObjectModule,
    GameEventQuestModule,
    GameEventCharacterModule,
    GameObjectOverridesModule,
    GameEventConditionModule,
    GameEventCreatureModule,
    GameObjectLootTemplateModule,
    MillingLootTemplateModule,
    MailLootTemplateModule,
    GraveyardZoneModule,
    ItemRandomBonusListTemplateModule,
    JumpChargeParamsModule,
    ItemTemplateAddonModule,
    LinkedRespawnModule,
    ItemBehaviourModule,
    InstanceTemplateModule,
    ItemTemplateModule,
    MountDefinitionsModule,
    InstanceSpawnGroupsModule,
    CharacterSpellModule,
    CharacterDialogueModule,
    CharacterModule,
    ParagraphLocaleModule,
    PetNameGenerationModule,
    ParagraphModule,
    PetLevelstatsModule,
    PlayerFactionAchievementModule,
    CraftLevelStatModule,
    PlayerFactionQuestModule,
    PlayerRewardModule,
    PlayerFactionReputationModule,
    PlayerFactionSpellModule,
    ResponseModule,
    GeneStatModule,
    PlayerFactionTitleModule,
    ResponseLocaleModule,
    ChoiceModule,
    PlayerXpForLevelModule,
    PlayerRewardItemModule,
    CurrencyModule,
    ChoiceLocaleModule,
    FactionModule,
    PlayerModule,
    CraftModule,
    PlayerCraftModule,
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
      serviceName: "World",
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
