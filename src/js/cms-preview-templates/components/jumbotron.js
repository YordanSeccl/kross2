import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title, subtitle} = this.props;
    return <div>
      <div className="pv5 pv6-l ph3 bg-center cover" style={{
        backgroundImage: image && `url(${image})`
      }}>
        <div className="mw7 center ph3">
          <div className="db mb3">
            <div className="mw7 relative bg-fix-primary mb3">
              <h1 className="f2 f1-l l di lh-title mb3 white mw6">
                { title }
              </h1>
            </div>
            <div className="mw7 relative bg-fix-primary">
              {subtitle && <p className="l f4 di lh-title mb3 white mw6">{ subtitle }</p>}
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}