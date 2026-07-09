import "./App.css";
import ProfileCard from "./components/ProfileCard";
import profile from "./data/profile";

function App() {
  return (
    <div className="app">
      <ProfileCard profile={profile} />
    </div>
  );
}

export default App;