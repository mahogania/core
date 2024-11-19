/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MaintenanceVisitPurposeWhereUniqueInput } from "./MaintenanceVisitPurposeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MaintenanceVisitPurposeUpdateInput } from "./MaintenanceVisitPurposeUpdateInput";

@ArgsType()
class UpdateMaintenanceVisitPurposeArgs {
  @ApiProperty({
    required: true,
    type: () => MaintenanceVisitPurposeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceVisitPurposeWhereUniqueInput)
  @Field(() => MaintenanceVisitPurposeWhereUniqueInput, { nullable: false })
  where!: MaintenanceVisitPurposeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MaintenanceVisitPurposeUpdateInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceVisitPurposeUpdateInput)
  @Field(() => MaintenanceVisitPurposeUpdateInput, { nullable: false })
  data!: MaintenanceVisitPurposeUpdateInput;
}

export { UpdateMaintenanceVisitPurposeArgs as UpdateMaintenanceVisitPurposeArgs };
