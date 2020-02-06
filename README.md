# CDS Backup

Static backup site for CDS in case of maintenance and/or unexpected downtime.

## Install

```console
git clone https://github.com/CERNDocumentServer/cds-backup.git
cd cds-backup
```

## Development

In case you don't have `grunt-cli` installed globally:

```console
npm install -g grunt-cli
```

Run a simple webserver to show the website with autoreload on modifications:

```console
npm install
grunt
```

## Deployment

```console
ssh <build host>
workon cds
cdvirtualenv scripts/
fab backup_bootstrap
fab backup_update
fab backup_deploy
```
