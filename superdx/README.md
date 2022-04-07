# SuperDX-todo

- SuperDX Studio는 DB 구성 및 Service Code를 생성하여 클라우드 환경으로 배포하는 역할입니다.
- 그러나, Sample Project로서 이러한 클라우드 환경을 Spring Boot 기반으로 구성하였습니다.

## Prerequisites
- 11 버전 이상의 Jdk 및 그래들 설치

## Application Property Configuration
```properties
#Tibero Setting
spring.datasource.url=jdbc:tibero:thin:@example.com:8629:tibero
spring.datasource.username=example
spring.datasource.password=example

# 쿼리문으로 새롭게 쿼리문을 주입 시킬 지 여부를 판단하여 둘중 하나를 주석 처리
#Init Database
# DB Schema 구성을 위해 최초 실행 시 필수
spring.sql.init.mode=always

#Maintain Database
# 쿼리문 실행 안하는 옵션
#spring.sql.init.mode=never
```

## Run Project
### 터미널 환경에서 실행
- ./gradlew build && java -jar build/libs/todo-0.0.1-SNAPSHOT.jar
### Mybatis Generator
- 필요한 경우 mybatis-generator 디렉토리에서 실행
- java -jar mybatis-generator-core-1.4.1.jar -configfile generatorConfig.xml -overwrite

## Project Structure
```
+-- gradle
+-- libs
| +-- tibero6-jdbc.jar // 티베로 관련 파일
| +-- mybatis-dynamic-sql-1.4.0.jar // Mybatis Generator 관련 파일
+-- mybatis-generator
| +-- generatorConfig.xml // Mybatis Generator 설정 파일
| +-- mybatis-generator-core-1.4.1.jar // Mybatis Generator 관련 파일
+-- src
| +-- main
| | +-- java/
| | | +-- com.superapp.todo
| | | | +-- config
| | | | +-- controller
| | | | | +-- ToDoController.java // ToDo에 대한 컨트롤러
| | | | +-- dto // Controller 및 Service에서 사용하는 DTO
| | | | | +-- ToDoDTO.java 
| | | | +-- entity // Mybatis Generator를 통해 자동 생성한 DB Table/view에 대응 하는 DTO
| | | | +-- mapper //  Mybatis Generator를 통해 자동 생성한 DB Table/view에 대응 하는 DAO
| | | | +-- service
| | | | | +-- ToDoService.java // ToDo에 대한 서비스
| | +-- resources
| | | +-- data.sql // DB 필수 데이터 Insert
| | | +-- schema.sql  // DB Table/View DDL
```
## SuperDX Code Generate
### Base/View Component
- Studio를 통해 생성되는 DDL문의 결과물은 ./src/main/resources/schema.sql에 있습니다.
- 해당 Project에서는 DB Scheam 구성은 Spring sql init을 통해 수행하고 있도록 하였습니다.

#### Data Access Object / Data Transfer Object
- Studio를 통해 생성되는 결과물은 ~/mybatis-generator/generatorConfig.xml 입니다.
- DB Table/View에 대한 DAO/DTO는 Mybatis-Generator를 통해 생성하고 있으며, Service Component에서 사용합니다.

### Rule Component
- Rule Component를 통해 생성되는 결과물은 PL/SQL Stored Function/Procedure 입니다.
- 기본 사용 법은, DB View를 통해 Stored Function을 사용하는 방식입니다.
- 해당 Project에서는 TODO_LENGTH_VIEW DB View를 생성하여, Tibero에서 기본 제공하는 LENGTH 함수를 사용하여 ToDo item의 문자열 길이를 계산하도록 하였습니다.

### Service Component
- Service Component를 통해 생성되는 결과물은 ./src/main/java/com/superapp/todo/service 입니다.
