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
import { DepreciationScheduleWhereUniqueInput } from "./DepreciationScheduleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DepreciationScheduleUpdateInput } from "./DepreciationScheduleUpdateInput";

@ArgsType()
class UpdateDepreciationScheduleArgs {
  @ApiProperty({
    required: true,
    type: () => DepreciationScheduleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DepreciationScheduleWhereUniqueInput)
  @Field(() => DepreciationScheduleWhereUniqueInput, { nullable: false })
  where!: DepreciationScheduleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DepreciationScheduleUpdateInput,
  })
  @ValidateNested()
  @Type(() => DepreciationScheduleUpdateInput)
  @Field(() => DepreciationScheduleUpdateInput, { nullable: false })
  data!: DepreciationScheduleUpdateInput;
}

export { UpdateDepreciationScheduleArgs as UpdateDepreciationScheduleArgs };