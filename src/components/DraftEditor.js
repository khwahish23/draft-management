import { useState } from "react";


function DraftEditor({ addDraft }) {


    const [text, setText] = useState("");



    const save = () => {


        if (text.trim() === "") {
            alert("Write something first");
            return;
        }



        const newDraft = {

            id: Date.now(),

            content: text,

            date: new Date()
                .toLocaleString()

        };


        addDraft(newDraft);


        setText("");

    };



    return (

        <div className="editor">


            <h2>Create Post Draft</h2>


            <textarea

                placeholder="Write your post..."

                value={text}

                onChange={(e) =>
                    setText(e.target.value)
                }

            />


            <br />


            <button onClick={save}>
                Save Draft
            </button>


        </div>

    );

}


export default DraftEditor;