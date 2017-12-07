# CDS Backup
Static backup site for CDS in case of maintenance and/or unexpected downtime.

## Install

```console
$ git clone https://github.com/CERNDocumentServer/cds-backup.git
$ cd cds-backup
$ npm install
$ grunt build
```

### Development
The sources are under `app` directory.

```console
$ grunt serve
```

## Branches
* ``master`` - Default development branch.
* ``qa`` - Quality assurance branch, deployed to our QA cluster.
* ``production`` - Production branch, deployed to our production cluster.

## Deployment
```console
$ ssh <build host>
$ workon cds
$ cdvirtualenv scripts/
$ fab backup_bootstrap
$ fab backup_update
$ fab backup_build
$ fab backup_deploy
```
