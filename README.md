# SCIOT-BloodPressure-Monitor

Hypertension is a major public health issue, especially in developing countries, and is known as a “silent killer” because it has no symptoms. According to the World Health Organization’s report in 2013, approximately 17 million deaths per year occur due to cardiovascular disease, out of which complications of Hypertension account for 9.4 million deaths . The report stated that the number of people with Hypertension who are undiagnosed, untreated, and uncontrolled increases in a country withan increased population and is weak in the healthcare system. 

In Malaysia, the prevalence of Hypertension was relatively higher in the older age group, in men, and in those with low educational attainment or lower household income level. The blood pressure (BP) reading of a normal healthy individual is around 120 millimeters of mercury (mm Hg) for systolic pressure and 80 mm Hg for diastolic pressure.

American Heart Association (AHA) states that the BP reading that exceeds 130 per 80 mm Hg is defined as Hypertension. Hypertension is divided into four stages which are prehypertension, mild Hypertension, moderate Hypertension, and severe Hypertension for stage 1, stage 2, stage 3, and stage 4, respectively. The person who suffers from severe Hypertension is advanced to monitor their BP reading with their physician once a month to avoid health complications such as kidney and heart failure, stroke and blindness. In practice, BP is measured using an oscillometric method requiring a cuff to squeeze the brachial artery. This method has a disadvantage where an individual with stiff arteries and wide pulse pressures, the mean arterial pressure may be significantly underestimated.The method also does not work well during physical activities, and the most significant problem is the bulkiness and discomfort of the inflatable cuff.  


Pre requisites of this project

On windows desktop download docker and by using command line we can setup nuclio dashboard and rabbit MQ

installation of libraries

Docker

Nuclio dashboard

RabbitMQ

Node.js

IFTT

MQTIZER - Free MQTT Client



Install these libraries by using command prompt

npm install mqtt

npm install amqplib

npm install request

Architecture Diagram 

![Architecture diagram](https://user-images.githubusercontent.com/85179228/161453675-5b50ef11-e2ba-4ad1-a40f-09513cdab2b5.png)



Docker

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications.

Docker provides tooling and a platform to manage the lifecycle of your containers.

Develop your application and its supporting components using containers.

The container becomes the unit for distributing and testing your application.

When you’re ready, deploy your application into your production environment.

Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications.


RabbitMQ

RabbitMQ is open source message broker software (sometimes called message-oriented middleware) that implements the Advanced Message Queuing Protocol (AMQP). The RabbitMQ server is written in the Erlang programming language and is built on the Open Telecom Platform framework for clustering and failover. Client libraries to interface with the broker are available for all major programming languages.

By using this command line we can run rabbit MQ

docker run -p 9000:15672 -p 1883:1883 -p 5672:5672 cyrilix/rabbitmq-mqtt


Nuclio dashboard

Nuclio is a high-performance "serverless" framework focused on data, I/O, and compute intensive workloads, Nuclio is extremely fast a single function instance can process hundreds of thousands of HTTP requests or data records per second. This is 10-100 times faster than some other frameworks . By using this command line we can run Nuclio dashboard

docker run -p 8070:8070 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp:/tmp nuclio/dashboard:stable-amd64


IFTTT If This Then That is a private commercial company that runs services that allow a user to program a response to events in the world. IFTTT has partnerships with different service providers that supply event notifications to IFTTT and execute commands that implement the responses. Create a free account https://ifttt.com/join Browse the IFTTT website or app to find something that interests you.

Node js Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Download Node.js from this link https://nodejs.org/en/

Connect the [services] https://ifttt.com/services that are involved in the Applet or connection.

MQTIZER - Free MQTT Client MQTT stands for Message Queue Telemetry Transport. It is a publish/subscribe, extremely simplistic and lightweight messaging protocol, devised for constrained devices and low-bandwidth, high-latency or unreliable networks. The design principles are to minimise network bandwidth and device resource requirements whilst also attempting to ensure reliability and some degree of assurance of delivery. These principles also turn out to make the protocol ideal of the emerging “machine-to-machine” (M2M) or “Internet of Things” world of connected devices, and for mobile applications where bandwidth and battery power are at a premium. Dowload and install https://play.google.com/store/apps/details?id=com.sanyamarya.mqtizermqtt_client&hl=en&gl=US

PROJECT ACTIVITY WORK


