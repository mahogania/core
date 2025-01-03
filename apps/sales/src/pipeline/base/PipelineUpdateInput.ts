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
import { ConfigurationUpdateManyWithoutPipelinesInput } from "./ConfigurationUpdateManyWithoutPipelinesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ProcessUpdateManyWithoutPipelinesInput } from "./ProcessUpdateManyWithoutPipelinesInput";

@InputType()
class PipelineUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ConfigurationUpdateManyWithoutPipelinesInput,
  })
  @ValidateNested()
  @Type(() => ConfigurationUpdateManyWithoutPipelinesInput)
  @IsOptional()
  @Field(() => ConfigurationUpdateManyWithoutPipelinesInput, {
    nullable: true,
  })
  Configurations?: ConfigurationUpdateManyWithoutPipelinesInput;

  @ApiProperty({
    required: false,
    type: () => ProcessUpdateManyWithoutPipelinesInput,
  })
  @ValidateNested()
  @Type(() => ProcessUpdateManyWithoutPipelinesInput)
  @IsOptional()
  @Field(() => ProcessUpdateManyWithoutPipelinesInput, {
    nullable: true,
  })
  processes?: ProcessUpdateManyWithoutPipelinesInput;
}

export { PipelineUpdateInput as PipelineUpdateInput };
