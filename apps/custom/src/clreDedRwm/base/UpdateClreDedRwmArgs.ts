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
import { ClreDedRwmWhereUniqueInput } from "./ClreDedRwmWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ClreDedRwmUpdateInput } from "./ClreDedRwmUpdateInput";

@ArgsType()
class UpdateClreDedRwmArgs {
  @ApiProperty({
    required: true,
    type: () => ClreDedRwmWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClreDedRwmWhereUniqueInput)
  @Field(() => ClreDedRwmWhereUniqueInput, { nullable: false })
  where!: ClreDedRwmWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ClreDedRwmUpdateInput,
  })
  @ValidateNested()
  @Type(() => ClreDedRwmUpdateInput)
  @Field(() => ClreDedRwmUpdateInput, { nullable: false })
  data!: ClreDedRwmUpdateInput;
}

export { UpdateClreDedRwmArgs as UpdateClreDedRwmArgs };