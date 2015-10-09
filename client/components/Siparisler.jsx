//        sips.push(<th>{ mi[0].ddId }</th>)
//               <td><button style={{width: "100%", height: "100%"}}><i className="material-icons" style={{fontSize: "8px"}}>clear</i></button></td>

Siparisler = React.createClass({
  render() {
    console.log("Siparisler.render->", this.props)
    let uuId = this.props.bbId; // "mgl.bdr.gmb"
    let that = this;

    let gbSS = _.groupBy(SS.find().fetch(), function (itm) {
        return itm.ddId;
      });

    let siparisler = Object.keys(gbSS).map( (ddId) => {
      let itms = gbSS[ddId].map( (itm) => {
        let icns = itm.icn.map(function(icn) {
          return (
            <input key={icn.ad} type="checkbox" checkedLink={that.linkCheckbox(icn)}>
              {icn.ad}
            </input>
          );
        });

        let drm;
        
        if (itm.drm === "0") {
          drm = "İptal";
        }
        else if (itm.drm === "1") {
          drm = "OnayBekliyor";
        }
        else if (itm.drm === "2") {
          drm = "İletildi";
        }
        else if (itm.drm === "4") {
          drm = "Hazırlanıyor";
        }
        else if (itm.drm === "8") {
          drm = "Göderildi";
        }
        return (
          <tr key={itm._id}>
            <td><i className="material-icons" style={{fontSize: "10px"}}>clear</i></td>
            <td>{ itm.ad }</td>
            <td>{ icns }</td>
            <td>{ itm.fyt }</td>
            <td>{ drm }</td>
          </tr>
        );
      });
      console.log("itms", itms);
      return (
        <div>
          <div key={ddId}>
            <button
              onClick={ () => { store.dispatch(Actions.ssSiparisVer(ddId)) } }
              >
              {ddId} Sipariş ver...
            </button>
          </div>
          <table>
            { itms }
          </table>
          <br />
      </div>
      );
    });

    return (
      <div>
        <h3>Siparişler</h3>
          { siparisler }
      </div>
    )
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



function mapStateToProps(state) {
  return {
    ssDocs: state.ssDocs
  };
};

Siparisler = connect(mapStateToProps)(Siparisler);



Siparisler2 = React.createClass({
  render() {
    console.log("Siparisler.render->", this.props)
    let uuId = this.props.bbId; // "mgl.bdr.gmb"
    let that = this;

    let gbSS = _.groupBy(SS.find().fetch(), function (itm) {
        return itm.ddId;
      });

    let sips = Object.keys(gbSS).map( (ddId) => {
      console.log("gbSS->mi", ddId, [ddId]);
      let ducs = [ddId].map( (m) => {
        console.log("mmmmmm", m, gbSS[m]);
        let itms = gbSS[m].map( (itm) => {
          return (
            <tr>
              <td>{ itm.ad }</td>
              <td>{ itm.fyt }</td>
            </tr>
          );
        });
        console.log("itms", itms);
        return (
          <div>
            <div>{ddId}</div>
            <table>
              { itms }
            </table>
            <br />
        </div>
        );
      });
      console.log("ducss", ducs);
      return ({ ducs })
    });


//    let sipsm = [];
    /*
      _.chain( SS.find().fetch() )
      .groupBy( (itm) => {
        sipsm.push(<div>{itm.ddId}</div>);

        return itm.ddId;
        })
      .map( (mi) => {
        console.log("AAA", mi);    // [Dukkan siparisi]
        //sips.push(<table>)
        //sips.push(<th>aaaaaaaaaaaa</th>)
        let sipsd = [];
        mi.map( (mm) => {
          console.log("B", mm);    // [Dukkan siparisi]
          sipsd.push (
            <tr key={ mm._id } >
              <td>{ mm.ad }</td>
              <td>{ mm.fyt }</td>
            </tr>
            )
        });
        sipsm.push(
          <div>{sipsd.length}
          <table>
            { sipsd }
          </table>
          </div>
        );
      });
      */

    let siparisler = SS.find().fetch()
      .map( (row) => {
        let icindekiler = row.icn.map(function(icn) {
          return (
            <input key={icn.ad} type="checkbox" checkedLink={that.linkCheckbox(icn)}>
              {icn.ad}
            </input>
          );
        });

        return (
          <tr key={row._id} >
            <td>{ row.ad }</td>
            <td>{ row.fyt }</td>
            <td className="fs10">{ icindekiler }</td>
          </tr>
        );
      });

    return (
      <div>
        <h3>Siparisler</h3>
          { sips }
      </div>
    )
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
