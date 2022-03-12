import React from "react";
import ReactDOM from "react-dom";
import './Booklover.css';
import SecondHeader from "../Home/Header/SecondHeader";

const PageBooks = (props) => {

    const Books = props.allbooks.map((books) =>
        <div className="containerBooks" key={books.id}>
            <h3 className="titles">{books.title}</h3>
            <p> by {books.Author}</p>
            <div className="skill-percentage">
                <div
                    style={{ width: books.ratingPercentage + "%" }}
                    className="active-percentage-bar"
                ><h4 className="rating_number">{books.ratingPercentage}%</h4></div>
            </div>
        </div>

    );
    return (
        <div >
            <SecondHeader />
            <div className="demo-wrap">
                {Books}
            </div>
        </div>
    );
}

const books = [
    { id: 1, Author: "Tim Marshall", title: "The Power of Geography", ratingPercentage: 80 },
    { id: 2, Author: "Morten Brask", title: "The Perfect Life of William Sidis", ratingPercentage: 70 },
    { id: 3, Author: "Spencer Johnson", title: "Who moved my cheese", ratingPercentage: 65 },
    { id: 4, Author: "Leonard Mlodinow", title: "The Drunkard's Walk: How Randomness Rules Our Lives", ratingPercentage: 85 },
    { id: 5, Author: "John Maccormick", title: "Nine Algorithms That Changed the Future: The Ingenious Ideas That Drive Today's Computers", ratingPercentage: 72 },
    { id: 6, Author: "Steve Anderson", title: "The Bezos Letters: 14 Principles to Grow Your Business Like Amazon", ratingPercentage: 70 },
    { id: 7, Author: "Erica Dhawan", title: "Digital Body Language: How to Build Trust and Connection, No Matter the Distance", ratingPercentage: 73 },
    { id: 8, Author: "Kazuo Ishiguro", title: "Klara and the Sun", ratingPercentage: 80 },
    { id: 9, Author: "Stéphane Garnier", title: "How to Think Like a Cat", ratingPercentage: 55 },
    { id: 10, Author: "Tzu Sun", title: "The Art of War", ratingPercentage: 60 },
    { id: 11, Author: "Seneca", title: "On The Happy Life", ratingPercentage: 63 },
    { id: 12, Author: "Mark Manson", title: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life ", ratingPercentage: 61 },
    { id: 13, Author: "Eckhart Tolle", title: "The Power of Now: A Guide to Spiritual Enlightenment", ratingPercentage: 77 },
    { id: 14, Author: "Abbie Headon", title: "The Power of NO", ratingPercentage: 52 },
    { id: 15, Author: "Eric Ries", title: "The Lean Startup", ratingPercentage: 66 },
    { id: 16, Author: "Ichiro Kishimi and Fumitake Koga", title: "The Courage to Be Disliked", ratingPercentage: 70 },
    { id: 17, Author: "Mirin Fader", title: "Giannis: The Improbable Rise of an NBA MVP", ratingPercentage: 81 },
    { id: 18, Author: "Tony Robbins", title: "Awaken The Giant WithinAwaken The Giant Within", ratingPercentage: 87 },
    { id: 19, Author: "Eckhart Tolle", title: "A New Earth: Awakening to Your Life's Purpose", ratingPercentage: 72 },
    { id: 20, Author: "Light Watkins ", title: "Bliss More: How to Succeed in Meditation Without Really Trying", ratingPercentage: 58 },
    { id: 21, Author: "Mitch Albom", title: "Tuesdays with Morrie: An Old Man, A Young Man and Life's Greatest Lesson", ratingPercentage: 79 },
    { id: 22, Author: "Stefanos Xenakis ", title: "The Simplest Gift", ratingPercentage: 80 },
    { id: 23, Author: "Stefanos Xenakis ", title: "The Simplest Gift 2", ratingPercentage: 78 },
    { id: 24, Author: "Stefanos Xenakis ", title: "Captain", ratingPercentage: 84 },
    { id: 25, Author: "Brian Christian, Tom Griffiths,", title: "Algorithms to Live By: The Computer Science of Human Decisions", ratingPercentage: 83 },
    { id: 26, Author: "Jorge Cham and Daniel Whiteson", title: "We Have No Idea: A Guide to the Unknown Universe", ratingPercentage: 79 },
    { id: 27, Author: "Leonard Mlodinow", title: "Subliminal: How Your Unconscious Mind Rules Your Behavior", ratingPercentage: 85 },
    { id: 14, Author: "Abbie Headon", title: "The Power of NO", ratingPercentage: 52 },

];
ReactDOM.render(
    <PageBooks allbooks={books} />,
    document.getElementById('root')
);

export default PageBooks;