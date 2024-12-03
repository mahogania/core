import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "cargodeclaration",
      "cargodeclarationcontainer",
      "cargodeclarationtrailer",
      "cargodeclarationvehicle",
      "cargodeclarationtransport"
    ],
    protoPath: [
      "src/cargodeclaration/cargodeclaration.proto",
      "src/cargodeclarationcontainer/cargodeclarationcontainer.proto",
      "src/cargodeclarationtrailer/cargodeclarationtrailer.proto",
      "src/cargodeclarationvehicle/cargodeclarationvehicle.proto",
      "src/cargodeclarationtransport/cargodeclarationtransport.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
