import { useState } from "react";

export interface CommentInputProps {
    onSubmit: (text: string) => void;
}

export const CommentInput: React.FC<CommentInputProps> = ({ onSubmit }) => {
    const [text, setText] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(text);
        setText("");
    };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center align-center p-4 border rounded-lg shadow-md m-4">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="gap-2 mb-3 p-2"
        placeholder="Type your testimony here"/>
        <button className="border p-3 m-3 w-20 border rounded-md bg-white justify-center align-center hover:bg-blue/10">Submit</button>
    </form>
  );
};
