module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        projName: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
                }
            },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
            },
        imgLink: {
            type: DataTypes.STRING,
            allowNull: false
            }
    });
    return Project;
};