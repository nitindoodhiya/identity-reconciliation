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
- Change directory into the project
```
cd identity-reconciliation/
```
- Start the project
```
docker-compose up --build
```

### Access the project
- Open the below URL on browser or send post request to the given URL:
```
http://localhost:3000/identify
```
### Sample input
```
{
  email: "sample@gmail.com",
  phoneNumber: "12323434",
}
