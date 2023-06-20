import React, { Component } from "react";
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";



  const stylePage = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    bottom: "5vh",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "row",
    gap: 20
  }
  const styleBtn = {
    width: 80,
    padding: 10,
    borderRadius: 20,
    border: "transparent",
    backgroundColor: "goldenrod",
  }

export class App extends Component {
 state={
  taskNumber: 1
  }
  
  nextPage = (e) => {
    this.setState((prevState) => {
      if (prevState.taskNumber === 4) {
        return
      }
      return { taskNumber: prevState.taskNumber + 1 }
   })
  }
  
   prevPage = (e) => {
     this.setState((prevState) => {
       if (prevState.taskNumber === 1) {
        return
       }
      return { taskNumber: prevState.taskNumber - 1 }
   })
 }

  render() {
    const {taskNumber} = this.state
    return <>
    {this.state.taskNumber === 1 && <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />}
    {taskNumber === 2 && <Statistics title="Upload stats" stats={data} />}
    {taskNumber === 3 && <FriendList friends={friends} />}
      {taskNumber === 4 && <TransactionHistory items={transactions} />}

 
      <div style={stylePage}>
        <button style={styleBtn} id='button-p' disabled={taskNumber === 1} onClick={this.prevPage}>Prev</button>
                  <p>{taskNumber}</p>
        <button style={styleBtn} id='button-n' disabled={taskNumber === 4} onClick={this.nextPage}>Next</button>
      </div>
  </>
}
};

