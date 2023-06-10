# identity-reconciliation
To keep track of a user when they use different emails and phoneNumbers

## Get Started

### Prerequisites
- Docker

### Installation
- Clone the github repository
```
git clone https://github.com/nitindoodhiya/identity-reconciliation.git
```
- Start the project
```
docker-compose up --build
```

### Access the project
- Open the below URL
```
http://localhost:3000/identify
```
### Sample input
```
{
  email: "sample@gmail.com",
  phoneNumber: "12323434",
}
