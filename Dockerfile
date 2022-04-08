FROM mcr.microsoft.com/openjdk/jdk:17-ubuntu
USER root
RUN apt-get update
RUN apt-get install curl -y
RUN curl -fsSL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs
WORKDIR /root/superapp
COPY ./superux .
WORKDIR /root/superapp/superux
RUN npm install
WORKDIR /root/superapp/superdx
COPY ./superdx/build/libs/todo-0.0.1-SNAPSHOT.jar .
WORKDIR /root
ENTRYPOINT ["java", "-jar", "/root/superapp/superdx/todo-0.0.1-SNAPSHOT.jar"]