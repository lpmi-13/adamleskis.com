import React from 'react';
import ModalFrame from './ModalFrame';

type ProjectIdeasModalProps = {
    altText: string;
    imageNameWebP: string;
    modalId: string;
    onClose: () => void;
};

const ProjectIdeasModal = ({ altText, imageNameWebP, modalId, onClose }: ProjectIdeasModalProps) => {
    return (
        <ModalFrame modalId={modalId} onClose={onClose} title="Project Ideas">
            <img
              src={imageNameWebP}
              className="img-responsive img-centered"
              alt={altText}
              width="900"
              height="650"
              loading="lazy"
              decoding="async"
            />
            <p><strong>Some of the future project ideas I'm interested in:</strong></p>
            <ul className="list">
                <li><b>Kinesthetic Stress native app</b> - users respond to visual (and possibly auditory) input by shaking the device corresponding to appropriate stress. This would be focused on students feeling the stresses in either written or spoken text, and would be another possible avenue through which they could practise predicting and performing the stress-timed rhythm of English speech.
                </li>
                <li><b>Pitch Stretching native app</b> - users record their voices and hear their recording played back to them with exaggerated pitch peaks/valleys. This would be primarily for students from cultures where smaller octave ranges are common, and the idea is to have students hear themselves more closely approximating vocal range in English.
                </li>
                <li><b>Academic English Counterargument web app</b> - users input a text and receive feedback, based on sentiment analysis, of both the connotation (positive or negative?) and strength (very positive or only slightly positive?) on the text. Using this, the students will be prompted to choose one of the appropriate structures to preface an acknowledgement of counterarguments (while.../although.../etc) and then be prompted to revise their text to ensure that the the two clausal elements have opposite connotations, and that the first clause is weaker than the second clause.
                </li>
                <li><b>Academic Summary web app</b> - users are given authentic sentences (possibly also longer texts), and are asked to summarise them. Using Python's NLTK package, the app compares the original text to the student's summary, as well as what an expected summary might look like based on sentence compression algorithms. The student receives feedback showing them how well they did, with respect to content words (usually retained in summaries) vs. function words (usually deleted in summaries).
                </li>
                <li><b>Communicative Treasurehunt web app</b> - similar to the Traces app for iOS, users set points on a map where clues are left, and other users need to physically move to where these clues are left to receive the subsequent clues. Unlike Traces, it's not possible to see all the clues on the map beforehand. Clues are either photographs of an area or possibly a sound recording of an area, meant to elicit students showing/playing the clue when asking somebody for directions or if they know where this place is. In this way, hopefully conversation will be able to be generated in a more organic manner.
                </li>
            </ul>
            <ul className="list-inline item-details">
                <li>Date:
                    <strong>Future
                    </strong>
                </li>
                <li>Focus:
                    <strong>Python, MongoDB, React, D3, Android, NLP, GoLang, Networking
                    </strong>
                </li>
            </ul>
        </ModalFrame>
    )
}

export default ProjectIdeasModal;
