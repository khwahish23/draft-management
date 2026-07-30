// Simulate network delay
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

// Get all drafts
export const fetchDrafts = async () => {
    await delay(1000);

    const drafts = JSON.parse(localStorage.getItem("drafts")) || [];

    return drafts;
};

// Save a new draft
export const saveDraft = async (draft) => {
    await delay(1000);

    let drafts = JSON.parse(localStorage.getItem("drafts")) || [];

    drafts.push(draft);

    localStorage.setItem("drafts", JSON.stringify(drafts));

    return draft;
};

// Update an existing draft
export const updateDraft = async (updatedDraft) => {
    await delay(1000);

    let drafts = JSON.parse(localStorage.getItem("drafts")) || [];

    drafts = drafts.map((draft) =>
        draft.id === updatedDraft.id ? updatedDraft : draft
    );

    localStorage.setItem("drafts", JSON.stringify(drafts));

    return updatedDraft;
};

// Delete a draft
export const deleteDraft = async (id) => {
    await delay(1000);

    let drafts = JSON.parse(localStorage.getItem("drafts")) || [];

    drafts = drafts.filter((draft) => draft.id !== id);

    localStorage.setItem("drafts", JSON.stringify(drafts));
};