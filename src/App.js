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




  // Load drafts when website opens

  useEffect(() => {

    loadDrafts();

  }, []);





  const loadDrafts = async () => {


    const data = await fetchDrafts();


    setDrafts(data);


  };





  // Create

  const addDraft = async (draft) => {


    await saveDraft(draft);


    loadDrafts();


  };





  // Delete

  const removeDraft = async (id) => {


    await deleteDraft(id);


    loadDrafts();


  };





  // Update

  const editDraft = async (draft) => {


    const updatedText = prompt(
      "Edit your draft",
      draft.content
    );



    if (updatedText === null)
      return;




    const updatedDraft = {

      ...draft,

      content: updatedText

    };




    await updateDraft(updatedDraft);



    loadDrafts();



  };




  return (


    <div className="App">


      <h1>
        Draft Management System
      </h1>



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