module.exports = async () =>{

    const Tweet = require("./models/Tweet");
    const User = require("./models/User");

    User.hasMany(Tweet,{as: "Tweets", foreignKey:'userId'});
    Tweet.belongsTo(User,{as:"User", foreignKey:'userId'});

    const errHandler = (err)=>{
        console.error("Error: ",err);
    }

    const user = await User.create({username:"Hammad",passwd:'0000'}).catch(errHandler);
    const tweet = await Tweet.create({content:'This is actually the tweet content',userId:user.id}).catch(errHandler);

    User.findAll({where:{username:'Hammad'},include:[]})
}