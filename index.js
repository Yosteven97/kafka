import { KafkaClient } from 'kafka-node';

console.log("Masuk")
const user = new KafkaClient({
    kafkaHost: 'localhost:9092'
  });
  console.log("Masuk2")
  user.on('ready', () => {
    console.log('Kafka Connected');
  });
  console.log("Masuk3")
  user.on('error', (error) => {
    console.error('Error connecting to Kafka:', error);
  });

// ----------------------------------
// const user = new kafka.KafkaClient({
//     kafkaHost: 'localhost:9092'
//   });
  
//   const producer = new kafka.Producer(user);
  
//   producer.on('ready', () => {
//     console.log('Ready')
//     const payload = [
//       {
//         topic: 'My-topic',
//         messages: 'Hello!'
//       }
//     ];
  
//     producer.send(payload, (error, data) => {
//       if (error) {
//         console.error('Error in publishing message:', error);
//       } else {
//         console.log('Message successfully published:', data);
//       }
//     });
//   });
  
//   producer.on('error', (error) => {
//     console.error('Error connecting to Kafka:', error);
//   });
  

// ---------------------------------
// Configure Kafka consumer
// const consumer = new kafka.Consumer(
//     new kafka.KafkaClient({kafkaHost: 'localhost:2181'}),
//     [{ topic: 'new-topic' }]
//   );
  
//   // Consume messages from Kafka broker
//   consumer.on('message', function (message) {
//     // Display the message
//     console.log(message.value);
//   });