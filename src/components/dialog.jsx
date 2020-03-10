import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
export default class CustomizedDialogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { open } = this.props;
    return (
      <div>
        <Dialog aria-labelledby="customized-dialog-title" open={open}>
          <div style={{ textAlign: "center" }}>Add Contact</div>
          <DialogContent
            style={{ display: "flex", flexDirection: "column", width: 500 }}
          >
            <input
              name="fullName"
              type="string"
              placeholder="Enter  Contact full name"
              onChange={this.onChange}
              style={{ margin: 10, height: 25 }}
            />
            <input
              name="address"
              type="string"
              onChange={this.onChange}
              placeholder="Enter Contact address"
              style={{ margin: 10, height: 25 }}
            />
                 <input
              name="city"
              type="string"
              onChange={this.onChange}
              placeholder="Enter city"
              style={{ margin: 10, height: 25 }}
            />
            <input
              name="workPlace"
              type="string"
              onChange={this.onChange}
              placeholder="Enter Contact work place"
              style={{ margin: 10, height: 25 }}
            />
            <input
              name="phoneNumber"
              onChange={this.onChange}
              type="number"
              placeholder="Enter Contact phone number"
              style={{ margin: 10, height: 25 }}
            />
            <input
              name="position"
              type="string"
              onChange={this.onChange}
              placeholder="Enter Contact job position"
              style={{ margin: 10, height: 25 }}
            />
          </DialogContent>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 10
            }}
          >
            {this.props.user ? (
              <button onClick={this.props.onClickCreate.bind(this, this.state)}>
                Edit
              </button>
            ) : (
              <button onClick={this.props.onClickCreate.bind(this, this.state)}>
                Create
              </button>
            )}
            <button onClick={this.props.closeDialog}>Cancel</button>
          </div>
        </Dialog>
      </div>
    );
  }
}
