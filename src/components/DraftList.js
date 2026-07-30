import DraftCard from "./DraftCard";


function DraftList({
    drafts,
    editDraft,
    removeDraft
}) {


    return (

        <div>


            <h2>
                Saved Drafts
            </h2>



            {

                drafts.length === 0 ?

                    <p>
                        No drafts available
                    </p>


                    :

                    drafts.map((draft) => (


                        <DraftCard

                            key={draft.id}

                            draft={draft}

                            editDraft={editDraft}

                            removeDraft={removeDraft}

                        />


                    ))


            }



        </div>


    );


}


export default DraftList;