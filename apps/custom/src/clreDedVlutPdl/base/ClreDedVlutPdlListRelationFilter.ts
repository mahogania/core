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
import { ClreDedVlutPdlWhereInput } from "./ClreDedVlutPdlWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ClreDedVlutPdlListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ClreDedVlutPdlWhereInput,
  })
  @ValidateNested()
  @Type(() => ClreDedVlutPdlWhereInput)
  @IsOptional()
  @Field(() => ClreDedVlutPdlWhereInput, {
    nullable: true,
  })
  every?: ClreDedVlutPdlWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClreDedVlutPdlWhereInput,
  })
  @ValidateNested()
  @Type(() => ClreDedVlutPdlWhereInput)
  @IsOptional()
  @Field(() => ClreDedVlutPdlWhereInput, {
    nullable: true,
  })
  some?: ClreDedVlutPdlWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClreDedVlutPdlWhereInput,
  })
  @ValidateNested()
  @Type(() => ClreDedVlutPdlWhereInput)
  @IsOptional()
  @Field(() => ClreDedVlutPdlWhereInput, {
    nullable: true,
  })
  none?: ClreDedVlutPdlWhereInput;
}
export { ClreDedVlutPdlListRelationFilter as ClreDedVlutPdlListRelationFilter };