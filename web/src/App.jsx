import React from "react";

import { CenteredTabs } from './component/Tabs';
import ViewPages from './page/ViewPages';
import DownloadsPage from './page/DownloadsPage'
import UsersPage from "./page/UsersPage";

function App() {
  return (
    <div>
    <CenteredTabs labels={[
      // "Logs",
      "Views",
      "Downloads",
      "Users",
    ]}>
      {/* <p>test</p> */}
      <ViewPages></ViewPages>
      <DownloadsPage></DownloadsPage>
      <UsersPage></UsersPage>
      {/* <p>test</p> */}
      {/* <p>test</p> */}
    </CenteredTabs>
  </div>
  );
}

export default App;
