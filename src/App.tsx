import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Tabs from "./components/Tabs/Tabs";
import TabPanel from "./components/TabPanel/TabPanel";
import { tabLists } from "./data/tab-lists";

export default function App() {
  return (
    <Tabs tabLists={tabLists}>
      <Routes>
        {tabLists.map((tabList) => (
          <Route
            key={tabList.tabKey}
            path={tabList.tabKey}
            element={<TabPanel title={tabList.title} />}
          />
        ))}
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </Tabs>
  );
}
