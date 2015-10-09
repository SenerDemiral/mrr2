Reducers = {};

let initialInterfaceState = {
  bbId: '',
  bbAd: '',
  ddId: '',
  ddAd: '',
  eeItem: {},
}

// helper to *copy* old state and merge new data with it
function merge(oldState, newState) {
  console.log("merge OldState", oldState);
  console.log("merge NewState", newState);
  return _.extend({}, oldState, newState);
}

Reducers.userInterface = function userInterface(state = initialInterfaceState, action) {
  switch (action.type) {
    case 'BB_SELECT':
      return merge(state, {
        bbId: action.bbId,
        bbAd: action.bbAd
      });
    case 'DD_SELECT':
      return merge(state, {
        ddId: action.ddId,
        ddAd: action.ddAd
      });
    case 'EE_SELECT':
      siparisEkle(action.eeItem);
      return merge(state, {
        eeItem: action.eeItem
      });
    case 'SS_SIPARISVER':
      siparisVer(action.ddId);
      return action.ddId;

    default:
      return state;
  }
}

var siparisVer = (ddId) => {
  console.log("siparisVer", ddId);
  //SS.update({ddId: ddId}, {$set: {drm: "2"}}, {multi: true});
  SS.find({ddId: ddId, drm: "1"}).forEach( (ssDoc) => {
    SS.update({_id: ssDoc._id}, {$set: {drm: "2"}});
  });
}


var siparisEkle = (eeItem) => {
  console.log("eeItem", s.strLeftBack(eeItem._id, "_"));
  let gb = _.groupBy([eeItem, eeItem], function (itm) {
      return s.strLeftBack(itm._id, "_");
    });

  console.log("eeItem gb", Object.keys(gb));
  //console.log("eeItem1", s.join("ABC", ...eeItem.secim.cst));
  console.log("eeItem2", eeItem.secim.cst.filter( (val) => { if (val.length > 0) return val; }).join(', '));

  let ddId = s.strLeftBack(eeItem._id, "_");
  let ad = eeItem.ad + ", " + eeItem.secim.cst.filter( (val) => { if (val.length > 0) return val; }).join(', ');
  SS.insert({
    ddId,
    usrId: "can1",
    drm: "1",
    ad,
    fyt: eeItem.secim.fyt,
    icn: eeItem.icindekiler
  });

  let gbSS = _.groupBy(SS.find().fetch(), function (itm) {
      return itm.ddId;
    });

  _ .chain( SS.find().fetch() )
    .groupBy( (itm) => {
      itm.sener = itm.ddId;
      return itm.ddId;
      })
    .map( (mi) => {
      console.log("AAA", mi);    // [Dukkan siparisi]
      mi.map( (m) => {
        console.log("BBB", m);   // Dukkan siparisi
      })
    });

    Object.keys(gbSS).map( (mi) => {
      [mi].map( (m) => {
        console.log("m", gbSS[m][0].ad);
      })
    });

  console.log("gbSS", gbSS);
  console.log("gbSS", Object.keys(gbSS));
};

Reducers.bbDocs = function bbDocs(state = [], action) {
  switch (action.type) {
    case 'BB_CHANGED':
      let docs = _.clone(action.collection); // clone to prevent mutating action!!
      return docs;
    default:
      return state;
  }
}

Reducers.ddDocs = function ddDocs(state = [], action) {
  switch (action.type) {
    case 'DD_CHANGED':
      let docs = _.clone(action.collection); // clone to prevent mutating action!!
      return docs;
    default:
      return state;
  }
}

Reducers.eeDocs = function eeDocs(state = [], action) {
  switch (action.type) {
    case 'EE_CHANGED':
      let docs = _.clone(action.collection); // clone to prevent mutating action!!
      return docs;
    default:
      return state;
  }
}

Reducers.ssDocs = function ssDocs(state = [], action) {
  switch (action.type) {
    case 'SS_CHANGED':
      let docs = _.clone(action.collection); // clone to prevent mutating action!!
      return docs;
    default:
      return state;
  }
}
