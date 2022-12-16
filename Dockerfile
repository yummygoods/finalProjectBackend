FROM openjdk:19
ADD target/demo2-0.0.1-SNAPSHOT.jar finalProjectBackend-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "finalProjectBackend-0.0.1-SNAPSHOT.jar"]