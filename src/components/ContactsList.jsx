import React from "react";

export class ContactsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={{ display: "flex" }}>
          <div style={styles.avatarContainer}>
            <img
              src={this.props.user.pic}
              style={{ borderRadius: 100 , width: 110, marginLeft: 20, marginTop: 5}}
              alt=""
            />
            <div style={styles.positionText}>{this.props.user.position}</div>
          </div>

          <div style={{ marginLeft: 35 , paddingTop: 5}}>
            <div style={styles.nameText}>{this.props.user.fullName}</div>
            <br/>
            <img src={"/img/point.png"} alt=""/>
            <div style={styles.workText}>{this.props.user.workPlace}</div>
            <div> {this.props.user.address}</div>
            <div>{this.props.user.city}</div>
            <div>P: {this.props.user.phoneNumber}</div>
          </div>
        </div>
        <div style={{ alignSelf: "flex-end" }}>
          <img
            src={"/img/edit.png"}
            style={{ width: 12, marginRight: 5, cursor: "pointer" }}
            onClick={this.props.onClickEdit}
           alt=""/>
          <img
            src={"/img/delete.png"}
            style={{ width: 12, cursor: "pointer" }}
            onClick={this.props.onClickDelete}
           alt=""/>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    color: "gray",
    fontSize: 11,
    backgroundColor: "white",
    width: 415,
    display: "flex",
    flexDirection: "column",
    margin: 10,
    padding: 10
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  positionText: {
    fontSize: 12,
    fontWeight: 500
  },
  nameText: {
    fontSize: 16,
    fontWeight: 700
  },
  workText: {
    paddingTop: 5,
    fontSize: 14,
    fontWeight: 700
  }
};
