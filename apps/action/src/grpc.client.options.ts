import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "user",
      "command",
      "conditions",
      "conversationlinetemplate",
      "creaturequeststarter",
      "conversationtemplate",
      "creaturelevelstat",
      "conversationactors",
      "creaturetemplategossip",
      "creaturetemplate",
      "creatureequipment",
      "creaturetemplateaddon",
      "creaturesummoneddata",
      "creature",
      "creaturesummongroups",
      "creaturetemplatelocale",
      "creaturetemplatedifficulty",
      "creaturetemplatespell",
      "creaturetemplatesparring",
      "creaturemodelinfo",
      "creatureonkillreputation",
      "creatureformation",
      "creatureloot",
      "creaturequestcurrency",
      "creaturetemplatemodel",
      "creaturetemplatemovement",
      "creaturequestitem",
      "creaturetextlocale",
      "creaturequestender",
      "creaturetemplateresistance",
      "creaturemovementinfo",
      "creaturetext",
      "creatureimmunity",
      "spell",
      "spelleffect",
      "skilldiscoverytemplate",
      "skillextraitemtemplate",
      "skillfishingbaselevel",
      "skilltiers",
      "skillperfectitemtemplate",
      "smartscripts",
      "skinningloottemplate",
      "serversidespelleffect",
      "serversidespell",
      "spawngroup",
      "spellarea",
      "spawngrouptemplate"
    ],
    protoPath: [
      "src/user/user.proto",
      "src/command/command.proto",
      "src/conditions/conditions.proto",
      "src/conversationlinetemplate/conversationlinetemplate.proto",
      "src/creaturequeststarter/creaturequeststarter.proto",
      "src/conversationtemplate/conversationtemplate.proto",
      "src/creaturelevelstat/creaturelevelstat.proto",
      "src/conversationactors/conversationactors.proto",
      "src/creaturetemplategossip/creaturetemplategossip.proto",
      "src/creaturetemplate/creaturetemplate.proto",
      "src/creatureequipment/creatureequipment.proto",
      "src/creaturetemplateaddon/creaturetemplateaddon.proto",
      "src/creaturesummoneddata/creaturesummoneddata.proto",
      "src/creature/creature.proto",
      "src/creaturesummongroups/creaturesummongroups.proto",
      "src/creaturetemplatelocale/creaturetemplatelocale.proto",
      "src/creaturetemplatedifficulty/creaturetemplatedifficulty.proto",
      "src/creaturetemplatespell/creaturetemplatespell.proto",
      "src/creaturetemplatesparring/creaturetemplatesparring.proto",
      "src/creaturemodelinfo/creaturemodelinfo.proto",
      "src/creatureonkillreputation/creatureonkillreputation.proto",
      "src/creatureformation/creatureformation.proto",
      "src/creatureloot/creatureloot.proto",
      "src/creaturequestcurrency/creaturequestcurrency.proto",
      "src/creaturetemplatemodel/creaturetemplatemodel.proto",
      "src/creaturetemplatemovement/creaturetemplatemovement.proto",
      "src/creaturequestitem/creaturequestitem.proto",
      "src/creaturetextlocale/creaturetextlocale.proto",
      "src/creaturequestender/creaturequestender.proto",
      "src/creaturetemplateresistance/creaturetemplateresistance.proto",
      "src/creaturemovementinfo/creaturemovementinfo.proto",
      "src/creaturetext/creaturetext.proto",
      "src/creatureimmunity/creatureimmunity.proto",
      "src/spell/spell.proto",
      "src/spelleffect/spelleffect.proto",
      "src/skilldiscoverytemplate/skilldiscoverytemplate.proto",
      "src/skillextraitemtemplate/skillextraitemtemplate.proto",
      "src/skillfishingbaselevel/skillfishingbaselevel.proto",
      "src/skilltiers/skilltiers.proto",
      "src/skillperfectitemtemplate/skillperfectitemtemplate.proto",
      "src/smartscripts/smartscripts.proto",
      "src/skinningloottemplate/skinningloottemplate.proto",
      "src/serversidespelleffect/serversidespelleffect.proto",
      "src/serversidespell/serversidespell.proto",
      "src/spawngroup/spawngroup.proto",
      "src/spellarea/spellarea.proto",
      "src/spawngrouptemplate/spawngrouptemplate.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
