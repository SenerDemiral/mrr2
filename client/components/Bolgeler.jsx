Bolgeler = React.createClass({
  render() {
    var bolgeler = BB.find().fetch().map( (row) => {
      return (
        <li key={row._id}
            onClick={() => store.dispatch(Actions.bbSelect(row._id))}
            >
          { row.ad }
        </li>
      );
    });

    return (
      <div>
        <h3>Bolgeler</h3>
        { bolgeler }
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    bbDocs: state.bbDocs,
    bbId: state.userInterface.bbId,
    bbAd: state.userInterface.bbAd,
  };
};

Bolgeler = connect(mapStateToProps)(Bolgeler);
