# minio_client

Minio has a similar API to S3. 

If you are using Python, the regular boto3 library "just works"

If you are using Javascript, use the minio package from npm

To run the scripts, please set your MINIO_SECRET environment variable. You can run the scripts as follows:

`python client.py`

`node src/index.js`

This repo also demostrates how to package the Javascript for the browser using Parcel.js. The resulting `dist` folder can be deployed to any static web server.