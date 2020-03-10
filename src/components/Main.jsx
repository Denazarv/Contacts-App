import React from "react";
import { ContactsList } from "./ContactsList";
import { Db } from "./db";
import Dialog from "./dialog";
import EditDialog from "./edit-dailog";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      open: false,
      openEdit: false
    };
  }

  componentDidMount() {
    this.setState({ users: Db });
  }

  onClickDelete = user => {
    let arr = this.state.users;
    const filterArr = arr.filter(
      contact => contact.fullName !== user.fullName
    );
    this.setState({
      users: filterArr
    });
  };


  renderContact() {
    return this.state.users.map(user => {
      return (
        <ContactsList
          user={user}
          onClickDelete={this.onClickDelete.bind(this, user)}
          onClickEdit={this.onClickEdit.bind(this, user)}
        />
      );
    });
  }

  onClickNewContact = () => {
    this.setState({ open: true });
  };

  onClickCancel = () => {
    this.setState({ open: false });
  };

  onClickCancelEdit = () => {
    this.setState({ openEdit: false });
  };

  onclickSave = user => {
    user.pic = "img/michael_zimber.jpg";
    user.id = Math.random();
    this.setState(prevState => ({
      users: [...prevState.users, user]
    }));
    this.setState({ open: false });
  };

  onClickSaveEdit = (user, userID, userPic) => {
    let usersArr = this.state.users;
    const index = usersArr.findIndex(contact => contact.id === userID);
    user.id = userID;
    user.pic = userPic;
    usersArr[index] = user;
    this.setState({ users: usersArr });
    this.setState({ openEdit: false, userToEdit: "" });
  };

  onClickEdit(user) {
    this.setState({ openEdit: true, userToEdit: user });
  }

  render() {
    return (
      <div style={styles.page}>
        {this.renderContact()}
        <div style={styles.btnContainer}>
          <img
            src="img/plus.png"
            style={{ width: 30, height: 30, cursor: "pointer" }}
            onClick={this.onClickNewContact}
           alt=""/>
        </div>
        <Dialog
          open={this.state.open}
          closeDialog={this.onClickCancel}
          onClickCreate={this.onclickSave}
        />
        <EditDialog
          open={this.state.openEdit}
          closeDialog={this.onClickCancelEdit}
          user={this.state.userToEdit}
          onClickSaveEdit={this.onClickSaveEdit}
        />
      </div>
    );
  }
}
const styles = {
  btnContainer: {
    width: 440,
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  page: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
};
