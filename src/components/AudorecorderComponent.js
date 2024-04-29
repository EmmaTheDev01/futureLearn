// AudioRecorderComponent.jsx
import React from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';
import { useAudioRecorder } from 'react-audio-voice-recorder';

const AudioRecorderComponent = ({ onRecordingComplete }) => {
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
        if (onRecordingComplete) {
            onRecordingComplete(blob);
        }
    };

    useAudioRecorder();

    return (
        <div className='recorder'>
            <AudioRecorder
                onRecordingComplete={addAudioElement}
                audioTrackConstraints={{
                    noiseSuppression: true,
                    echoCancellation: true,
                }}
                downloadOnSavePress={true}
                downloadFileExtension="webm"
            />
        </div>
    );
};

export default AudioRecorderComponent;
