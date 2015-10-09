App = React.createClass({
/*
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
*/
  render() {
    return (
      <div>
        <h1>yPosta.menu</h1>
        <Bolgeler />
        <Dukkanlar />
        <Emtialar />
        <Siparisler />
      </div>
    )
  }
});
