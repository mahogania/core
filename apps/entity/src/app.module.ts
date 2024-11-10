import { Module } from "@nestjs/common";
import { EntityModule } from "./entity/entity.module";
import { AssociationModule } from "./association/association.module";
import { TraitModule } from "./trait/trait.module";
import { ProcessorModule } from "./processor/processor.module";
import { TemplateModule } from "./template/template.module";
import { CommandModule } from "./command/command.module";
import { FragmentModule } from "./fragment/fragment.module";
import { ViewModule } from "./view/view.module";
import { RealmModule } from "./realm/realm.module";
import { WorldModule } from "./world/world.module";
import { AttributeModule } from "./attribute/attribute.module";
import { UserModule } from "./user/user.module";
import { RepresentationModule } from "./representation/representation.module";
import { AgentModule } from "./agent/agent.module";
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
    EntityModule,
    AssociationModule,
    TraitModule,
    ProcessorModule,
    TemplateModule,
    CommandModule,
    FragmentModule,
    ViewModule,
    RealmModule,
    WorldModule,
    AttributeModule,
    UserModule,
    RepresentationModule,
    AgentModule,
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
