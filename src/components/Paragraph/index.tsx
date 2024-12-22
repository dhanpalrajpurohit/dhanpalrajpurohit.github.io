import { useState } from "react";

const index = ({ text, maxLength = 100 }: { text: string, maxLength: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <p>
                {isExpanded ? text : `${text.slice(0, maxLength)}...`}
            </p>
            <button onClick={toggleReadMore}>
                {isExpanded ? "Read Less" : "Read More"}
            </button>
        </div>
    )
}

export default index
