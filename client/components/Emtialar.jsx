Emtialar = React.createClass({
  render() {
    let ddId = this.props.ddId; //"mgl.bdr.gmb:lztDnr:";
    console.log("DUKKAN", ddId);
    if (! ddId)
      return (
        <div>
          <h3>Emtialar</h3>
        </div>
      )

    let emtialar = EE.find().fetch()
      .filter ((row) => {
        return (row._id.startsWith(ddId) && row.varmi);
      })
      .map( (row) => {
        console.log(row);
        return (
          <Emtia {...row} key={row._id}/>
        )
      });

    return (
      <div>
        <h3>Emtialar</h3>
        { emtialar }
      </div>
    )
  }
});
//  onClick={() => store.dispatch(Actions.eeSelect(sec))}
//  onClick={ (si) => that.handleClick(sec) }

Emtia = React.createClass({
  getInitialState() {
    return {
      data: this.props.icn.map( (itm) => {
        return {
          ...itm
        }
      })
    }
  },
  handleClick: function(secim) {
    let icindekiler = this.state.data
    console.log('You clicked: ', secim, icindekiler);
    store.dispatch(Actions.eeSelect(
      {_id: this.props._id,
        ad: this.props.ad,
        secim,
        icindekiler}))
  },

  render: function() {
    var that = this;
    var secimler = this.props.sec.map(function(sec, si) {
      if (sec.varmi) {
        var cesitler = sec.cst.map(function(cst) {
          return (
            <td key={cst}>
              {cst}
            </td>
          );
        });
        return (
          <tr key={sec.idx} >
            <td>
              <input
                type="button"
                key={sec.idx}
                value="Focus the text input"
                onClick={ that.handleClick.bind(that, sec) }
              />
              </td>
            { cesitler }
            <td>{sec.fyt} TL</td>
          </tr>
        );
      }
    });

    var checks = this.state.data.map(function(d) {
      return (
        <input key={d.ad} type="checkbox" checkedLink={this.linkCheckbox(d)}>
        {d.ad}
        </input>
      );
    }.bind(this));

    return (
      <div>
        <h4>{ this.props.ad }</h4>
        { checks }
        <table>
            { secimler }
        </table>
      </div>
    );
  },

  changeCheckForId: function(ad, varmi) {
    this.setState(
      {
        data: this.state.data.map(function(d) {
            var newSelected = (d.ad === ad ? varmi : d.varmi);
            return {ad: d.ad, varmi: newSelected};
        }
    )});
  },

  linkCheckbox: function(d) {
    return {
       value: d.varmi,
       requestChange: function(varmi) {
           this.changeCheckForId(d.ad, varmi);
       }.bind(this)
    };
  },
});

// Emtialar neyi bilmek ister?------------------------------------------
// Secilen dukkani
function mapStateToProps(state) {
  return {
    eeDocs: state.eeDocs,

    ddId: state.userInterface.ddId,
    ddAd: state.userInterface.ddAd,
  };
};
//     eeItem: state.userInterface.eeItem,

Emtialar = connect(mapStateToProps)(Emtialar);
