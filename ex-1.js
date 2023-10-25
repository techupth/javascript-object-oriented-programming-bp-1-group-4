class EmailNotification {constructor(notificationId,createdTime,content,receiver){
    this.notificationId=notificationId;
    this.createdTime=createdTime;
    this.content=content;
    this.receiver=receiver;}
    
    send(){
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class SMSNotification { constructor(notificationId,createdTime,content,phoneNumber){
    this.notificationId=notificationId;
    this.createdTime=createdTime;
    this.content=content;
    this.phoneNumber=phoneNumber;}

    send(){
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}

const yourEmail=new EmailNotification('Hello OOP','25/10/2023 7.38 PM','Hello OOP','youremail@gmail.com')
const yourSMS=new SMSNotification('Hello OOP','25/10/2023 7.39 PM','Hello OOP','xxxxxxxxxx')
yourEmail.send()
yourSMS.send()