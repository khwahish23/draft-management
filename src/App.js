import { useEffect, useState } from "react";

import DraftEditor from "./components/DraftEditor";

import DraftList from "./components/DraftList";

import {

  fetchDrafts,

  saveDraft,

  updateDraft,

  deleteDraft

}

  from "./services/mockApi";

import "./App.css";

function App() {

  const [drafts, setDrafts] = useState([]);

  useEffect(() => {

    loadDrafts();

  }, []);

  const loadDrafts = async () => {

    const data = await fetchDrafts();

    setDrafts(data);

  };

  const addDraft = async (draft) => {

    await saveDraft(draft);

    loadDrafts();

  };

  const removeDraft = async (id) => {

    await deleteDraft(id);

    loadDrafts();

  };

  const editDraft = async (draft) => {

    const updated = prompt(

      "Edit Draft",

      draft.content

    );

    if (updated === null)

      return;

    await updateDraft({

      ...draft,

      content: updated

    });

    loadDrafts();

  };

  return (

    <div className="App">

      <h1>Draft Management System</h1>

      <DraftEditor

        addDraft={addDraft}

      />

      <hr />

      <DraftList

        drafts={drafts}

        editDraft={editDraft}

        removeDraft={removeDraft}

      />

    </div>

  );

}

export default App;