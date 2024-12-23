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
import { GeneStatWhereInput } from "./GeneStatWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GeneStatListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GeneStatWhereInput,
  })
  @ValidateNested()
  @Type(() => GeneStatWhereInput)
  @IsOptional()
  @Field(() => GeneStatWhereInput, {
    nullable: true,
  })
  every?: GeneStatWhereInput;

  @ApiProperty({
    required: false,
    type: () => GeneStatWhereInput,
  })
  @ValidateNested()
  @Type(() => GeneStatWhereInput)
  @IsOptional()
  @Field(() => GeneStatWhereInput, {
    nullable: true,
  })
  some?: GeneStatWhereInput;

  @ApiProperty({
    required: false,
    type: () => GeneStatWhereInput,
  })
  @ValidateNested()
  @Type(() => GeneStatWhereInput)
  @IsOptional()
  @Field(() => GeneStatWhereInput, {
    nullable: true,
  })
  none?: GeneStatWhereInput;
}
export { GeneStatListRelationFilter as GeneStatListRelationFilter };
