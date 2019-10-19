FROM nginx:latest
RUN apt-get update
RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs
RUN node --version
RUN npm --version

WORKDIR /app

COPY . ./

RUN rm /usr/share/nginx/html/*
RUN ls /usr/share/nginx/html/
RUN cp -r build/* /usr/share/nginx/html
RUN ls /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
