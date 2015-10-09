Meteor.startup(function() {
  console.log("Meteor.startup");
  injectTapEventPlugin();

  trackCollection(BB, (data) => {
    console.log("bbChanged", data);
    store.dispatch(Actions.bbChanged(data));
  });

  trackCollection(DD, (data) => {
    console.log("ddChanged", data);
    store.dispatch(Actions.ddChanged(data));
  });

  trackCollection(EE, (data) => {
    console.log("eeChanged", data);
    store.dispatch(Actions.eeChanged(data));
  });

  trackCollection(SS, (data) => {
    console.log("ssChanged", data);
    store.dispatch(Actions.ssChanged(data));
  });



  React.render(
    <Provider store={store}>
      { () => <App /> }
    </Provider>,
    document.getElementById('app')
  );
});
