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
import { AccessRequirementModule } from "./accessRequirement/accessRequirement.module";
import { AchievementRewardModule } from "./achievementReward/achievementReward.module";
import { AchievementRewardLocaleModule } from "./achievementRewardLocale/achievementRewardLocale.module";
import { AchievementScriptsModule } from "./achievementScripts/achievementScripts.module";
import { DisenchantLootTemplateModule } from "./disenchantLootTemplate/disenchantLootTemplate.module";
import { EventScriptNamesModule } from "./eventScriptNames/eventScriptNames.module";
import { GameEventModule } from "./gameEvent/gameEvent.module";
import { GameWeatherModule } from "./gameWeather/gameWeather.module";
import { GameObjectModule } from "./gameObject/gameObject.module";
import { ExplorationBasexpModule } from "./explorationBasexp/explorationBasexp.module";
import { EventScriptsModule } from "./eventScripts/eventScripts.module";
import { GameObjectQuestItemModule } from "./gameObjectQuestItem/gameObjectQuestItem.module";
import { GameObjectTemplateModule } from "./gameObjectTemplate/gameObjectTemplate.module";
import { GameEventQuestConditionModule } from "./gameEventQuestCondition/gameEventQuestCondition.module";
import { GameObjectTemplateAddonModule } from "./gameObjectTemplateAddon/gameObjectTemplateAddon.module";
import { GameObjectQuestStarterModule } from "./gameObjectQuestStarter/gameObjectQuestStarter.module";
import { GameEventSeasonalQuestRelationModule } from "./gameEventSeasonalQuestRelation/gameEventSeasonalQuestRelation.module";
import { FishingLootTemplateModule } from "./fishingLootTemplate/fishingLootTemplate.module";
import { GameObjectAddonModule } from "./gameObjectAddon/gameObjectAddon.module";
import { GameTeleModule } from "./gameTele/gameTele.module";
import { GameEventCreatureModule } from "./gameEventCreature/gameEventCreature.module";
import { GameEventGameObjectModule } from "./gameEventGameObject/gameEventGameObject.module";
import { GameEventPrerequisiteModule } from "./gameEventPrerequisite/gameEventPrerequisite.module";
import { GameEventConditionModule } from "./gameEventCondition/gameEventCondition.module";
import { GameObjectLootTemplateModule } from "./gameObjectLootTemplate/gameObjectLootTemplate.module";
import { GameEventPoolModule } from "./gameEventPool/gameEventPool.module";
import { GameEventCreatureQuestModule } from "./gameEventCreatureQuest/gameEventCreatureQuest.module";
import { GameEventNpcVendorModule } from "./gameEventNpcVendor/gameEventNpcVendor.module";
import { GameEventArenaSeasonsModule } from "./gameEventArenaSeasons/gameEventArenaSeasons.module";
import { GameObjectOverridesModule } from "./gameObjectOverrides/gameObjectOverrides.module";
import { GameEventNpcFlagModule } from "./gameEventNpcFlag/gameEventNpcFlag.module";
import { GameObjectTemplateLocaleModule } from "./gameObjectTemplateLocale/gameObjectTemplateLocale.module";
import { GameEventModelEquipModule } from "./gameEventModelEquip/gameEventModelEquip.module";
import { GameObjectQuestEnderModule } from "./gameObjectQuestEnder/gameObjectQuestEnder.module";
import { GameEventGameObjectQuestModule } from "./gameEventGameObjectQuest/gameEventGameObjectQuest.module";
import { GossipMenuOptionLocaleModule } from "./gossipMenuOptionLocale/gossipMenuOptionLocale.module";
import { GossipMenuOptionModule } from "./gossipMenuOption/gossipMenuOption.module";
import { GuildRewardsModule } from "./guildRewards/guildRewards.module";
import { LfgDungeonRewardsModule } from "./lfgDungeonRewards/lfgDungeonRewards.module";
import { MailLootTemplateModule } from "./mailLootTemplate/mailLootTemplate.module";
import { MillingLootTemplateModule } from "./millingLootTemplate/millingLootTemplate.module";
import { GraveyardZoneModule } from "./graveyardZone/graveyardZone.module";
import { LfgDungeonTemplateModule } from "./lfgDungeonTemplate/lfgDungeonTemplate.module";
import { GuildRewardsReqAchievementsModule } from "./guildRewardsReqAchievements/guildRewardsReqAchievements.module";
import { MailLevelRewardModule } from "./mailLevelReward/mailLevelReward.module";
import { JumpChargeParamsModule } from "./jumpChargeParams/jumpChargeParams.module";
import { InstanceTemplateModule } from "./instanceTemplate/instanceTemplate.module";
import { ItemTemplateAddonModule } from "./itemTemplateAddon/itemTemplateAddon.module";
import { ItemRandomBonusListTemplateModule } from "./itemRandomBonusListTemplate/itemRandomBonusListTemplate.module";
import { ItemLootTemplateModule } from "./itemLootTemplate/itemLootTemplate.module";
import { LinkedRespawnModule } from "./linkedRespawn/linkedRespawn.module";
import { MountDefinitionsModule } from "./mountDefinitions/mountDefinitions.module";
import { InstanceSpawnGroupsModule } from "./instanceSpawnGroups/instanceSpawnGroups.module";
import { ItemScriptNamesModule } from "./itemScriptNames/itemScriptNames.module";
import { NpcTextModule } from "./npcText/npcText.module";
import { NpcSpellclickSpellsModule } from "./npcSpellclickSpells/npcSpellclickSpells.module";
import { PageTextLocaleModule } from "./pageTextLocale/pageTextLocale.module";
import { NpcVendorModule } from "./npcVendor/npcVendor.module";
import { PhaseNameModule } from "./phaseName/phaseName.module";
import { OutdoorpvpTemplateModule } from "./outdoorpvpTemplate/outdoorpvpTemplate.module";
import { PhaseAreaModule } from "./phaseArea/phaseArea.module";
import { PetNameGenerationModule } from "./petNameGeneration/petNameGeneration.module";
import { PageTextModule } from "./pageText/pageText.module";
import { PetLevelstatsModule } from "./petLevelstats/petLevelstats.module";
import { PlayerClasslevelstatsModule } from "./playerClasslevelstats/playerClasslevelstats.module";
import { PlayerFactionchangeAchievementModule } from "./playerFactionchangeAchievement/playerFactionchangeAchievement.module";
import { PlayerchoiceResponseRewardModule } from "./playerchoiceResponseReward/playerchoiceResponseReward.module";
import { PlayerFactionchangeQuestsModule } from "./playerFactionchangeQuests/playerFactionchangeQuests.module";
import { PlayerFactionchangeSpellsModule } from "./playerFactionchangeSpells/playerFactionchangeSpells.module";
import { PlayercreateinfoActionModule } from "./playercreateinfoAction/playercreateinfoAction.module";
import { PlayerFactionchangeReputationsModule } from "./playerFactionchangeReputations/playerFactionchangeReputations.module";
import { PlayercreateinfoCastSpellModule } from "./playercreateinfoCastSpell/playercreateinfoCastSpell.module";
import { PlayercreateinfoItemModule } from "./playercreateinfoItem/playercreateinfoItem.module";
import { PlayerXpForLevelModule } from "./playerXpForLevel/playerXpForLevel.module";
import { PlayerchoiceModule } from "./playerchoice/playerchoice.module";
import { PlayerchoiceResponseRewardItemChoiceModule } from "./playerchoiceResponseRewardItemChoice/playerchoiceResponseRewardItemChoice.module";
import { PlayerchoiceLocaleModule } from "./playerchoiceLocale/playerchoiceLocale.module";
import { PlayerchoiceResponseRewardFactionModule } from "./playerchoiceResponseRewardFaction/playerchoiceResponseRewardFaction.module";
import { PlayerchoiceResponseLocaleModule } from "./playerchoiceResponseLocale/playerchoiceResponseLocale.module";
import { PlayercreateinfoSpellCustomModule } from "./playercreateinfoSpellCustom/playercreateinfoSpellCustom.module";
import { PlayerchoiceResponseRewardItemModule } from "./playerchoiceResponseRewardItem/playerchoiceResponseRewardItem.module";
import { PlayerRacestatsModule } from "./playerRacestats/playerRacestats.module";
import { PlayerFactionchangeTitlesModule } from "./playerFactionchangeTitles/playerFactionchangeTitles.module";
import { PlayerchoiceResponseModule } from "./playerchoiceResponse/playerchoiceResponse.module";
import { PlayerchoiceResponseRewardCurrencyModule } from "./playerchoiceResponseRewardCurrency/playerchoiceResponseRewardCurrency.module";
import { PlayerchoiceResponseMawPowerModule } from "./playerchoiceResponseMawPower/playerchoiceResponseMawPower.module";
import { PlayercreateinfoModule } from "./playercreateinfo/playercreateinfo.module";
import { ZoneModule } from "./zone/zone.module";
import { MapModule } from "./map/map.module";
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
    AccessRequirementModule,
    AchievementRewardModule,
    AchievementRewardLocaleModule,
    AchievementScriptsModule,
    DisenchantLootTemplateModule,
    EventScriptNamesModule,
    GameEventModule,
    GameWeatherModule,
    GameObjectModule,
    ExplorationBasexpModule,
    EventScriptsModule,
    GameObjectQuestItemModule,
    GameObjectTemplateModule,
    GameEventQuestConditionModule,
    GameObjectTemplateAddonModule,
    GameObjectQuestStarterModule,
    GameEventSeasonalQuestRelationModule,
    FishingLootTemplateModule,
    GameObjectAddonModule,
    GameTeleModule,
    GameEventCreatureModule,
    GameEventGameObjectModule,
    GameEventPrerequisiteModule,
    GameEventConditionModule,
    GameObjectLootTemplateModule,
    GameEventPoolModule,
    GameEventCreatureQuestModule,
    GameEventNpcVendorModule,
    GameEventArenaSeasonsModule,
    GameObjectOverridesModule,
    GameEventNpcFlagModule,
    GameObjectTemplateLocaleModule,
    GameEventModelEquipModule,
    GameObjectQuestEnderModule,
    GameEventGameObjectQuestModule,
    GossipMenuOptionLocaleModule,
    GossipMenuOptionModule,
    GuildRewardsModule,
    LfgDungeonRewardsModule,
    MailLootTemplateModule,
    MillingLootTemplateModule,
    GraveyardZoneModule,
    LfgDungeonTemplateModule,
    GuildRewardsReqAchievementsModule,
    MailLevelRewardModule,
    JumpChargeParamsModule,
    InstanceTemplateModule,
    ItemTemplateAddonModule,
    ItemRandomBonusListTemplateModule,
    ItemLootTemplateModule,
    LinkedRespawnModule,
    MountDefinitionsModule,
    InstanceSpawnGroupsModule,
    ItemScriptNamesModule,
    NpcTextModule,
    NpcSpellclickSpellsModule,
    PageTextLocaleModule,
    NpcVendorModule,
    PhaseNameModule,
    OutdoorpvpTemplateModule,
    PhaseAreaModule,
    PetNameGenerationModule,
    PageTextModule,
    PetLevelstatsModule,
    PlayerClasslevelstatsModule,
    PlayerFactionchangeAchievementModule,
    PlayerchoiceResponseRewardModule,
    PlayerFactionchangeQuestsModule,
    PlayerFactionchangeSpellsModule,
    PlayercreateinfoActionModule,
    PlayerFactionchangeReputationsModule,
    PlayercreateinfoCastSpellModule,
    PlayercreateinfoItemModule,
    PlayerXpForLevelModule,
    PlayerchoiceModule,
    PlayerchoiceResponseRewardItemChoiceModule,
    PlayerchoiceLocaleModule,
    PlayerchoiceResponseRewardFactionModule,
    PlayerchoiceResponseLocaleModule,
    PlayercreateinfoSpellCustomModule,
    PlayerchoiceResponseRewardItemModule,
    PlayerRacestatsModule,
    PlayerFactionchangeTitlesModule,
    PlayerchoiceResponseModule,
    PlayerchoiceResponseRewardCurrencyModule,
    PlayerchoiceResponseMawPowerModule,
    PlayercreateinfoModule,
    ZoneModule,
    MapModule,
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
