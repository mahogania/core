import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "employeeeducation",
      "employeeexternalworkhistory",
      "employeegrouptable",
      "employeegroup",
      "employeeinternalworkhistory",
      "employee",
      "holidaylist",
      "holiday",
      "jobcarditem",
      "jobcardoperation",
      "jobcardscheduledtime",
      "jobcard"
    ],
    protoPath: [
      "src/employeeeducation/employeeeducation.proto",
      "src/employeeexternalworkhistory/employeeexternalworkhistory.proto",
      "src/employeegrouptable/employeegrouptable.proto",
      "src/employeegroup/employeegroup.proto",
      "src/employeeinternalworkhistory/employeeinternalworkhistory.proto",
      "src/employee/employee.proto",
      "src/holidaylist/holidaylist.proto",
      "src/holiday/holiday.proto",
      "src/jobcarditem/jobcarditem.proto",
      "src/jobcardoperation/jobcardoperation.proto",
      "src/jobcardscheduledtime/jobcardscheduledtime.proto",
      "src/jobcard/jobcard.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
