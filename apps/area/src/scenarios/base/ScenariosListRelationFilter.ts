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
import { ScenariosWhereInput } from "./ScenariosWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ScenariosListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ScenariosWhereInput,
  })
  @ValidateNested()
  @Type(() => ScenariosWhereInput)
  @IsOptional()
  @Field(() => ScenariosWhereInput, {
    nullable: true,
  })
  every?: ScenariosWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScenariosWhereInput,
  })
  @ValidateNested()
  @Type(() => ScenariosWhereInput)
  @IsOptional()
  @Field(() => ScenariosWhereInput, {
    nullable: true,
  })
  some?: ScenariosWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScenariosWhereInput,
  })
  @ValidateNested()
  @Type(() => ScenariosWhereInput)
  @IsOptional()
  @Field(() => ScenariosWhereInput, {
    nullable: true,
  })
  none?: ScenariosWhereInput;
}
export { ScenariosListRelationFilter as ScenariosListRelationFilter };
