const AWS = require('aws-sdk');
const fs = require('fs');

// Cấu hình AWS SDK
AWS.config.update({
    /*
    ACCESS_KEY_ID=AKIA5FTZEKGZ4FSAM7GJ
SECRET_ACCESS_KEY=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
    */
  accessKeyId: 'AKIA5FTZEKGZ4FSAM7GJ',
  secretAccessKey: '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',
});

// Tạo đối tượng S3
const s3 = new AWS.S3();

// Đường dẫn tệp ảnh cần tải lên
const imagePath = "PerfectIeltsSpeaking.jpg";

// Tên bucket S3
const bucketName = 'buckettqn';

// Tải lên ảnh lên AWS S3
function uploadImageToS3(imagePath, bucketName) {
  // Đọc nội dung tệp ảnh
  const imageContent = fs.readFileSync(imagePath);

  // Tạo đối tượng tải lên
  const params = {
    Bucket: bucketName,
    Key: imagePath,
    Body: imageContent,
    ACL: 'public-read',
  };

  // Tải lên ảnh lên S3
  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Image uploaded successfully.');
      console.log('Image URL:', data.Location);
    }
  });
}

// Gọi hàm tải lên ảnh
uploadImageToS3(imagePath, bucketName);