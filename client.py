import boto3, os

MINIO_SECRET = os.environ.get('MINIO_SECRET')
s3 = boto3.client('s3',
  endpoint_url='http://192.168.4.181:9000',
  aws_access_key_id='minioadmin',
  aws_secret_access_key=MINIO_SECRET,
  aws_session_token=None,
  verify=False,
  config=boto3.session.Config(signature_version='s3v4')
)

# List buckets
print(s3.list_buckets()['Buckets'])

# Put Object
s3.put_object(Body=b'Hello from Python', Bucket='testbucket', Key='hello_python.txt')

# Get Object
data = s3.get_object(Bucket='testbucket', Key='hello_python.txt')['Body'].read()
print(data.decode())