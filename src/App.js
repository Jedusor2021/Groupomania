import React, { useState} from 'react';
import Routes from "./components/Routes";
import { UidContext } from "./components/AppContext";

const App = () => {
  const [uid, setUid] = useState(null);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
