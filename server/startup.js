Meteor.startup(function () {
  //BB.remove({});
  if (BB.find().count() === 0) {
    var data = JSON.parse(Assets.getText("bb.json"));  // UTF8 withoutBOM
    data.forEach(function (item, index, array) {
      BB.insert(item);
    });
  }

  //DD.remove({});
  if (DD.find().count() === 0) {
    var data = JSON.parse(Assets.getText("dd.json"));  // UTF8 withoutBOM
    data.forEach(function (item, index, array) {
      DD.insert(item);
    });
  }

  //EE.remove({});
  if (EE.find().count() === 0) {
    var data = JSON.parse(Assets.getText("ee.json"));  // UTF8 withoutBOM
    data.forEach(function (item, index, array) {
      EE.insert(item);
    });
  }

  //SS.remove({});

});
