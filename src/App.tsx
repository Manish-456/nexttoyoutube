import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import VideoDetail from "./components/VideoDetail";

const App = () => {
  return (
    <>
      <Router>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route  path="/" element={<Feed />}/>
            <Route path="searchResult/:searchQuery" element={<SearchResult />}/>
            <Route path="video/:id" element={<VideoDetail />}/>
          </Routes>
        </div>{" "}
      </Router>
    </>
  );
};

export default App;
