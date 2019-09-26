import React, { Component } from "react";

class Dashboard2 extends React.Component {
  render() {
    return (
      // <Page
      //   className="DashboardPage"
      //   title="Dashboard"
      //   >

      //   <InvokerComponent />

      <MainComponent />

      // </Page>
    );
  }
}

class MainComponent extends Component {
  render() {
    return <div>nuevo aqui</div>;
  }
}

export { Dashboard2 };
