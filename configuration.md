---
layout: default
title: Configuration
nav_order: 3
---

# Configuration

Captain can be configured either through a configuration file or environment variables. This page details all available configuration options.

## Configuration File

Captain looks for a configuration file named `config.yaml` in the following locations:
- Current working directory (`./config.yaml`)
- System configuration directory (`/etc/captain/config.yaml`)

### Configuration Options

| Configuration Key          | Description                         | Default Value   | Valid Values                          |
|---------------------------|-------------------------------------|-----------------|---------------------------------------|
| `server.host`             | Server listen address               | `localhost`     | Any valid IP or hostname              |
| `server.port`             | Server listen port                  | `8080`         | 1-65535                              |
| `db.path`                 | SQLite database file path           | `blog.db`      | Any valid file path                   |
| `db.log_level`           | Database logging verbosity          | `warn`         | `silent`, `error`, `warn`, `info`     |
| `site.theme`              | Website theme                       | `""`           | Any installed theme name              |
| `site.secure_cookie`      | Use secure cookies                  | `false`        | `true`, `false` (set to true when serving over HTTPS) |
| `site.domain`             | Cookie domain                       | `""`           | Domain name (e.g., "example.com") or empty for current domain |
| `storage.provider`        | Storage provider type               | `local`        | `local`, `s3`                        |
| `storage.local_path`      | Local storage path                  | `./media`      | Any valid directory path              |
| `storage.s3.bucket`       | S3 bucket name                      | `""`           | Valid S3 bucket name                  |
| `storage.s3.region`       | S3 region                          | `""`           | Valid AWS region (e.g., us-east-1)    |
| `storage.s3.endpoint`     | S3 endpoint URL                     | `""`           | Valid URL for S3-compatible services  |
| `storage.s3.access_key`   | S3 access key                      | `""`           | Valid AWS access key                  |
| `storage.s3.secret_key`   | S3 secret key                      | `""`           | Valid AWS secret key                  |
| `debug`                   | Enable debug mode                   | `false`        | `true`, `false`                      |

### Example Configuration

```yaml
server:
  host: localhost
  port: 8080

db:
  path: blog.db
  log_level: warn

site:
  theme: default
  secure_cookie: false
  domain: ""

storage:
  provider: local
  local_path: ./media
  s3:
    bucket: my-bucket
    region: us-east-1
    endpoint: ""
    access_key: ""
    secret_key: ""

debug: false
```

## Environment Variables

All configuration options can also be set using environment variables. Environment variables take precedence over configuration file settings.

| Variable                    | Description                     | Default         | Valid Values                                                                           |
|----------------------------|---------------------------------|-----------------|----------------------------------------------------------------------------------------|
| `CAPTAIN_DEBUG`            | Enable debug mode                | `false`         | `true`, `false`                                                                        |
| `CAPTAIN_SERVER_HOST`      | Host address to bind to          | `localhost`     | Any valid IP or hostname                                                               |
| `CAPTAIN_SERVER_PORT`      | Port number for the server       | `8080`          | 1-65535                                                                                |
| `CAPTAIN_DB_PATH`          | SQLite database file location    | `blog.db`       | Any valid file path                                                                    |
| `CAPTAIN_DB_LOG_LEVEL`     | Database logging verbosity       | `warn`          | `silent`, `error`, `warn`, `info`                                                      |
| `CAPTAIN_STORAGE_PROVIDER` | Storage provider type            | `local`         | `local`, `s3`                                                                          |
| `CAPTAIN_STORAGE_PATH`     | Local storage path              | `./uploads`     | Any valid directory path                                                               |
| `CAPTAIN_SITE_SECURE_COOKIE`| Use secure cookies             | `false`         | `true`, `false` (set to true when serving over HTTPS)                                  |
| `CAPTAIN_SITE_DOMAIN`      | Cookie domain                   | `""`            | Domain name (e.g., "example.com") or empty for current domain                          |
| `CAPTAIN_S3_BUCKET`        | S3 bucket name                  | `""`            | Valid S3 bucket name                                                                   |
| `CAPTAIN_S3_REGION`        | S3 region                       | `""`            | Valid AWS region (e.g., us-east-1)                                                     |
| `CAPTAIN_S3_ENDPOINT`      | S3 endpoint URL                 | `""`            | Valid URL for S3-compatible services                                                   |
| `CAPTAIN_S3_ACCESS_KEY`    | S3 access key                   | `""`            | Valid AWS access key                                                                   |
| `CAPTAIN_S3_SECRET_KEY`    | S3 secret key                   | `""`            | Valid AWS secret key                                                                   |
| `CAPTAIN_SITE_THEME`       | Website theme name               | `""`            | Any installed theme name                                                               |

## Admin Panel Settings

Some site settings can be configured through the admin panel under Settings:
- Site title
- Site subtitle
- Timezone
- Admin theme
- Other site-specific settings

{: .note }
Changes made through the admin panel are stored in the database and do not require a server restart to take effect.
