function DraftCard({
    draft,
    editDraft,
    removeDraft
}) {


    return (

        <div className="card">


            <h3>Draft</h3>


            <p>
                {draft.content}
            </p>


            <small>
                Created: {draft.date}
            </small>


            <br />


            <button
                onClick={() =>
                    editDraft(draft)
                }
            >
                Edit
            </button>



            <button
                onClick={() =>
                    removeDraft(draft.id)
                }
            >
                Delete
            </button>


        </div>

    );


}


export default DraftCard;