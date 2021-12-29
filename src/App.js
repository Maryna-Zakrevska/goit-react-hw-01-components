import "./App.css";
import user from "./components/Profile/user.json";

import Profile from "./components/Profile/Profile";

import data from "./components/Statistics/data.json";

import Statistics from "./components/Statistics/Statistics";

import friends from "./components/Friends/friends.json";

import FriendList from "./components/Friends/FriendList";

import items from "./components/Transactions/transactions.json";

import TransactionHistory from "./components/Transactions/TransactionHistory";

function App() {
  return (
    <div className="App">
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
}

export default App;
