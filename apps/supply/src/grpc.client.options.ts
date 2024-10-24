import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["warehouse", "location", "locationprofile"],
    protoPath: [
      "src/warehouse/warehouse.proto",
      "src/location/location.proto",
      "src/locationprofile/locationprofile.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
