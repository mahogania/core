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
import { CreatureLevelStatWhereInput } from "./CreatureLevelStatWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CreatureLevelStatListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CreatureLevelStatWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureLevelStatWhereInput)
  @IsOptional()
  @Field(() => CreatureLevelStatWhereInput, {
    nullable: true,
  })
  every?: CreatureLevelStatWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureLevelStatWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureLevelStatWhereInput)
  @IsOptional()
  @Field(() => CreatureLevelStatWhereInput, {
    nullable: true,
  })
  some?: CreatureLevelStatWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureLevelStatWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureLevelStatWhereInput)
  @IsOptional()
  @Field(() => CreatureLevelStatWhereInput, {
    nullable: true,
  })
  none?: CreatureLevelStatWhereInput;
}
export { CreatureLevelStatListRelationFilter as CreatureLevelStatListRelationFilter };
