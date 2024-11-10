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
import { CommandCreateNestedManyWithoutProcessorsInput } from "./CommandCreateNestedManyWithoutProcessorsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ViewCreateNestedManyWithoutProcessorsInput } from "./ViewCreateNestedManyWithoutProcessorsInput";

@InputType()
class ProcessorCreateInput {
  @ApiProperty({
    required: false,
    type: () => CommandCreateNestedManyWithoutProcessorsInput,
  })
  @ValidateNested()
  @Type(() => CommandCreateNestedManyWithoutProcessorsInput)
  @IsOptional()
  @Field(() => CommandCreateNestedManyWithoutProcessorsInput, {
    nullable: true,
  })
  commands?: CommandCreateNestedManyWithoutProcessorsInput;

  @ApiProperty({
    required: false,
    type: () => ViewCreateNestedManyWithoutProcessorsInput,
  })
  @ValidateNested()
  @Type(() => ViewCreateNestedManyWithoutProcessorsInput)
  @IsOptional()
  @Field(() => ViewCreateNestedManyWithoutProcessorsInput, {
    nullable: true,
  })
  views?: ViewCreateNestedManyWithoutProcessorsInput;
}

export { ProcessorCreateInput as ProcessorCreateInput };
