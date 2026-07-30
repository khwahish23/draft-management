// Fake backend API using localStorage

const delay = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
};


// READ - Get all drafts
export const fetchDrafts = async () => {

    await delay(1000);

    const drafts = JSON.parse(
        localStorage.getItem("drafts")
    ) || [];

    return drafts;
};


// CREATE - Save new draft
export const saveDraft = async (draft) => {

    await delay(1000);

    let drafts = JSON.parse(
        localStorage.getItem("drafts")
    ) || [];


    drafts.push(draft);


    localStorage.setItem(
        "drafts",
        JSON.stringify(drafts)
    );


    return draft;
};


// UPDATE - Edit draft
export const updateDraft = async (updatedDraft) => {

    await delay(1000);


    let drafts = JSON.parse(
        localStorage.getItem("drafts")
    ) || [];


    drafts = drafts.map((draft) => {

        if (draft.id === updatedDraft.id) {
            return updatedDraft;
        }

        return draft;

    });


    localStorage.setItem(
        "drafts",
        JSON.stringify(drafts)
    );


    return updatedDraft;
};



// DELETE - Remove draft
export const deleteDraft = async (id) => {


    await delay(1000);


    let drafts = JSON.parse(
        localStorage.getItem("drafts")
    ) || [];


    drafts = drafts.filter(
        (draft) => draft.id !== id
    );


    localStorage.setItem(
        "drafts",
        JSON.stringify(drafts)
    );


};