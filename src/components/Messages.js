import React from 'react'
import './messages.css'
import MessageBox from './MessageBox'
const Messages = () => {
    return (
        <div className='all_messages'>
            <div className='search_container'>
                <input type='text' className='search' name='search' placeholder='Search conversation' />
            </div>
            <MessageBox
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSUVGkHICq3bwbD4j36gzGi1mLQsyKGW_E3UJAm5neg&s"
                name="Emille"
                message="Hello, How are you?"
                count="2"
                time="03:04"
                zone="PM"
            />
            <MessageBox
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSUVGkHICq3bwbD4j36gzGi1mLQsyKGW_E3UJAm5neg&s"
                name="Kwizera John"
                message="I think we should do this in a group"
                count="1"
                time="09:030"
                zone="AM"
            />
            <MessageBox
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSUVGkHICq3bwbD4j36gzGi1mLQsyKGW_E3UJAm5neg&s"
                name="Habumugisha"
                message="What are your thoughts on this?"
                count="4"
                time="11:030"
                zone="AM"
            />
            <MessageBox
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSUVGkHICq3bwbD4j36gzGi1mLQsyKGW_E3UJAm5neg&s"
                name="Rukundo"
                message="Have you checked your mail box"
                count="1"
                time="08:12"
                zone="PM"
            />
            <MessageBox
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSUVGkHICq3bwbD4j36gzGi1mLQsyKGW_E3UJAm5neg&s"
                name="Mutesi Annet"
                message="Done"
                count="1"
                time="08:24"
                zone="AM"
            />
            <MessageBox
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSUVGkHICq3bwbD4j36gzGi1mLQsyKGW_E3UJAm5neg&s"
                name="Siribobo"
                message="Idk if you're right!"
                count="2"
                time="08:12"
                zone="PM"
            />
            <MessageBox
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSUVGkHICq3bwbD4j36gzGi1mLQsyKGW_E3UJAm5neg&s"
                name="Mutoni"
                message="I see myself using this method"
                count="6"
                time="05:42"
                zone="PM"
            />
            <MessageBox
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSUVGkHICq3bwbD4j36gzGi1mLQsyKGW_E3UJAm5neg&s"
                name="Tracy"
                message="Combine them together"
                count="1"
                time="00:02"
                zone="AM"
            />
        </div>
    )
}

export default Messages