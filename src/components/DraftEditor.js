import { useState } from "react";

function DraftEditor({ addDraft }) {

    const [text, setText] = useState("");

    const handleSave = () => {

        if (text.trim() === "") {
            alert("Please write something!");
            return;
        }

        const draft = {
            id: Date.now(),
            content: text,
            created: new Date().toLocaleString(),
        };

        addDraft(draft);

        setText("");
    };

    return (
        <div className="editor">

            <h2>Create Draft</h2>

            <textarea
                rows="6"
                placeholder="Write your post here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <br />

            <button onClick={handleSave}>
                Save Draft
            </button>

        </div>
    );
}

export default DraftEditor;