import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "user",
      "battlepetbreeds",
      "battlepetquality",
      "battlegroundtemplate",
      "battlefieldtemplate",
      "battlemasterentry"
    ],
    protoPath: [
      "src/user/user.proto",
      "src/battlepetbreeds/battlepetbreeds.proto",
      "src/battlepetquality/battlepetquality.proto",
      "src/battlegroundtemplate/battlegroundtemplate.proto",
      "src/battlefieldtemplate/battlefieldtemplate.proto",
      "src/battlemasterentry/battlemasterentry.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
