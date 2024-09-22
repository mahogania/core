import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MicroserviceOptions } from "@nestjs/microservices";
import { generateRedisClientOptions } from "./redis/generateRedisClientOptions";
import { generateKafkaClientOptions } from "./kafka/generateKafkaClientOptions";
import { grpcClientOptions } from "./grpc.client.options";

export async function connectMicroservices(app: INestApplication) {
  const configService = app.get(ConfigService);
  app.connectMicroservice<MicroserviceOptions>(generateRedisClientOptions(configService));
  app.connectMicroservice<MicroserviceOptions>(generateKafkaClientOptions(configService));
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
}
