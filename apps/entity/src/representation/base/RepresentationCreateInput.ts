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
import { EntityCreateNestedManyWithoutRepresentationsInput } from "./EntityCreateNestedManyWithoutRepresentationsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RepresentationCreateInput {
  @ApiProperty({
    required: false,
    type: () => EntityCreateNestedManyWithoutRepresentationsInput,
  })
  @ValidateNested()
  @Type(() => EntityCreateNestedManyWithoutRepresentationsInput)
  @IsOptional()
  @Field(() => EntityCreateNestedManyWithoutRepresentationsInput, {
    nullable: true,
  })
  entities?: EntityCreateNestedManyWithoutRepresentationsInput;
}

export { RepresentationCreateInput as RepresentationCreateInput };
