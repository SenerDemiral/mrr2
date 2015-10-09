Dukkanlar = React.createClass({
  render() {
    console.log("Dukkanlar.render->", this.props)
    let bbId = this.props.bbId; // "mgl.bdr.gmb"

    let dukkanlar = DD.find().fetch()
      .filter ((row) => {
        return (row.sBBids.indexOf(bbId) >= 0);
      })
      .map( (row) => {
        return (
          <li key={row._id}
              onClick={() => store.dispatch(Actions.ddSelect(row._id))}
              >
            { row.ad }
          </li>
        );
      });

    return (
      <div>
        <h3>Dukkanlar</h3>
        { dukkanlar }
      </div>
    )
  }
});


// Dukkanlar neyi bilmek ister?
// Secilen bolgeyi
function mapStateToProps(state) {
  return {
    ddDocs: state.ddDocs,
    ddId: state.userInterface.ddId,
    ddAd: state.userInterface.ddAd,

    bbId: state.userInterface.bbId,
    bbAd: state.userInterface.bbAd,
  };
};

Dukkanlar = connect(mapStateToProps)(Dukkanlar);
