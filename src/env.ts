import { envsafe, str, bool } from "envsafe";

export const env = envsafe({
  GOOGLE_PROJECT_ID: str(),
  SERVICE_ACCOUNT_JSON: str({
    desc: "JSON string of the service account .json key. See: https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating",
  }),
  GCS_BUCKET: str(),
  BACKUP_DATABASE_URL: str({
    desc: "The connection string of the database to backup. See: https://docs.railway.app/databases/postgresql#variables",
  }),
  BACKUP_CRON_SCHEDULE: str({
    desc: "The cron schedule to run the backup on.",
    default: "0 5 * * *",
    allowEmpty: true,
  }),
  BACKUP_PREFIX: str({
    desc: "Prefix for the backup file name.",
    allowEmpty: true,
    default: "",
  }),
  RUN_ON_STARTUP: bool({
    desc: "Run a backup on startup of this application",
    default: false,
    allowEmpty: true,
  }),
});
