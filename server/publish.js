// automatically sent to all connected clients.
Meteor.publish(null, function() {
  console.log("Publish: BB");
  var cursor = BB.find();
  return cursor;
});

Meteor.publish('DD', function() {
  console.log("Publish: DD");
  var cursor = DD.find();
  return cursor;
});

Meteor.publish('EE', function() {
  console.log("Publish: EE");
  var cursor = EE.find();
  return cursor;
});
