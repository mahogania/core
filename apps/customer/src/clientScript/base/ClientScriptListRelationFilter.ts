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
import { ClientScriptWhereInput } from "./ClientScriptWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ClientScriptListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ClientScriptWhereInput,
  })
  @ValidateNested()
  @Type(() => ClientScriptWhereInput)
  @IsOptional()
  @Field(() => ClientScriptWhereInput, {
    nullable: true,
  })
  every?: ClientScriptWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClientScriptWhereInput,
  })
  @ValidateNested()
  @Type(() => ClientScriptWhereInput)
  @IsOptional()
  @Field(() => ClientScriptWhereInput, {
    nullable: true,
  })
  some?: ClientScriptWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClientScriptWhereInput,
  })
  @ValidateNested()
  @Type(() => ClientScriptWhereInput)
  @IsOptional()
  @Field(() => ClientScriptWhereInput, {
    nullable: true,
  })
  none?: ClientScriptWhereInput;
}
export { ClientScriptListRelationFilter as ClientScriptListRelationFilter };
