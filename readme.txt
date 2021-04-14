Google App Engine: GAE is Platform-as-a-service i.e. PaaS. ( We need not worry about scaling and use the service )

Build production version of your Angular App
  - ng build — prod

Create new configuration file required for hosting [ app.yaml ]
  - place app.yaml inside dist folder next to project_name_folder

      runtime: nodejs14
      handlers:
        - url: /
          static_files: gae-app/index.html
          upload: gae-app/index.html
        - url: /
          static_dir: gae-app

Configuration in GCP UI
  a) Login to Google console to create new project [ gae-project ]
  b) Create new Google Storage Bucket in the same project. [ gae-project-bucket ] ( Just name your bucket and keep rest of details default )
  c) Upload your project folder and app.yaml file to the newly created bucket.
  d)  Login to Google cloud console by clicking console icon from top right of the console.
  e) mkdir gae-static-app
  f) gsutil rsync -r gs://gae-project-bucket ./gae-static-app
  g) cd gae-static-app
  h) gcloud app deploy

Deployment Url will be displayed in the console. E.g. [http://gae-ngapp.appspot.com/]
