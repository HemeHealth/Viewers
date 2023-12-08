build:
        docker build -t ohif-viewer-multi-config .

run:
        docker run -p 3000:8080 -e PORT=8080 --name ohif-viewer-multi-config -d ohif-viewer-multi-config:latest

remove:
        docker rm -f ohif-viewer-multi-config


rebuild:
        make build
        make remove
        make run
