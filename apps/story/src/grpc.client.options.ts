import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "user",
      "areaquesttrigger",
      "areascenariotrigger",
      "areateleporttrigger",
      "pointsofinterestlocale",
      "pointofinterest",
      "questregion",
      "questrewarditem",
      "poolmember",
      "pool",
      "questpoi",
      "questpool",
      "questtemplate",
      "questrequestitem",
      "questrewardspell",
      "questdescriptionconditional",
      "questgreetinglocale",
      "questmail",
      "questgreeting",
      "questcompletionconditional",
      "questrequestitemconditional",
      "questtemplatelocale",
      "questdetail",
      "questpoolmember",
      "questcueeffect",
      "questobjective",
      "questobjectivelocale",
      "questrequestitemslocale",
      "questofferrewardconditional",
      "questobjectivecompletioneffect",
      "questofferreward",
      "questofferrewardlocale",
      "scenariopoi",
      "scenarioregion",
      "scenario",
      "scenetemplate",
      "area",
      "portal",
      "quest",
      "zone",
      "map",
      "epic"
    ],
    protoPath: [
      "src/user/user.proto",
      "src/areaquesttrigger/areaquesttrigger.proto",
      "src/areascenariotrigger/areascenariotrigger.proto",
      "src/areateleporttrigger/areateleporttrigger.proto",
      "src/pointsofinterestlocale/pointsofinterestlocale.proto",
      "src/pointofinterest/pointofinterest.proto",
      "src/questregion/questregion.proto",
      "src/questrewarditem/questrewarditem.proto",
      "src/poolmember/poolmember.proto",
      "src/pool/pool.proto",
      "src/questpoi/questpoi.proto",
      "src/questpool/questpool.proto",
      "src/questtemplate/questtemplate.proto",
      "src/questrequestitem/questrequestitem.proto",
      "src/questrewardspell/questrewardspell.proto",
      "src/questdescriptionconditional/questdescriptionconditional.proto",
      "src/questgreetinglocale/questgreetinglocale.proto",
      "src/questmail/questmail.proto",
      "src/questgreeting/questgreeting.proto",
      "src/questcompletionconditional/questcompletionconditional.proto",
      "src/questrequestitemconditional/questrequestitemconditional.proto",
      "src/questtemplatelocale/questtemplatelocale.proto",
      "src/questdetail/questdetail.proto",
      "src/questpoolmember/questpoolmember.proto",
      "src/questcueeffect/questcueeffect.proto",
      "src/questobjective/questobjective.proto",
      "src/questobjectivelocale/questobjectivelocale.proto",
      "src/questrequestitemslocale/questrequestitemslocale.proto",
      "src/questofferrewardconditional/questofferrewardconditional.proto",
      "src/questobjectivecompletioneffect/questobjectivecompletioneffect.proto",
      "src/questofferreward/questofferreward.proto",
      "src/questofferrewardlocale/questofferrewardlocale.proto",
      "src/scenariopoi/scenariopoi.proto",
      "src/scenarioregion/scenarioregion.proto",
      "src/scenario/scenario.proto",
      "src/scenetemplate/scenetemplate.proto",
      "src/area/area.proto",
      "src/portal/portal.proto",
      "src/quest/quest.proto",
      "src/zone/zone.proto",
      "src/map/map.proto",
      "src/epic/epic.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
