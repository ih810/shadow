require("dotenv").config();
const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

class UserService {
  constructor(knex) {
    this.knex = knex;
  }

  //Method to update a users details
  edit(body) {
    ("updating details of a user");
    return this.knex("user")
      .where({
        id: body.id,
      })
      .update({
        displayName: body.displayName,
        email: body.email,
      });
  }

  //Method to update user picture
  async updatePicture(picture, body) {
    console.log("Uploading user picture to AWS");
    let fileName = `user/${body.userId}/picture.jpeg`;
    let fileData = picture.data;
    const params = {
      Bucket: process.env.AWS_BUCKET,
      Key: fileName,
      ContentType: "image/jpeg",
      Body: fileData,
    };
    let data = await s3.upload(params).promise();
    return this.knex("user")
      .where({
        email: body.email,
      })
      .update({
        picture: data.Location,
      });
  }

  //Method to delete a user
  delete(body) {
    return this.knex("user")
      .where({
        email: body.email,
      })
      .update({
        userStatus: false,
      });
  }

  //Method to return a users details
  user(body) {
    console.log("returning data of a user.");
    return this.knex("user")
      .where({
        email: body.email,
      })
      .then((user) => {
        console.log('lmao', user)
        return {
          id: user[0].id,
          displayName: user[0].displayName,
          email: user[0].email,
          picture: user[0].picture,
        };
      });
  }
}

module.exports = UserService;
