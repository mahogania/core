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
import { HolidayListWhereUniqueInput } from "./HolidayListWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { HolidayListUpdateInput } from "./HolidayListUpdateInput";

@ArgsType()
class UpdateHolidayListArgs {
  @ApiProperty({
    required: true,
    type: () => HolidayListWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HolidayListWhereUniqueInput)
  @Field(() => HolidayListWhereUniqueInput, { nullable: false })
  where!: HolidayListWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => HolidayListUpdateInput,
  })
  @ValidateNested()
  @Type(() => HolidayListUpdateInput)
  @Field(() => HolidayListUpdateInput, { nullable: false })
  data!: HolidayListUpdateInput;
}

export { UpdateHolidayListArgs as UpdateHolidayListArgs };