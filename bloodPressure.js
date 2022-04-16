var mqtt = require('mqtt')
var amqplib = require('amqplib')
var request = require('request')

const ADDRESS = '192.168.1.107';
const KEY = 'igVDZ0zWXV_Wn2IYuBiI8wOOvymBuulmdfEKQrhE3f5';
const topic = 'iot/bloodPressure';

var parameters = {
    host: 'mqtt://' + ADDRESS,
    clientId: 'mqttjs_' + randomNumberGenerator(),
    username: 'guest',
    password: 'guest',
};

function randomNumberGenerator() {
    return Math.random().toString(16).substr(2, 8);
}

function sendMail() {
    request({
        url: 'https://maker.ifttt.com/trigger/BloodPressure_Mail/json/with/key/'+KEY,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }, 
    function (er, response, body) {
        if (er) {
            console.log(er);
        } 
        else {
            console.log(response.statusCode, body);
        }
    });
}

amqplib.connect('amqp://guest:guest@192.168.1.107:5672').then(function(conn) {
    process.once('SIGINT', function() { conn.close(); });
    return conn.createChannel().then(function(channel) {
        
        var ok = channel.assertQueue('iot/bloodPressure', {durable: false});

        ok = ok.then(function(_qok) {
           
            return channel.consume('iot/bloodPressure', function(msg) {
                
                var bloodPressure = msg.content.toString();

                topicData = 'iot/bloodPressure' + bloodPressure;
                sendMqttTopic(topic, topicData);
                console.log("Blood Pressure is : " + msg.content);
                
                if (Number(msg.content) > 120) {
                    console.log('iot/bloodPressure')
                    sendMail();
                }


            }, {noAck: true});
        });

        return ok.then(function(_cok) {
            console.log('[expecting for messages : iot/bloodPressure]');
        });
    });
}).catch(console.warn);

async function sendMqttTopic(topic, data) {
    var client = mqtt.connect("mqtt://" + ADDRESS, parameters);
    client.on('connect', function () {
        client.publish(topic, data, function () {
        client.end();
        });
    });
}