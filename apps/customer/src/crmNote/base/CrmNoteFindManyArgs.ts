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
import { CrmNoteWhereInput } from "./CrmNoteWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CrmNoteOrderByInput } from "./CrmNoteOrderByInput";

@ArgsType()
class CrmNoteFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CrmNoteWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CrmNoteWhereInput, { nullable: true })
  @Type(() => CrmNoteWhereInput)
  where?: CrmNoteWhereInput;

  @ApiProperty({
    required: false,
    type: [CrmNoteOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CrmNoteOrderByInput], { nullable: true })
  @Type(() => CrmNoteOrderByInput)
  orderBy?: Array<CrmNoteOrderByInput>;

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

export { CrmNoteFindManyArgs as CrmNoteFindManyArgs };