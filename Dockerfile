# docker build -t former2_local:1.0 .
# docker run --name former2 -p $host_port:80 -d former2_local:1.0

FROM nginx:1.15
COPY . /usr/share/nginx/html
