FROM nginx
RUN apt-get update
RUN apt-get install -y mc vim nano
RUN rm /usr/share/nginx/html/*
COPY devops/nginx.conf /etc/nginx/
COPY devops/default.conf /etc/nginx/conf.d/
WORKDIR /opt/songbook
COPY build .
RUN cp -r * /usr/share/nginx/html/