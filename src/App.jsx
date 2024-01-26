import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/pages/Search/Search";
import Profile from "./components/pages/Profile/Profile";
import Messages from "./components/pages/Messages/Messages";
import Notifications from "./components/pages/Notifications/Notifications";
import Settings from "./components/pages/Settings/Settings";
import { useSelector } from "react-redux";
import MobileMenuList from "./components/Header/Navigation/MobileMenu/MobileMenuList";
import {motion, AnimatePresence} from'framer-motion'
import Footer from "./components/Footer/Footer";


function App() {
  const isOpen = useSelector((state) => state.mobileMenu.isMobileMenuOpen);

  return (
    <div className="App" >
      <Header />
      <AnimatePresence>
        {
          isOpen === 'open' && 

              <MobileMenuList/>
      
        }
      </AnimatePresence>

      <main >
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
