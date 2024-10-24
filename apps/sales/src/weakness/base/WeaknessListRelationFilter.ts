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
import { WeaknessWhereInput } from "./WeaknessWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WeaknessListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WeaknessWhereInput,
  })
  @ValidateNested()
  @Type(() => WeaknessWhereInput)
  @IsOptional()
  @Field(() => WeaknessWhereInput, {
    nullable: true,
  })
  every?: WeaknessWhereInput;

  @ApiProperty({
    required: false,
    type: () => WeaknessWhereInput,
  })
  @ValidateNested()
  @Type(() => WeaknessWhereInput)
  @IsOptional()
  @Field(() => WeaknessWhereInput, {
    nullable: true,
  })
  some?: WeaknessWhereInput;

  @ApiProperty({
    required: false,
    type: () => WeaknessWhereInput,
  })
  @ValidateNested()
  @Type(() => WeaknessWhereInput)
  @IsOptional()
  @Field(() => WeaknessWhereInput, {
    nullable: true,
  })
  none?: WeaknessWhereInput;
}
export { WeaknessListRelationFilter as WeaknessListRelationFilter };
