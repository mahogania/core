/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DunningWhereInput } from "./DunningWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DunningListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DunningWhereInput,
  })
  @ValidateNested()
  @Type(() => DunningWhereInput)
  @IsOptional()
  @Field(() => DunningWhereInput, {
    nullable: true,
  })
  every?: DunningWhereInput;

  @ApiProperty({
    required: false,
    type: () => DunningWhereInput,
  })
  @ValidateNested()
  @Type(() => DunningWhereInput)
  @IsOptional()
  @Field(() => DunningWhereInput, {
    nullable: true,
  })
  some?: DunningWhereInput;

  @ApiProperty({
    required: false,
    type: () => DunningWhereInput,
  })
  @ValidateNested()
  @Type(() => DunningWhereInput)
  @IsOptional()
  @Field(() => DunningWhereInput, {
    nullable: true,
  })
  none?: DunningWhereInput;
}
export { DunningListRelationFilter as DunningListRelationFilter };
