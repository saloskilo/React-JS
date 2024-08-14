import React from "react";
import { useState } from "react";

const Textarea = (props) => {
    const [text, setText] = useState("");

    let handleChange = (e) => {
        // console.log("Handle on Change");
        setText(e.target.value);
    };
    let toUpperCase = () => {
        // console.log("UpperCase");
        let newText = text.toLocaleUpperCase();
        setText(newText);
    };
    let toLowerCase = () => {
        // console.log("LowerCase");
        let newText = text.toLocaleLowerCase();
        setText(newText);
    };
    let clear = () => {
        let newText = "";
        setText(newText);
    };
    let speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    let reverseText = () => {
        let newText = text.split('').reverse().join('');
        return setText(newText);
    };
    let replaceText = () => {
       var replace= prompt("Word to Replace: ");
       var replaceWith= prompt("Word to Replace with: ");
        let newText = text.replace(replace, replaceWith);
        setText(newText);
    };
    let encodeToBase64 = () => {
        let newText = btoa(text);
        setText(newText);
       
     };


    return (
        <>
            <div className=" container form-group mt-3">
                <h1 className="text-center">{props.heading}</h1>
                <textarea
                    value={text}
                    onChange={handleChange}
                    className="form-control"
                    id=""
                    rows="4"
                    placeholder="Type Something Here!"
                ></textarea>
            </div>

            <div id="btnContainer" className="container mt-3 d-flex justify-content-between flex-wrap">
                <button onClick={toUpperCase} className="btn btn-primary ">ToUpperCase</button>

                <button onClick={toLowerCase} className="btn btn-primary "  >ToLowerCase</button>

                <button onClick={clear} className="btn btn-primary ">Clear</button>

                <button onClick={speak} className="btn btn-primary ">Speak</button>

                <button onClick={reverseText} className="btn btn-primary">Reverse Text</button>

                <button onClick={replaceText} className="btn btn-primary">Replace Text</button>

                <button onClick={encodeToBase64} className="btn btn-primary">Encode Base64</button>

            </div>

            <div className="container mt-3 ">
                <h2>Your Text Summary</h2>
                <p><strong>{text.split(' ').length - 1}</strong> words and <strong>{text.length}</strong> Characters</p>
                <p><strong>{0.008 * text.split(' ').length}</strong> Minutes to Read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
};

export default Textarea;
