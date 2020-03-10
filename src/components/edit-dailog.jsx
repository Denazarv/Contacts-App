import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import _ from "lodash";

export default class EditDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { open, user } = this.props;
    const userId = _.get(user, "id", "");
    const userpic = _.get(user, "pic", "");

    return (
      <div>
        <Dialog aria-labelledby="customized-dialog-title" open={open}>
          <div style={{ textAlign: "center" }}>Edit Contact</div>
          <DialogContent
            style={{ display: "flex", flexDirection: "column", width: 500 }}
          >
            <input
              name="fullName"
              defaultValue={_.get(user, "fullName", "")}
              type="string"
              placeholder="Enter  Contact full name"
              onChange={this.onChange}
              style={{ margin: 10, height: 25 }}
            />
            <input
              name="address"
              type="string"
              onChange={this.onChange}
              defaultValue={_.get(user, "address", "")}
              placeholder="Enter Contact address"
              style={{ margin: 10, height: 25 }}
            />

            <input
              name="city"
              type="string"
              onChange={this.onChange}
              placeholder="Enter city"
              defaultValue={_.get(user, "city", "")}
              style={{ margin: 10, height: 25 }}
            />
            <input
              name="workPlace"
              type="string"
              onChange={this.onChange}
              defaultValue={_.get(user, "workPlace", "")}
              placeholder="Enter Contact work place"
              style={{ margin: 10, height: 25 }}
            />
            <input
              name="phoneNumber"
              onChange={this.onChange}
              type="number"
              defaultValue={_.get(user, "phoneNumber", "")}
              placeholder="Enter Contact phone number"
              style={{ margin: 10, height: 25 }}
            />
            <input
              name="position"
              defaultValue={_.get(user, "position", "")}
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
            <button
              onClick={this.props.onClickSaveEdit.bind(
                this,
                this.state,
                userId,
                userpic
              )}
            >
              Edit
            </button>

            <button onClick={this.props.closeDialog}>Cancel</button>
          </div>
        </Dialog>
      </div>
    );
  }
}
