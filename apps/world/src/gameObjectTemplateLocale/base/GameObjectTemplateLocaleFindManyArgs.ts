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
import { GameObjectTemplateLocaleWhereInput } from "./GameObjectTemplateLocaleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GameObjectTemplateLocaleOrderByInput } from "./GameObjectTemplateLocaleOrderByInput";

@ArgsType()
class GameObjectTemplateLocaleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GameObjectTemplateLocaleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GameObjectTemplateLocaleWhereInput, { nullable: true })
  @Type(() => GameObjectTemplateLocaleWhereInput)
  where?: GameObjectTemplateLocaleWhereInput;

  @ApiProperty({
    required: false,
    type: [GameObjectTemplateLocaleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GameObjectTemplateLocaleOrderByInput], { nullable: true })
  @Type(() => GameObjectTemplateLocaleOrderByInput)
  orderBy?: Array<GameObjectTemplateLocaleOrderByInput>;

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

export { GameObjectTemplateLocaleFindManyArgs as GameObjectTemplateLocaleFindManyArgs };
