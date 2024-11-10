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
import { ThreatWhereInput } from "./ThreatWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ThreatListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ThreatWhereInput,
  })
  @ValidateNested()
  @Type(() => ThreatWhereInput)
  @IsOptional()
  @Field(() => ThreatWhereInput, {
    nullable: true,
  })
  every?: ThreatWhereInput;

  @ApiProperty({
    required: false,
    type: () => ThreatWhereInput,
  })
  @ValidateNested()
  @Type(() => ThreatWhereInput)
  @IsOptional()
  @Field(() => ThreatWhereInput, {
    nullable: true,
  })
  some?: ThreatWhereInput;

  @ApiProperty({
    required: false,
    type: () => ThreatWhereInput,
  })
  @ValidateNested()
  @Type(() => ThreatWhereInput)
  @IsOptional()
  @Field(() => ThreatWhereInput, {
    nullable: true,
  })
  none?: ThreatWhereInput;
}
export { ThreatListRelationFilter as ThreatListRelationFilter };
