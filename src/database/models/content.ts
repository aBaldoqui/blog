import {
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    NonAttribute,
} from '@sequelize/core';
import {
    PrimaryKey,
    Attribute,
    AutoIncrement,
    NotNull,
    HasOne,
    BelongsTo,
} from '@sequelize/core/decorators-legacy';

export class PostContent extends Model<
    InferAttributes<PostContent>,
    InferCreationAttributes<PostContent>
> {
    @Attribute(DataTypes.INTEGER)
    @AutoIncrement
    @PrimaryKey
    declare id: CreationOptional<number>;

    // This is the foreign key
    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare postId: number;
}