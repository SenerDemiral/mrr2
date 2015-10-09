// action creators are functions that take a param and return
// an 'action' that is consumed by a reducer.

Actions = {};

// Selections +++++++++++++++++++++++++++++++++++++++
// used when a Bolge selected
Actions.bbSelect = function bbSelect(bbId) {
  let bbDoc = BB.findOne(bbId);
  let bbAd = bbDoc.ad || "N/A";

  return {
    type: 'BB_SELECT',
    bbId,
    bbAd
  };
};

// used when a Dukkan selected
Actions.ddSelect = function ddSelect(ddId) {
  let ddDoc = DD.findOne(ddId);
  let ddAd = ddDoc.ad || "N/A";

  return {
    type: 'DD_SELECT',
    ddId,
    ddAd
  };
};
// used when a Emtia selected
Actions.eeSelect = function eeSelect(eeItem) {
  console.log("Actions.eeSelect", eeItem)
  return {
    type: 'EE_SELECT',
    eeItem
  };
};

// used when a Emtia selected
Actions.ssSiparisVer = function ssSiparisVer(ddId) {
  console.log("Actions.ssSiparisVer", ddId)
  return {
    type: 'SS_SIPARISVER',
    ddId
  };
};
// Selections ---------------------------------------


// Collection Changes +++++++++++++++++++++++++++++++
// used when a mongo BB (Bolgeler) collection changes
Actions.bbChanged = function bbChanged(newDocs) {
  return {
    type: 'BB_CHANGED',
    collection: newDocs
  };
};

// used when a mongo DD (Dukkanlar) collection changes
Actions.ddChanged = function ddChanged(newDocs) {
  return {
    type: 'DD_CHANGED',
    collection: newDocs
  };
};

// used when a mongo EE (Emtialar) collection changes
Actions.eeChanged = function eeChanged(newDocs) {
  return {
    type: 'EE_CHANGED',
    collection: newDocs
  };
};

// used when a mongo SS (Siparisler) collection changes
Actions.ssChanged = function ssChanged(newDocs) {
  return {
    type: 'SS_CHANGED',
    collection: newDocs
  };
};
// Collection Changes ------------------------------------
