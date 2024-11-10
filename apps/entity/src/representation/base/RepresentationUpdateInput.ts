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
import { EntityUpdateManyWithoutRepresentationsInput } from "./EntityUpdateManyWithoutRepresentationsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RepresentationUpdateInput {
  @ApiProperty({
    required: false,
    type: () => EntityUpdateManyWithoutRepresentationsInput,
  })
  @ValidateNested()
  @Type(() => EntityUpdateManyWithoutRepresentationsInput)
  @IsOptional()
  @Field(() => EntityUpdateManyWithoutRepresentationsInput, {
    nullable: true,
  })
  entities?: EntityUpdateManyWithoutRepresentationsInput;
}

export { RepresentationUpdateInput as RepresentationUpdateInput };
