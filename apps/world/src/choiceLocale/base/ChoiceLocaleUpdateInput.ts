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
import { ChoiceUpdateManyWithoutChoiceLocalesInput } from "./ChoiceUpdateManyWithoutChoiceLocalesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ChoiceLocaleUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ChoiceUpdateManyWithoutChoiceLocalesInput,
  })
  @ValidateNested()
  @Type(() => ChoiceUpdateManyWithoutChoiceLocalesInput)
  @IsOptional()
  @Field(() => ChoiceUpdateManyWithoutChoiceLocalesInput, {
    nullable: true,
  })
  choices?: ChoiceUpdateManyWithoutChoiceLocalesInput;
}

export { ChoiceLocaleUpdateInput as ChoiceLocaleUpdateInput };
