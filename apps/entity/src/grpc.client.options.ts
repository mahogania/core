import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "entity",
      "association",
      "trait",
      "processor",
      "template",
      "command",
      "fragment",
      "view",
      "realm",
      "world",
      "attribute",
      "user",
      "representation",
      "agent"
    ],
    protoPath: [
      "src/entity/entity.proto",
      "src/association/association.proto",
      "src/trait/trait.proto",
      "src/processor/processor.proto",
      "src/template/template.proto",
      "src/command/command.proto",
      "src/fragment/fragment.proto",
      "src/view/view.proto",
      "src/realm/realm.proto",
      "src/world/world.proto",
      "src/attribute/attribute.proto",
      "src/user/user.proto",
      "src/representation/representation.proto",
      "src/agent/agent.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
