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
import { AreaUpdateManyWithoutZonesInput } from "./AreaUpdateManyWithoutZonesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MapWhereUniqueInput } from "../../map/base/MapWhereUniqueInput";

@InputType()
class ZoneUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AreaUpdateManyWithoutZonesInput,
  })
  @ValidateNested()
  @Type(() => AreaUpdateManyWithoutZonesInput)
  @IsOptional()
  @Field(() => AreaUpdateManyWithoutZonesInput, {
    nullable: true,
  })
  areas?: AreaUpdateManyWithoutZonesInput;

  @ApiProperty({
    required: false,
    type: () => MapWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MapWhereUniqueInput)
  @IsOptional()
  @Field(() => MapWhereUniqueInput, {
    nullable: true,
  })
  map?: MapWhereUniqueInput | null;
}

export { ZoneUpdateInput as ZoneUpdateInput };