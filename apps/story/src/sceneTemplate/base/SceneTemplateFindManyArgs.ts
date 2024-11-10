/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SceneTemplateWhereInput } from "./SceneTemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SceneTemplateOrderByInput } from "./SceneTemplateOrderByInput";

@ArgsType()
class SceneTemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SceneTemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SceneTemplateWhereInput, { nullable: true })
  @Type(() => SceneTemplateWhereInput)
  where?: SceneTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [SceneTemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SceneTemplateOrderByInput], { nullable: true })
  @Type(() => SceneTemplateOrderByInput)
  orderBy?: Array<SceneTemplateOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SceneTemplateFindManyArgs as SceneTemplateFindManyArgs };
