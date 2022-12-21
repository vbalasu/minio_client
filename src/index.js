var Minio = require('minio')

var minioClient = new Minio.Client({
    endPoint: '192.168.4.181',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: process.env.MINIO_SECRET
});

// List Buckets
minioClient.listBuckets(function(err, buckets) {
    if (err) return console.log(err)
    console.log('buckets :', buckets)
  });

// Put Object
minioClient.putObject('testbucket', 'hello.txt', 'hello world', function(err) {
    if(err) console.log(err);
    else console.log('Stored object successfully');
});

// Get Object
var size = 0
minioClient.getObject('testbucket', 'hello.txt', function(err, dataStream) {
  if (err) {
    return console.log(err)
  }
  dataStream.on('data', function(chunk) {
    size += chunk.length
    console.log(chunk.toString());
  })
  dataStream.on('end', function() {
    console.log('End. Total size = ' + size)
  })
  dataStream.on('error', function(err) {
    console.log(err)
  })
});
