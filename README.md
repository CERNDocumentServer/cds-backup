# CDS Backup

Static backup site for CDS in case of maintenance and/or unexpected downtime. It fetches a local JSON file, `status.json`, and renders its content via Handlebars templates.

## status.json format

```
{
  "type": "incident",
  "incident": {
    "title": "My title",
    "description": "We are currently experiencing a technical issue and we are<br />working to resolve it as quickly as possible.",
    "statuses": [
      {
        "title": "Title 1",
        "description": "Description 1",
        "date": "Date with timezone"
      }
    ]
  },
  "intervention": {
    "title": "",
    "description": "Sorry for the incovenience but we are performing scheduled maintenance at the moment.<br />We will back online shortly!"
  }
}
```

## Dockerfile

To test the Dockerfile, just run:

```console
docker build -t backup-website-nginx .
docker run -p 8080:80 -it backup-website-nginx
```

Open your browser http://localhost:8080
