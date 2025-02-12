import { useRef, useState } from 'react';
import './App.css';
import TextArea from '../utils/TextArea';
import Button from '../utils/Button';

// NOT SECURE TO HAVE THIS HERE
const API_KEY = 'a9c2bdd481b14add93d6dc25aff683ed';

export default function App() {
    const text = useRef(); // Points to the text in the input element

    // Converts the input text to speech
    async function handleSpeech() {
        // Get the text to convert
        const textToConvert = text.current.value;

        try {
            // Make the request
            const response = await fetch(
                `http://api.voicerss.org/?key=${API_KEY}&hl=en-us&c=mp3&src=${textToConvert}`
            );

            //check if the response is okay
            if (!response.ok) {
                throw new Error('Response not ok!');
            }

            // Convert the response to a blob (audio file)
            const audioBlob = await response.blob();

            // Create a temporary URL for the audio
            const audioURL = URL.createObjectURL(audioBlob);

            // Create an Audio object and play it
            const audio = new Audio(audioURL);
            audio.play();
        } catch (err) {
            console.error('Error while converting text to speech', err);
        }
    }

    return (
        <main>
            <TextArea ref={text} />
            <Button onConvert={handleSpeech} title={'Convert'} />
        </main>
    );
}
