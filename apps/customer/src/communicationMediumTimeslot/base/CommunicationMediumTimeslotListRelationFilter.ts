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
import { CommunicationMediumTimeslotWhereInput } from "./CommunicationMediumTimeslotWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CommunicationMediumTimeslotListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CommunicationMediumTimeslotWhereInput,
  })
  @ValidateNested()
  @Type(() => CommunicationMediumTimeslotWhereInput)
  @IsOptional()
  @Field(() => CommunicationMediumTimeslotWhereInput, {
    nullable: true,
  })
  every?: CommunicationMediumTimeslotWhereInput;

  @ApiProperty({
    required: false,
    type: () => CommunicationMediumTimeslotWhereInput,
  })
  @ValidateNested()
  @Type(() => CommunicationMediumTimeslotWhereInput)
  @IsOptional()
  @Field(() => CommunicationMediumTimeslotWhereInput, {
    nullable: true,
  })
  some?: CommunicationMediumTimeslotWhereInput;

  @ApiProperty({
    required: false,
    type: () => CommunicationMediumTimeslotWhereInput,
  })
  @ValidateNested()
  @Type(() => CommunicationMediumTimeslotWhereInput)
  @IsOptional()
  @Field(() => CommunicationMediumTimeslotWhereInput, {
    nullable: true,
  })
  none?: CommunicationMediumTimeslotWhereInput;
}
export { CommunicationMediumTimeslotListRelationFilter as CommunicationMediumTimeslotListRelationFilter };
