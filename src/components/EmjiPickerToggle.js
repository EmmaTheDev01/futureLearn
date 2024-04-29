import React, { useState } from 'react';
import './messagebody.css';
import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';

const EmojiPickerToggle = () => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(prevState => !prevState);
    };

    return (
        <div className='emoji'>
            <span id='emoji_picker' onClick={toggleEmojiPicker}><BsEmojiSmile /></span>
            {showEmojiPicker && <span className='picker'><EmojiPicker /></span>}
        </div>
    );
};

export default EmojiPickerToggle;
